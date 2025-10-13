class InventarioPage {
  elements = {
    listaDeProdutos: '.inventory_list',
    item: '.inventory_item',
    itemProduto: '.inventory_item',
    itemNome: '.inventory_item_name',
    itemDescricao: '.inventory_item_desc',
    itemPreco: '.inventory_item_price',
    itemImagem: '.inventory_item_img img',
  };

  listaDeProdutosVisiveis(produtos) {
    cy.get(`${this.elements.listaDeProdutos} ${this.elements.item}`).should('have.length.greaterThan', 0);

    cy.get('.inventory_item').should('have.length', produtos.length)
      .each(($el, index) => {
        const produto = produtos[index];

        // Valida o nome do produto e o link
        cy.wrap($el).find(this.elements.itemNome)
          .should('have.text', produto.name)
          .closest('a') // Pega o elemento <a> pai
          .should('have.attr', 'href', `./inventory-item.html?id=${produto.id}`);

        // Valida a descrição do produto
        cy.wrap($el).find(this.elements.itemDescricao)
          .should('have.text', produto.desc);

        // Valida o preço do produto
        cy.wrap($el).find(this.elements.itemPreco)
          .should('have.text', produto.price);

        // Valida a imagem do produto e o link
        cy.wrap($el).find(this.elements.itemImagem)
          .should('have.attr', 'src', produto.img_src)
          .closest('a') // Pega o elemento <a> pai
          .should('have.attr', 'href', `./inventory-item.html?id=${produto.id}`);
      });
  };

};

export default new InventarioPage();