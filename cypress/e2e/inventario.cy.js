// Importação de Pages
import loginPage from "../support/pages/loginPage";
import inventarioPage from "../support/pages/inventarioPage";
import produtoPage from "../support/pages/produtoPage";

// Importação de dados
import userData from "../fixtures/userData.json";
import listaDeProdutos from "../fixtures/listaDeProdutos.json";

describe('Testes do Catálogo de Produtos (Inventário)', () => {
  beforeEach(() => {
    // Faz login antes de cada teste deste grupo
    cy.visit('/');

    loginPage.login(userData.standardUser.username, userData.standardUser.password);
  });

  it('CT-INV-001: Deve exibir a lista de produtos', () => {
    inventarioPage.listaDeProdutosVisivel(listaDeProdutos.listagemInicial);
  });

  it('CT-INV-002: Deve ordenar os produtos corretamente', () => {
    // Ordena A-Z (padrão) e verifica o primeiro item
    inventarioPage.listaDeProdutosVisivel(listaDeProdutos.listagemInicial);

    // Ordena Z-A
    inventarioPage.selecionaFiltro('za');
    inventarioPage.listaDeProdutosVisivel(listaDeProdutos.listagemZaA);

    // Ordena por Preço (Baixo-Alto)
    inventarioPage.selecionaFiltro('lohi');
    inventarioPage.listaDeProdutosVisivel(listaDeProdutos.listagemPrecoBaixoAlto);

    // Ordena por Preço (Alto-Baixo)
    inventarioPage.selecionaFiltro('hilo');
    inventarioPage.listaDeProdutosVisivel(listaDeProdutos.listagemPrecoAltoBaixo);
  });

  it('CT-INV-003 & CT-INV-004: Deve adicionar e remover produtos do carrinho', () => {
    // Adiciona ao carrinho
    inventarioPage.adicionaProdutoAoCarrinho('Sauce Labs Backpack');

    // Remove do carrinho
    inventarioPage.removerProdutoDoCarrinho('Sauce Labs Backpack');
  });

  it('CT-INV-005: Deve acessar a página de detalhes de um produto', () => {
    // Escolhe um produto da lista
    const produto = listaDeProdutos.listagemInicial[0];

    // Acessa o detalhe do produto
    inventarioPage.acessarDetalhesDoProduto(produto);

    // Valida os dados de detalhe do produto
    produtoPage.validaDetalhesDoProduto(produto);
  });

  // TODO: Criar CT-INV-006: Validar que o carrinho mantém os itens ao navegar para a página de detalhes do produto
  // TODO: Criar CT-INV-007: Adicionar e remover produtos pela página de detalhes do produto
  // TODO: Criar CT-INV-008: Adicionar multiplos produtos ao carrinho e validar o contador
});