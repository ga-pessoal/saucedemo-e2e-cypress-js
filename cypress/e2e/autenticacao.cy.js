import loginPage from "../support/pages/loginPage";
import userData from "../fixtures/userData.json";

describe('Testes de Autenticação', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('CT-AUTH-001: Deve fazer login com sucesso com o usuário padrão', () => {
    loginPage.fillLogin(userData.standardUser.username, userData.standardUser.password);
    loginPage.submit();
    cy.url().should('include', '/inventory.html');
  });

  it('CT-AUTH-002: Deve exibir mensagem de erro para usuário bloqueado', () => {
    loginPage.fillLogin(userData.lockedOutUser.username, userData.lockedOutUser.password);
    loginPage.submit();
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('CT-AUTH-003: Deve exibir mensagem de erro para credenciais inválidas', () => {
    loginPage.fillLogin(userData.invalidUser.username, userData.invalidUser.password);
    loginPage.submit();
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('CT-AUTH-004: Deve fazer logout da aplicação com sucesso', () => {
    // Primeiro, faz o login
    loginPage.fillLogin(userData.standardUser.username, userData.standardUser.password);
    loginPage.submit();

    // Agora, faz o logout
    cy.get('.bm-burger-button > button').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('include', '/index.html');
    cy.get('input[type="submit"]').should('be.visible');
  });
});

