# Cobertura de Teste - E-commerce Sauce Demo

1. Introdução
   Este documento resume a cobertura dos testes automatizados E2E desenvolvidos com Cypress para o site Sauce Demo, mapeando as funcionalidades e cenários testados aos seus respectivos arquivos de especificação.

2. Tabela de Cobertura de TestesA tabela a seguir detalha a cobertura dos testes automatizados.

| Funcionalidade           | Cenário de Teste                                           | Status       | Arquivo de Teste (`cypress/e2e`) |
| :----------------------- | :--------------------------------------------------------- | :----------- | :------------------------------- |
| **Autenticação**         | Login com usuário padrão (`standard_user`)                 | Automatizado | `authentication.cy.js`           |
| **Autenticação**         | Login com usuário bloqueado (`locked_out_user`)            | Automatizado | `authentication.cy.js`           |
| **Autenticação**         | Login com credenciais inválidas                            | Automatizado | `authentication.cy.js`           |
| **Autenticação**         | Fazer logout da aplicação                                  | Automatizado | `authentication.cy.js`           |
| **Catálogo de Produtos** | Visualização da lista de produtos                          | Automatizado | `inventory.cy.js`                |
| **Catálogo de Produtos** | Ordenação dos produtos por nome (A-Z e Z-A)                | Automatizado | `inventory.cy.js`                |
| **Catálogo de Produtos** | Ordenação dos produtos por preço (Baixo-Alto e Alto-Baixo) | Automatizado | `inventory.cy.js`                |
| **Catálogo de Produtos** | Adicionar um produto ao carrinho pela página de inventário | Automatizado | `inventory.cy.js`                |
| **Catálogo de Produtos** | Remover um produto do carrinho pela página de inventário   | Automatizado | `inventory.cy.js`                |
| **Catálogo de Produtos** | Acessar a página de detalhes de um produto                 | Automatizado | `inventory.cy.js`                |
| **Carrinho de Compras**  | Visualização dos produtos adicionados no carrinho          | Automatizado | `cart.cy.js`                     |
| **Carrinho de Compras**  | Remoção de produtos de dentro do carrinho                  | Automatizado | `cart.cy.js`                     |
| **Carrinho de Compras**  | Navegação para a página de checkout                        | Automatizado | `cart.cy.js`                     |
| **Carrinho de Compras**  | Retornar à página de inventário com "Continue Shopping"    | Automatizado | `cart.cy.js`                     |
| **Checkout**             | Preenchimento das informações do comprador e continuar     | Automatizado | `checkout.cy.js`                 |
| **Checkout**             | Finalização da compra com sucesso                          | Automatizado | `checkout.cy.js`                 |
| **Checkout**             | Exibição de mensagem de erro para campos obrigatórios      | Automatizado | `checkout.cy.js`                 |

3. ConclusãoA suíte de testes automatizados cobre os fluxos críticos da aplicação, como autenticação, catálogo, carrinho e checkout. Todos os cenários planejados foram implementados, o que garante uma base sólida para futuros testes de regressão.
