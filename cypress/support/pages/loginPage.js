class LoginPage {
  // Selectors for the login page elements
  elements = {
    errorMessage: () => cy.get('h3[data-test="error"]'),
  }

  // Methods to interact with the login page
  fillLogin(username, password) {
    cy.fillInputUsernameLogin(username);
    cy.fillInputPasswordLogin(password);
  }

  submit() {
    cy.clickLoginButton();
  }

  getErrorMessage() {
    return this.elements.errorMessage();
  }
}

export default new LoginPage();