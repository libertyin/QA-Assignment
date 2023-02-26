const API_BASE_URL = Cypress.config().baseUrl;

export const addListOfBooks = (authToken: string, userId: string, books: any[]) => {
  cy.log('Add List Of Books Request');
  return cy
    .request({
      method: 'POST',
      url: `${API_BASE_URL}/BookStore/v1/Books`,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        userId: `${userId}`,
        collectionOfIsbns: books.map((book) => ({
          isbn: book.isbn,
          title: book.title,
        })),
      },
    })
    .then((response) => {
      return response;
    });
};

export const deleteBookFromList = (authToken: string, userId: string, isbn: string) => {
  cy.log('Delete book from List Of Books Request');
  return cy
    .request({
      method: 'DELETE',
      url: `${API_BASE_URL}/BookStore/v1/Book`,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        userId: `${userId}`,
        isbn: `${isbn}`,
      },
    })
    .then((response) => {
      return response;
    });
};

export const deleteAllBooks = (authToken: string, userId: string) => {
  cy.log('Delete All Books Request');
  return cy
    .request({
      method: 'DELETE',
      url: `${API_BASE_URL}/BookStore/v1/Books?UserId=${userId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((response) => {
      expect(response.status).to.eq(204);
      return response;
    });
};
