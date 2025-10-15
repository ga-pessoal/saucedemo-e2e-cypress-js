class CarrinhoPage {
  // Seletores dos elementos da página de Carrinho
  elements = {
    linkCarrinho: () => cy.get('.shopping_cart_link'),
    item: '.cart_item',
    itemNome: () => cy.get('.inventory_item_name'),
    itemDescricao: () => cy.get('.inventory_item_desc'),
    itemPreco: () => cy.get('.inventory_item_price'),
    botaoRemover: '.btn_secondary',
    botaoCheckout: () => cy.get('.checkout_button'),
    botaoContinuarComprando: () => cy.get('.cart_footer > .btn_secondary')
  };

  // Métodos para interagir com a página de Carrinho
  navegarParaCarrinho() {
    // Clica no ícone do carrinho
    this.elements.linkCarrinho().click();

    // Verifica se a URL mudou para a página do carrinho
    cy.url().should('include', '/cart.html');
  };

  validaProdutoNoCarrinho(produto) {
    // Verifica as informações do produto no carrinho
    cy.get(this.elements.item).should('have.length', 1);
    this.elements.itemNome().should('have.text', produto.name);
    this.elements.itemDescricao().should('have.text', produto.desc);
    this.elements.itemPreco().should('have.text', produto.price);
  }

  removerProdutoDoCarrinho(nomeDoProduto) {
    // Clica no botão remover do produto especificado
    cy.contains(this.elements.item, nomeDoProduto)
      .find(this.elements.botaoRemover)
      .click();

    // Verifica se o carrinho está vazio
    cy.get(this.elements.item).should('not.exist');
  }

  navegarParaCheckout() {
    // Clica no botão checkout
    this.elements.botaoCheckout().click();

    // Verifica se a URL mudou para a página de checkout
    cy.url().should('include', '/checkout-step-one.html');
  }

  navegarParaInventario() {
    // Clica no botão continuar comprando
    this.elements.botaoContinuarComprando().click();

    // Verifica se a URL voltou para a página de inventário
    cy.url().should('include', '/inventory.html');
  }
}

export default new CarrinhoPage();