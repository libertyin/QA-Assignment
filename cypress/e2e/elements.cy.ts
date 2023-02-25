import { HomePage } from '../support/pages/homePage';
import { ElementsPage } from '../support/pages/elementsPage';
import { record1, record2 } from '../fixtures/records';

const homePage = new HomePage();
const elementsPage = new ElementsPage();

describe('Elements TCs', () => {
  beforeEach(() => {
    cy.visit('/');
    homePage.openPage('Elements');
    homePage.expectPageOpened('Elements');
  });

  it('Verify user can enter new data into the table', () => {
    elementsPage.navigateByMenu('Web Tables');
    elementsPage.clickAddRecordButton();
    elementsPage.fillRecordRegistrationForm(record1);
    elementsPage.clickSubmitRecordButton();
    elementsPage.expectRecordInTable(record1);
  });

  it('Verify user can edit the row in a table', () => {
    elementsPage.navigateByMenu('Web Tables');
    elementsPage.clickEditRecordButton(2);
    elementsPage.changeRecordFirstName(record2.firstName);
    elementsPage.changeRecordLastName(record2.lastName);
    elementsPage.clickSubmitRecordButton();
    elementsPage.expectRecordInTable(record2);
  });
});
