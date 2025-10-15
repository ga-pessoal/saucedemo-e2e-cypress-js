class CarrinhoPage {
  // Seletores dos elementos da página de login
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

  // Métodos para interagir com a página de login
  navegarParaCarrinho() {
    this.elements.linkCarrinho().click();
    cy.url().should('include', '/cart.html');
  };

  validaProdutoNoCarrinho(produto) {
    cy.get(this.elements.item).should('have.length', 1);

    this.elements.itemNome().should('have.text', produto.name);
    this.elements.itemDescricao().should('have.text', produto.desc);
    this.elements.itemPreco().should('have.text', produto.price);
  }

  removerProdutoDoCarrinho(nomeDoProduto) {
    cy.contains(this.elements.item, nomeDoProduto)
      .find(this.elements.botaoRemover)
      .click();

    cy.get(this.elements.item).should('not.exist');
  }

  navegarParaCheckout() {
    this.elements.botaoCheckout().click();
    cy.url().should('include', '/checkout-step-one.html');
  }

  navegarParaInventario() {
    this.elements.botaoContinuarComprando().click();
    cy.url().should('include', '/inventory.html');
  }
}

export default new CarrinhoPage();