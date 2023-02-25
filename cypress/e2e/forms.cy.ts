import { HomePage } from '../support/pages/homePage';
import { FormsPage } from '../support/pages/formsPage';
import { student1 } from '../fixtures/studens';

const homePage = new HomePage();
const formsPage = new FormsPage();

describe('Forms TCs', () => {
  beforeEach(() => {
    cy.visit('/');
    homePage.openPage('Forms');
    homePage.expectPageOpened('Forms');
  });

  it('Verify user can submit the form', () => {
    homePage.navigateByMenu('Practice Form');
    formsPage.fillStudentRegistrationForm(student1);
    formsPage.clickSubmitFormButton();
    formsPage.expectFormConfirmationMessage();
    formsPage.expectFormDataIsCorrect(student1);
    formsPage.clickCloseFormButton();
  });
});
