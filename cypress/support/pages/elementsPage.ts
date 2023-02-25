export class ElementsPage {
  private addRecordButton: string;
  private editRecordButton: string;
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
    this.editRecordButton = '#edit-record-';
    this.addRecordButton = '#addNewRecordButton';
    this.recordFirstNameInput = '#firstName';
    this.recordLastNameInput = '#lastName';
    this.recordEmailInput = '#userEmail';
    this.recordAgeInput = '#age';
    this.recordSalaryInput = '#salary';
    this.recordDepartmentInput = '#department';
    this.recordSubmitButton = '#submit';
    this.recordTableRow = '[role="rowgroup"]';
    this.recordTableCell = '[role="gridcell"]';
  }

  clickAddRecordButton() {
    cy.get(this.addRecordButton).click();
  }

  clickEditRecordButton(numberOfTableCell: number) {
    cy.get(this.editRecordButton + numberOfTableCell).click();
  }

  fillRecordRegistrationForm(recond: IWebTableRecord) {
    cy.get(this.recordFirstNameInput).type(recond.firstName);
    cy.get(this.recordLastNameInput).type(recond.lastName);
    cy.get(this.recordEmailInput).type(recond.email);
    cy.get(this.recordAgeInput).type(recond.age);
    cy.get(this.recordSalaryInput).type(recond.salary);
    cy.get(this.recordDepartmentInput).type(recond.department);
  }

  changeRecordFirstName(newFirstName: string) {
    cy.get(this.recordFirstNameInput).clear().type(newFirstName);
  }

  changeRecordLastName(newLastName: string) {
    cy.get(this.recordLastNameInput).clear().type(newLastName);
  }

  clickSubmitRecordButton() {
    cy.get(this.recordSubmitButton).click();
  }

  expectRecordInTable(record: IWebTableRecord) {
    cy.get(this.recordTableRow)
      .contains(record.firstName + record.lastName + record.age)
      .within(() => {
        cy.get(this.recordTableCell).eq(0).should('have.text', record.firstName);
        cy.get(this.recordTableCell).eq(1).should('have.text', record.lastName);
        cy.get(this.recordTableCell).eq(2).should('have.text', record.age);
        cy.get(this.recordTableCell).eq(3).should('have.text', record.email);
        cy.get(this.recordTableCell).eq(4).should('have.text', record.salary);
        cy.get(this.recordTableCell).eq(5).should('have.text', record.department);
      });
  }

  expectBrokenImage(imageUrl: string) {
    cy.get(`img[src="${imageUrl}"]`).should('be.visible');
    cy.get(`img[src="${imageUrl}"]`).then(($img) => {
      expect($img[0].naturalWidth).to.eq(0);
    });
  }
}
