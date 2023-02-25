import { createNewAccount } from '../support/api/bookStoreRequests';
import { getRandomString } from '../support/api/methords-helpers';

const userName = getRandomString(5);
const password = getRandomString(10);

describe('User API TCs', () => {
  before(() => {
    createNewAccount(userName, password);
  });

  it('Add a list of books', () => {});
});
