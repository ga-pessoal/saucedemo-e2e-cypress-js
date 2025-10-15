class CheckoutPage {
  // Seletores dos elementos da página de Checkout
  elements = {
    inputPrimeiroNome: () => cy.get('[data-test="firstName"]'),
    inputSobrenome: () => cy.get('[data-test="lastName"]'),
    inputCEP: () => cy.get('[data-test="postalCode"]'),
    botaoContinuar: () => cy.get('.checkout_buttons > input[type="submit"]'),
    item: () => cy.get('.cart_item'),
    itemNome: () => cy.get('.inventory_item_name'),
    itemPreco: () => cy.get('.inventory_item_price'),
    mensagemSucesso: () => cy.get('.complete-header'),
    containerSumario: () => cy.get('.summary_info'),
    sumarioItemTotal: () => cy.get('.summary_subtotal_label'),
    sumarioItemTaxa: () => cy.get('.summary_tax_label'),
    sumarioTotal: () => cy.get('.summary_total_label'),
    botaoFinalizar: () => cy.get('.cart_footer > .cart_button'),
    cabecalhoMensagem: () => cy.get('.complete-header'),
    mensagemErro: () => cy.get('[data-test="error"]')
  };

  // Métodos para interagir com a página de Checkout
  preencherInformacoesDoComprador(comprador) {
    // Preenche os campos do formulário
    this.elements.inputPrimeiroNome().type(comprador.primeiroNome);
    this.elements.inputSobrenome().type(comprador.sobrenome);
    this.elements.inputCEP().type(comprador.CEP);
  }

  clicarContinuar() {
    // Clica no botão continuar
    this.elements.botaoContinuar().click();

    // Verifica se a URL mudou para a página de resumo do pedido
    cy.url().should('include', '/checkout-step-two.html');
  }

  visualizarResumo(informacoesDeCompra) {
    // Verifica as informações do produto
    this.elements.item().should('have.length', 1);

    this.elements.itemNome()
      .should('be.visible')
      .and('contain.text', informacoesDeCompra.dadosDeCompra.produto);

    this.elements.itemPreco()
      .should('be.visible')
      .and('contain.text', informacoesDeCompra.dadosDeCompra.preco);

    // Verifica o total do resumo
    this.elements.containerSumario().should('be.visible');

    this.elements.sumarioItemTotal()
      .should('be.visible')
      .and('contain.text', `Item total: ${informacoesDeCompra.dadosDeCompra.preco}`);
    this.elements.sumarioItemTaxa()
      .should('be.visible')
      .and('contain.text', `Tax: ${informacoesDeCompra.dadosDeCompra.taxa}`);
    this.elements.sumarioTotal()
      .should('be.visible')
      .and('contain.text', `Total: ${informacoesDeCompra.dadosDeCompra.total}`);
  }

  finalizarCompra() {
    // Clica no botão finalizar 
    this.elements.botaoFinalizar().click();

    // Verifica se a compra foi finalizada com sucesso
    cy.url().should('include', '/checkout-complete.html');
    this.elements.cabecalhoMensagem().should('have.text', 'THANK YOU FOR YOUR ORDER');
  }

  retornarMensagemErro() {
    // Retorna a mensagem de erro
    return this.elements.mensagemErro();
  }
};

export const checkoutPage = new CheckoutPage();