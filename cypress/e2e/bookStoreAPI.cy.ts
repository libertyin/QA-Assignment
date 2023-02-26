import { books, invalidBooks } from '../fixtures/books';
import { createNewAccount, generateToken } from '../support/api/authRequests';
import { addListOfBooks, deleteAllBooks, deleteBookFromList } from '../support/api/bookStoreRequests';
import { getRandomString } from '../support/api/methords-helpers';

let userId: string;
let authToken: string;
const userName = getRandomString(5);
const password = getRandomString(10);

describe('Book Store API TCs', () => {
  before(() => {
    createNewAccount(userName, password).then((Id) => {
      userId = Id;
    });
    generateToken(userName, password).then((token) => {
      authToken = token;
    });
  });

  it('Add/Delete books positive scenario', () => {
    addListOfBooks(authToken, userId, books).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.books).to.have.length(2);
      expect(response.body.books[0].isbn).to.eq(books[0].isbn);
      expect(response.body.books[0].title).to.eq(books[0].title)
      expect(response.body.books[1].isbn).to.eq(books[1].isbn);
      expect(response.body.books[1].title).to.eq(books[1].title)
    });
    deleteBookFromList(authToken, userId, books[0].isbn).then((response) => {
      expect(response.status).to.eq(204);
    });
    deleteBookFromList(authToken, userId, books[1].isbn).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it('Add/Delete books negative scenario', () => {
    addListOfBooks(authToken, userId, invalidBooks).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("ISBN supplied is not available in Books Collection!");
    });
    deleteBookFromList(authToken, userId, invalidBooks[0].isbn).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("ISBN supplied is not available in User's Collection!");
    });
  });

  after(() => {
    deleteAllBooks(authToken, userId);
  });
});
