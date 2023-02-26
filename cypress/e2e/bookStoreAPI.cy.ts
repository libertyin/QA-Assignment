import { books } from '../fixtures/books';
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

  it('Add a list of books', () => {
    addListOfBooks(authToken, userId).then((response) => {
      expect(response.body.books).to.have.length(2);
      expect(response.body.books[0].isbn).to.eq(books[0].isbn);
      expect(response.body.books[1].isbn).to.eq(books[1].isbn);
    });
  });

  it('Delete book from list of books', () => {
    deleteBookFromList(authToken, userId, books[0].isbn);
  });

  after(() => {
    deleteAllBooks(authToken, userId);
  });
});
