export class WidgetsPage {
    private startProgressBarButton: string;
    private progressBar: string;
  
    constructor() {
       this.startProgressBarButton = '#startStopButton';
       this.progressBar = '#progressBar'
    }
  
    clickStartProgressBarButton() {
      cy.get(this.startProgressBarButton).click();
    }

    expectProgressBarFinished() {
      cy.get(this.progressBar).find('.bg-success')
      .should('have.css', 'background-color', 'rgb(40, 167, 69)')
      .should('have.text', '100%');
    }
  }