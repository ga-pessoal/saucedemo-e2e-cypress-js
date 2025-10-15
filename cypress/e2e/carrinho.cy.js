// Importação de Pages
import loginPage from "../support/pages/loginPage";
import inventarioPage from "../support/pages/inventarioPage";
import carrinhoPage from "../support/pages/carrinhoPage";

// Importação de dados
import userData from "../fixtures/userData.json";
import listaDeProdutos from "../fixtures/listaDeProdutos.json";

// Escolhe um produto da lista
const produto = listaDeProdutos.listagemInicial[0];

describe('Testes do Carrinho de Compras', () => {
  beforeEach(() => {
    // Login e adiciona um item ao carrinho antes de cada teste
    cy.visit('/');
    loginPage.login(userData.standardUser.username, userData.standardUser.password);

    // Adiciona ao carrinho
    inventarioPage.adicionaProdutoAoCarrinho(produto.name);

    // Navega para o carrinho
    carrinhoPage.navegarParaCarrinho();
  });

  it('CT-CART-001: Deve exibir os produtos adicionados no carrinho', () => {
    // Valida que o produto está no carrinho
    carrinhoPage.validaProdutoNoCarrinho(produto);
  });

  it('CT-CART-002: Deve remover produtos do carrinho', () => {
    // Remove o produto do carrinho
    carrinhoPage.removerProdutoDoCarrinho(produto.name);
  });

  it('CT-CART-003: Deve navegar para o checkout', () => {
    // Navega para o checkout
    carrinhoPage.navegarParaCheckout();
  });

  it('CT-CART-004: Deve continuar navegando e retornar ao inventário', () => {
    // Clica em "Continue Shopping"
    carrinhoPage.navegarParaInventario();
  });
});

