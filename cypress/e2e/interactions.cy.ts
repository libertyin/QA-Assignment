import { HomePage } from '../support/pages/homePage';
import { InteractionsPage } from '../support/pages/interactionsPage';

const homePage = new HomePage();
const interactionsPage = new InteractionsPage();

describe('Interactions TCs', () => {
  beforeEach(() => {
    cy.visit('/');
    homePage.openPage('Interactions');
    homePage.expectPageOpened('Interactions');
  });

  it('Verify user can drag and drop', () => {
    homePage.navigateByMenu('Droppable');
    interactionsPage.dragAndDropElement();
    interactionsPage.expectElementSuccessfullyDropped();
  });
});
