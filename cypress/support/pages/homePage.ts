export class HomePage {
  private pageLink: string;
  private pageHeader: string;

  constructor() {
    this.pageLink = '.card-body h5';
    this.pageHeader = '.main-header';
  }

  openPage(pageName: string) {
    cy.get(this.pageLink).contains(pageName).click();
  }

  expectPageOpened(pageName: string) {
    cy.get(this.pageHeader).should('have.text', pageName);
  }
}
