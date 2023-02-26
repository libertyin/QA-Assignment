# QA-Assignment

### Tools

1. Cypress
2. Typescript
3. Prettier

### Installation

```npm install```

### Running tests

Tests can be run from ```package.json``` file scripts: 

  + ```cypress:open``` - runs tests in headed mode
  
  + ```cy:run:chrome```, ```cy:run:edge```, ```cy:run:firefox``` - runs tests in headless mode in browsers: chrome, edge, firefox
  
  + ```format``` - formats code with prettier

### Repository stracture

+ **e2e/** - UI tests for task 1-7. Tests are logically separated by menu sections on a website, each test is independent and can be run separately
  + **elements.cy.ts**
  + **forms.cy.ts**
  + **interactions.cy.ts**
  + **widgets.cy.ts**
+ **e2e/bookStoreAPI.cy.ts** - API tests for task 8-10. Creation of account is in "before" method, Add/Delete books have 1 positive and 1 negative test
+ **fixtures** - test data used in tests
+ **interfaces** - interfaces for test data
+ **support/api** - api requests used in task 8-10
+ **support/pages** - page object model used in task 1-7
