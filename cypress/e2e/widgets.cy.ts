import { HomePage } from '../support/pages/homePage';
import { WidgetsPage } from '../support/pages/widgetsPage';

const homePage = new HomePage();
const widgetsPage = new WidgetsPage();

describe('Forms TCs', () => {
  beforeEach(() => {
    cy.visit('/');
    homePage.openPage('Widgets');
    homePage.expectPageOpened('Widgets');
  });

  it('Verify the progress bar', () => {
    homePage.navigateByMenu('Progress Bar');
    widgetsPage.clickStartProgressBarButton();
    widgetsPage.expectProgressBarFinished();
  });
});
