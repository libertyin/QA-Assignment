export class HomePage {
  private pageLink: string;
  private pageHeader: string;
  private menuSection: string;

  constructor() {
    this.pageLink = '.card-body h5';
    this.pageHeader = '.main-header';
    this.menuSection = '.menu-list li';
  }

  openPage(pageName: string) {
    cy.get(this.pageLink).contains(pageName).click();
  }

  expectPageOpened(pageName: string) {
    cy.get(this.pageHeader).should('have.text', pageName);
  }

  navigateByMenu(menuName: string) {
    cy.get(this.menuSection).contains(menuName).click();
  }
}
