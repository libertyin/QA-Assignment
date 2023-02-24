export class ElementsPage {
  private menuSection: string;
  /* web tables */
  private addRecordButton: string;
  private recordFirstNameInput: string;
  private recordLastNameInput: string;
  private recordEmailInput: string;
  private recordAgeInput: string;
  private recordSalaryInput: string;
  private recordDepartmentInput: string;
  private recordSubmitButton: string;
  private recordTableRow: string;
  private recordTableCell: string;

  constructor() {
    this.menuSection = '.menu-list li';
    this.addRecordButton = '#addNewRecordButton';
    this.recordFirstNameInput = '#firstName';
    this.recordLastNameInput = '#lastName';
    this.recordEmailInput = '#userEmail';
    this.recordAgeInput = '#age';
    this.recordSalaryInput = '#salary';
    this.recordDepartmentInput = '#department';
    this.recordSubmitButton = '#submit';
    this.recordTableRow = '[role="rowgroup"]',
    this.recordTableCell = '[role="gridcell"]'
  }

  navigateByMenu(menuName: string) {
    cy.get(this.menuSection).contains(menuName).click();
  }

  clickAddRecordButton() {
    cy.get(this.addRecordButton).click();
  }

  fillRecordRegistrationForm(
    recond: IWebTableRecord
  ) {
    cy.get(this.recordFirstNameInput).type(recond.firstName);
    cy.get(this.recordLastNameInput).type(recond.lastName);
    cy.get(this.recordEmailInput).type(recond.email);
    cy.get(this.recordAgeInput).type(recond.age);
    cy.get(this.recordSalaryInput).type(recond.salary);
    cy.get(this.recordDepartmentInput).type(recond.department);
  }

  clickSubmitRecordButton() {
    cy.get(this.recordSubmitButton).click();
  }

  expectRecordInTable(
    record: IWebTableRecord
  ) {
    cy.get(this.recordTableRow).contains(record.firstName + record.lastName + record.age).within(() => {
      cy.get(this.recordTableCell).eq(0).should('have.text', record.firstName);
      cy.get(this.recordTableCell).eq(1).should('have.text', record.lastName);
      cy.get(this.recordTableCell).eq(2).should('have.text', record.age);
      cy.get(this.recordTableCell).eq(3).should('have.text', record.email);
      cy.get(this.recordTableCell).eq(4).should('have.text', record.salary);
      cy.get(this.recordTableCell).eq(5).should('have.text', record.department);
    });
  }
}
