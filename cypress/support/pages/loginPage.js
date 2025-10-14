class LoginPage {
  // Seletores dos elementos da página de login
  elements = {
    errorMessage: () => cy.get('h3[data-test="error"]'),
    burgerMenuButton: () => cy.get('.bm-burger-button > button'),
    logoutLink: () => cy.get('#logout_sidebar_link'),
  }

  // Métodos para interagir com a página de login
  login(username, password) {
    cy.fillInputUsernameLogin(username);
    cy.fillInputPasswordLogin(password);

    cy.clickLoginButton();
  }

  retornaMensagemDeErro() {
    return this.elements.errorMessage();
  }

  logout() {
    this.elements.burgerMenuButton().click();
    this.elements.logoutLink().click();
    cy.url().should('include', '/index.html');
    cy.get('input[type="submit"]').should('be.visible');
  }
}

export default new LoginPage();