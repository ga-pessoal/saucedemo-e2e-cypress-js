import loginPage from "../support/pages/loginPage";
import userData from "../fixtures/userData.json";

describe('Testes de Autenticação', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('CT-AUTH-001: Deve fazer login com sucesso com o usuário padrão', () => {
    // Fazer login
    loginPage.login(userData.standardUser.username, userData.standardUser.password);

    // Verificar se o login foi bem-sucedido
    cy.url().should('include', '/inventory.html');
  });

  it('CT-AUTH-002: Deve exibir mensagem de erro para usuário bloqueado', () => {
    // Fazer login com usuário bloqueado
    loginPage.login(userData.lockedOutUser.username, userData.lockedOutUser.password);

    // Verificar a mensagem de erro
    loginPage.retornaMensagemDeErro().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('CT-AUTH-003: Deve exibir mensagem de erro para credenciais inválidas', () => {
    // Fazer login com credenciais inválidas
    loginPage.login(userData.invalidUser.username, userData.invalidUser.password);

    // Verificar a mensagem de erro
    loginPage.retornaMensagemDeErro().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('CT-AUTH-004: Deve fazer logout da aplicação com sucesso', () => {
    // Primeiro, faz o login
    loginPage.login(userData.standardUser.username, userData.standardUser.password);

    // Agora, faz o logout
    loginPage.logout();
  });
});

