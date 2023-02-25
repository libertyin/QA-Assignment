export class WidgetsPage {
  private startProgressBarButton: string;
  private progressBar: string;
  private tooltipButton: string;

  constructor() {
    this.startProgressBarButton = '#startStopButton';
    this.progressBar = '#progressBar';
    this.tooltipButton = '#toolTipButton';
  }

  clickStartProgressBarButton() {
    cy.get(this.startProgressBarButton).click();
  }

  expectProgressBarFinished() {
    cy.get(this.progressBar)
      .find('.bg-success')
      .should('have.css', 'background-color', 'rgb(40, 167, 69)')
      .should('have.text', '100%');
  }

  hoverTooltipButton() {
    cy.get(this.tooltipButton).trigger('mouseover');
  }

  expectTooltipButtonText(tooltipText: string) {
    cy.get('.tooltip-inner').should('have.text', tooltipText);
  }
}
