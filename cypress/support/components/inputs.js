// Selectors for the inputs components
const elements = {
  usernameInput: () => cy.get('input[data-test="username"]'),
  passwordInput: () => cy.get('input[data-test="password"]'),
  errorMessage: () => cy.get('h3[data-test="error"]'),
}

// Commands for interacting with the inputs
Cypress.Commands.add('fillInputUsernameLogin', (text) => {
  elements.usernameInput()
    .should('be.visible')
    .and('have.css', 'margin', '0px 0px 25px')
    .and('have.css', 'border-bottom', '1px solid rgb(204, 204, 204)')
    .and('have.css', 'padding', '10px 0px')
    .type(text);
});

Cypress.Commands.add('fillInputPasswordLogin', (text) => {
  elements.passwordInput()
    .should('be.visible')
    .and('have.css', 'margin', '0px 0px 25px')
    .and('have.css', 'border-bottom', '1px solid rgb(204, 204, 204)')
    .and('have.css', 'padding', '10px 0px')
    .type(text);
});