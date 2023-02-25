export class InteractionsPage {
  dragMeElement: string;
  dropHereBox: string;

  constructor() {
    this.dragMeElement = '#draggable';
    this.dropHereBox = '#droppable';
  }

  dragAndDropElement() {
    cy.get(this.dragMeElement).trigger('mousedown', { which: 1 });
    cy.get(this.dropHereBox).trigger('mousemove').trigger('mouseup', { force: true });
  }

  expectElementSuccessfullyDropped() {
    cy.get(this.dropHereBox).should('have.text', 'Dropped!');
  }
}
