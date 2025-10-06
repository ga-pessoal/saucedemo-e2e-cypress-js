// Selectors for the buttons components
const elements = {
  loginButton: () => cy.get('input[type="submit"]'),
}

// Commands for interacting with the buttons
Cypress.Commands.add('clickLoginButton', () => {
  elements.loginButton()
    .should('be.visible')
    .and('have.css', 'background-color', 'rgb(226, 35, 26)')
    .and('have.css', 'border', '2px solid rgb(226, 35, 26)')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    .and('have.css', 'padding', '0px 20px')
    .and('have.css', 'line-height', '40px')
    .and('have.css', 'font-size', '15.4px')
    .and('have.css', 'display', 'inline-block')
    .click();
});