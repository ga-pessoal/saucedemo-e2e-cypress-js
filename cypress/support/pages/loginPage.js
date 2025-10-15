class LoginPage {
  // Seletores dos elementos da página de Login
  elements = {
    errorMessage: () => cy.get('h3[data-test="error"]'),
    burgerMenuButton: () => cy.get('.bm-burger-button > button'),
    logoutLink: () => cy.get('#logout_sidebar_link'),
  }

  // Métodos para interagir com a página de Login
  login(username, password) {
    // Preenche os campos de usuário e senha
    cy.fillInputUsernameLogin(username);
    cy.fillInputPasswordLogin(password);

    // Clica no botão de login
    cy.clickLoginButton();
  }

  retornaMensagemDeErro() {
    // Retorna a mensagem de erro exibida na tela
    return this.elements.errorMessage();
  }

  logout() {
    // Clica no botão do menu e depois no link de logout
    this.elements.burgerMenuButton().click();
    this.elements.logoutLink().click();

    // Verifica se a URL voltou para a página de login
    cy.url().should('include', '/index.html');

    // Verifica se o botão de login está visível
    cy.get('input[type="submit"]').should('be.visible');
  }
}

export default new LoginPage();