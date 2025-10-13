// Importação de Pages
import loginPage from "../support/pages/loginPage";
import inventarioPage from "../support/pages/inventarioPage";

// Importação de dados
import userData from "../fixtures/userData.json";
import listaDeProdutos from "../fixtures/listaDeProdutos.json";

describe('Testes do Catálogo de Produtos (Inventário)', () => {
  beforeEach(() => {
    // Faz login antes de cada teste deste grupo
    cy.visit('/');

    loginPage.fillLogin(userData.standardUser.username, userData.standardUser.password);
    loginPage.submit();
  });

  it.only('CT-INV-001: Deve exibir a lista de produtos', () => {
    inventarioPage.listaDeProdutosVisiveis(listaDeProdutos.listagemInicial);
  });

  it('CT-INV-002: Deve ordenar os produtos corretamente', () => {
    // Ordena A-Z (padrão) e verifica o primeiro item
    cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Backpack');

    // Ordena Z-A
    cy.get('[data-test="product_sort_container"]').select('za');
    cy.get('.inventory_item_name').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)');

    // Ordena por Preço (Baixo-Alto)
    cy.get('[data-test="product_sort_container"]').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');

    // Ordena por Preço (Alto-Baixo)
    cy.get('[data-test="product_sort_container"]').select('hilo');
    cy.get('.inventory_item_price').first().should('have.text', '$49.99');
  });

  it('CT-INV-003 & CT-INV-004: Deve adicionar e remover produtos do carrinho', () => {
    // Adiciona ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');

    // Remove do carrinho
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
  });

  it('CT-INV-005: Deve acessar a página de detalhes de um produto', () => {
    cy.get('#item_4_title_link > .inventory_item_name').click(); // Clica no nome do "Sauce Labs Backpack"
    cy.url().should('include', '/inventory-item.html?id=4');
    cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack');
  });
});