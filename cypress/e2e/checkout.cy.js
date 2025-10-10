describe('Testes do Processo de Checkout', () => {
  beforeEach(() => {
    // Login, adiciona item e navega para o checkout antes de cada teste
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
  });

  it('CT-CHECKOUT-001: Deve preencher as informações do comprador e continuar', () => {
    cy.get('[data-test="firstName"]').type('João');
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="postalCode"]').type('12345-678');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');
  });

  it('CT-CHECKOUT-002 & CT-CHECKOUT-003: Deve visualizar o resumo e finalizar a compra', () => {
    // Preenche as informações primeiro
    cy.get('[data-test="firstName"]').type('Maria');
    cy.get('[data-test="lastName"]').type('Souza');
    cy.get('[data-test="postalCode"]').type('98765-432');
    cy.get('[data-test="continue"]').click();

    // CT-CHECKOUT-002: Visualiza o resumo
    cy.get('.summary_info').should('be.visible');
    cy.get('.cart_item').should('have.length', 1);
    cy.get('.summary_total_label').should('contain.text', 'Total:');

    // CT-CHECKOUT-003: Finaliza a compra e verifica mensagem de sucesso
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
  });

  it('Deve exibir erro ao tentar continuar sem preencher as informações', () => {
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Error: First Name is required');
  });
});


