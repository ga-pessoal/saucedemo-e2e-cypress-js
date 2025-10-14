class DetalheProdutoPage {
  elements = {
    itemNome: () => cy.get('.inventory_details_name'),
    itemDescricao: () => cy.get('.inventory_details_desc'),
    itemPreco: () => cy.get('.inventory_details_price'),
    itemImagem: () => cy.get('.inventory_details_img'),
  }

  validaDetalhesDoProduto(produto) {
    this.elements.itemNome()
      .should('have.text', produto.name);

    this.elements.itemDescricao()
      .should('have.text', produto.desc);

    this.elements.itemPreco()
      .should('have.text', produto.price);

    this.elements.itemImagem()
      .should('have.attr', 'src', produto.img_src);

    cy.validaBotaoPrimario();
  }

}

export default new DetalheProdutoPage();