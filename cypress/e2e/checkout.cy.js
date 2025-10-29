// Importação de Pages
import loginPage from "../support/pages/loginPage";
import carrinhoPage from "../support/pages/carrinhoPage";
import inventarioPage from "../support/pages/inventarioPage";
import { checkoutPage } from "../support/pages/checkoutPage";


// Importação de dados
import userData from "../fixtures/userData.json";
import listaDeProdutos from "../fixtures/listaDeProdutos.json";
import informacoesDeCompra from "../fixtures/informacoesDeCompra.json";


// Escolhe um produto da lista
const produto = listaDeProdutos.listagemInicial[0];

describe('Testes do Processo de Checkout', () => {
  beforeEach(() => {
    // Login, adiciona item e navega para o checkout antes de cada teste
    cy.visit('/');
    loginPage.login(userData.standardUser.username, userData.standardUser.password);
    inventarioPage.adicionaProdutoAoCarrinho(produto.name);

    // Navega para o carrinho
    carrinhoPage.navegarParaCarrinho();

    // Navega para o checkout
    carrinhoPage.navegarParaCheckout();

  });

  it('CT-CHECKOUT-001: Deve preencher as informações do comprador e continuar', () => {
    // Preenche as informações do comprador e continua
    checkoutPage.preencherInformacoesDoComprador();
  });

  it('CT-CHECKOUT-002 & CT-CHECKOUT-003: Deve visualizar o resumo e finalizar a compra', () => {
    // Preenche as informações do comprador e continua
    checkoutPage.preencherInformacoesDoComprador();

    // Clica em continuar e verifica a URL
    checkoutPage.clicarContinuar();

    // CT-CHECKOUT-002: Visualiza o resumo
    checkoutPage.visualizarResumo(informacoesDeCompra);

    // CT-CHECKOUT-003: Finaliza a compra e verifica mensagem de sucesso
    checkoutPage.finalizarCompra();
  });

  it('Deve exibir erro ao tentar continuar sem preencher as informações', () => {
    // Clica em continuar sem preencher os campos
    checkoutPage.elements.botaoContinuar().click();

    // Verifica se a mensagem de erro é exibida
    checkoutPage.retornarMensagemErro()
      .should('be.visible')
      .and('contain.text', 'Error: First Name is required');

  });
});


