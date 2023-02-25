export class FormsPage {
  private menuSection: string;
  private formFirstNameInput: string;
  private formLastNameInput: string;
  private formEmailInput: string;
  private formGenderRadio: string;
  private formMobileInput: string;
  private formDateOfBithInput: string;
  private formSubjectsInput: string;
  private formUploadPictureButton: string;
  private formAddressInput: string;
  private formStateDropdown: string;
  private formCityDropdown: string;
  private formSubmitButton: string;
  private formConfirmationHeader: string;
  private formConfirmationData: string;
  private formCloseButton: string;

  constructor() {
    this.menuSection = '.menu-list li';
    this.formFirstNameInput = '#firstName';
    this.formLastNameInput = '#lastName';
    this.formEmailInput = '#userEmail';
    this.formGenderRadio = '[name="gender"]';
    this.formMobileInput = '#userNumber';
    this.formDateOfBithInput = '#dateOfBirthInput';
    this.formSubjectsInput = '#subjectsInput';
    this.formUploadPictureButton = '#uploadPicture';
    this.formAddressInput = '#currentAddress';
    this.formStateDropdown = '#state';
    this.formCityDropdown = '#city';
    this.formSubmitButton = '#submit';
    this.formConfirmationHeader = '#example-modal-sizes-title-lg';
    this.formConfirmationData = 'tbody';
    this.formCloseButton = '#closeLargeModal';
  }

  navigateByMenu(menuName: string) {
    cy.get(this.menuSection).contains(menuName).click();
  }

  fillStudentRegistrationForm(student: IFormRecord) {
    cy.get(this.formFirstNameInput).type(student.firstName);
    cy.get(this.formLastNameInput).type(student.lastName);
    cy.get(this.formEmailInput).type(student.email);
    cy.get(this.formGenderRadio + `[value="${student.gender}"]`).check({ force: true });
    cy.get(this.formMobileInput).type(student.mobile);

    //cy.get(this.formDateOfBithInput).clear().type(student.date); - simple version, but date picker gets broken on clear()
    cy.get(this.formDateOfBithInput).click();
    // Select the year (1990)
    cy.get('.react-datepicker__year-select').select('1990');
    // Select the month (January)
    cy.get('.react-datepicker__month-select').select('0');
    // Select the day (15th)
    cy.get('.react-datepicker__day--015').click();

    cy.get(this.formSubjectsInput).type(student.subjects).type('{enter}');

    student.hobbies.forEach((hobby: any) => {
      cy.get(`label`).contains(hobby).click();
    });

    cy.get(this.formUploadPictureButton).selectFile(`cypress/fixtures/${student.picture}`);
    cy.get(this.formAddressInput).type(student.currentAdress);

    const state = student.stateAndCity.split(' ')[0];
    const city = student.stateAndCity.split(' ')[1];
    cy.get(this.formStateDropdown).type(state);
    cy.get('.css-1n7v3ny-option').contains(state).click();
    cy.get(this.formCityDropdown).type(city);
    cy.get('.css-1n7v3ny-option').contains(city).click();
  }

  clickSubmitFormButton() {
    cy.get(this.formSubmitButton).click();
  }

  clickCloseFormButton() {
    cy.get(this.formCloseButton).click();
  }

  expectFormConfirmationMessage() {
    cy.get(this.formConfirmationHeader).should('have.text', 'Thanks for submitting the form');
  }

  expectFormDataIsCorrect(student: IFormRecord) {
    cy.get(this.formConfirmationData).should('contain', student.firstName);
    cy.get(this.formConfirmationData).should('contain', student.lastName);
    cy.get(this.formConfirmationData).should('contain', student.email);
    cy.get(this.formConfirmationData).should('contain', student.gender);
    cy.get(this.formConfirmationData).should('contain', student.mobile);
    cy.get(this.formConfirmationData).should('contain', student.dateOfBirth);
    cy.get(this.formConfirmationData).should('contain', student.subjects);
    student.hobbies.forEach((hobby: any) => {
      cy.get(this.formConfirmationData).should('contain', hobby);
    });
    cy.get(this.formConfirmationData).should('contain', student.picture);
    cy.get(this.formConfirmationData).should('contain', student.currentAdress);
    cy.get(this.formConfirmationData).should('contain', student.stateAndCity);
  }
}
