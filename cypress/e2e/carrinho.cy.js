import loginPage from "../support/pages/loginPage";
import userData from "../fixtures/userData.json";

describe('Testes do Carrinho de Compras', () => {
  beforeEach(() => {
    // Login e adiciona um item ao carrinho antes de cada teste
    cy.visit('/');

    loginPage.fillLogin(userData.standardUser.username, userData.standardUser.password);
    loginPage.submit();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });

  it.only('CT-CART-001: Deve exibir os produtos adicionados no carrinho', () => {
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 1);
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
  });

  it('CT-CART-002: Deve remover produtos do carrinho', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.cart_item').should('not.exist');
  });

  it('CT-CART-003: Deve navegar para o checkout', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');
  });

  it('CT-CART-004: Deve continuar navegando e retornar ao inventário', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="continue-shopping"]').click();
    cy.url().should('include', '/inventory.html');
  });
});

