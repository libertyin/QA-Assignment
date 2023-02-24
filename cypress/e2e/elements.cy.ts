import { HomePage } from '../support/pages/homePage';
import { ElementsPage } from '../support/pages/elementsPage';
import { record1 } from '../fixtures/records';

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
});
