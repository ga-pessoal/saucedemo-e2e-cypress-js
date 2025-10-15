class InventarioPage {
  // Seletores dos elementos da página de Inventário
  elements = {
    selectFiltro: () => cy.get('.product_sort_container'),
    badgeCarrinho: () => cy.get('.shopping_cart_badge'),
    botaoSecundario: '.btn_secondary',
    botaoPrimario: '.btn_primary',
    listaDeProdutos: '.inventory_list',
    item: '.inventory_item',
    itemNome: '.inventory_item_name',
    itemDescricao: '.inventory_item_desc',
    itemPreco: '.inventory_item_price',
    itemImagem: '.inventory_item_img img'
  };

  // Métodos para interagir com a página de Inventário
  selecionaFiltro(filtro) {
    this.elements.selectFiltro().select(filtro);
    this.elements.selectFiltro().should('have.value', filtro);
  };

  listaDeProdutosVisivel(produtos) {
    // Verifica se a lista de produtos está visível e contém produtos
    cy.get(`${this.elements.listaDeProdutos} ${this.elements.item}`).should('have.length.greaterThan', 0);

    // Valida cada produto na lista
    cy.get(this.elements.item).should('have.length', produtos.length)
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

  adicionaProdutoAoCarrinho(nomeDoProduto) {
    // Clica no botão "Add to cart" do produto especificado
    cy.contains(this.elements.item, nomeDoProduto)
      .find('button')
      .click();

    // Verifica se o badge do carrinho foi atualizado para 1
    this.elements.badgeCarrinho().should('have.text', '1');

    // Verifica se o botão mudou para "Remove"
    cy.contains(this.elements.item, nomeDoProduto)
      .find(this.elements.botaoSecundario)
      .should('be.visible')
      .and('have.text', 'REMOVE');
  };

  removerProdutoDoCarrinho(nomeDoProduto) {
    // Clica no botão "Remove" do produto especificado
    cy.contains(this.elements.item, nomeDoProduto)
      .find(this.elements.botaoSecundario)
      .click();

    // Verifica se o badge do carrinho desapareceu
    this.elements.badgeCarrinho().should('not.exist');

    // Verifica se o botão voltou para "Add to cart"
    cy.contains(this.elements.item, nomeDoProduto)
      .find(this.elements.botaoPrimario)
      .should('be.visible')
      .and('have.text', 'ADD TO CART');
  };

  acessarDetalhesDoProduto(produto) {
    // Clica no nome do produto para acessar a página de detalhes
    cy.contains(this.elements.item, produto.name)
      .find(this.elements.itemNome)
      .click();

    // Verifica se a URL mudou para a página de detalhes do produto
    cy.url().should('include', `/inventory-item.html?id=${produto.id}`);
  };
};

export default new InventarioPage();