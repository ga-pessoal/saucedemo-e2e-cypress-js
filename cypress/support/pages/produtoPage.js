class ProdutoPage {
  // Seletores dos elementos da página de Detalhe do Produto
  elements = {
    itemNome: () => cy.get('.inventory_details_name'),
    itemDescricao: () => cy.get('.inventory_details_desc'),
    itemPreco: () => cy.get('.inventory_details_price'),
    itemImagem: () => cy.get('.inventory_details_img'),
  }

  // Métodos para interagir com a página de Detalhe do Produto
  validaDetalhesDoProduto(produto) {
    // Verifica as informações do produto na página de detalhes
    cy.url().should('include', `/inventory-item.html?id=${produto.id}`);

    this.elements.itemNome()
      .should('have.text', produto.name);

    this.elements.itemDescricao()
      .should('have.text', produto.desc);

    this.elements.itemPreco()
      .should('have.text', produto.price);

    this.elements.itemImagem()
      .should('have.attr', 'src', produto.img_src);

    // Verifica se o botão "Add to cart" está visível
    cy.validaBotaoPrimario();
  }

}

export default new ProdutoPage();