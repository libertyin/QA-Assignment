const API_BASE_URL = Cypress.config().baseUrl;

export const createNewAccount = (userName: string, password: string) => {
  cy.log('Create New Account Request');
  return cy
    .request({
      method: 'POST',
      url: `${API_BASE_URL}/Account/v1/User`,
      body: {
        userName: `${userName}`,
        password: `${password}`,
      },
    })
    .then((response) => {
      expect(response.status).to.eq(201);
    });
};
