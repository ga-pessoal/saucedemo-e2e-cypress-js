# Sugestões de Melhoria - E-commerce Sauce Demo

Este documento apresenta uma série de sugestões para aprimorar a usabilidade, funcionalidade e experiência geral do usuário no site Sauce Demo, com base na análise realizada durante a execução dos testes.

## 1. Usabilidade e Experiência do Usuário (UX)

### 1.1. Mensagens de Erro Mais Claras

As mensagens de erro atuais, como "Epic sadface...", são adequadas para um ambiente de demonstração, mas em uma aplicação real, deveriam ser mais diretas e informativas para o usuário.

Sugestão: Substituir as mensagens por textos que expliquem o erro de forma clara. Ex: "Usuário ou senha inválidos. Por favor, tente novamente."

### 1.2. Feedback Visual para Ações do Usuário

Ações como adicionar um item ao carrinho ou clicar em "Login" poderiam fornecer um feedback visual mais imediato.

Sugestão: Adicionar um breve efeito de animação ou um ícone de carregamento (spinner) nos botões após o clique, para indicar que a ação está sendo processada.

### 1.3. Página de Carrinho Vazio

Quando o carrinho está vazio, a página fica em branco. Isso pode confundir o usuário.

Sugestão: Exibir uma mensagem como "Seu carrinho de compras está vazio" e incluir um botão "Continuar comprando" que redirecione para a página de inventário.

### 1.4. Validação de Formulário no Checkout

O formulário de checkout não valida o formato do CEP e permite o envio de dados inválidos.

Sugestão: Implementar validação de formato para o campo "Zip/Postal Code" e feedback em tempo real caso o formato esteja incorreto.

## 2. Funcionalidade

### 2.1. Implementar um Campo de Busca

A ausência de uma funcionalidade de busca dificulta a localização de produtos específicos, especialmente se o catálogo fosse maior.

Sugestão: Adicionar uma barra de busca no cabeçalho ou na página de inventário para permitir que os usuários pesquisem produtos por nome.

### 2.2. Adicionar Filtros de Categoria

Atualmente, só é possível ordenar os produtos. Em um e-commerce real, filtros são essenciais.

Sugestão: Criar filtros para categorias de produtos (ex: camisetas, mochilas) ou faixas de preço, permitindo uma navegação mais refinada.

### 2.3. Paginação na Lista de Produtos

O site exibe apenas seis produtos. Para um catálogo maior, a navegação se tornaria inviável.

Sugestão: Implementar um sistema de paginação ou "scroll infinito" para carregar mais produtos conforme o usuário rola a página.

### 2.4. Persistência do Carrinho de Compras

Se o usuário deslogar, os itens do carrinho são perdidos.

Sugestão: Salvar o estado do carrinho de compras associado à conta do usuário, para que os itens permaneçam lá mesmo após o logout e um novo login.

## 3. Acessibilidade (a11y)

### 3.1. Contraste de Cores

O texto vermelho da mensagem de erro sobre o fundo branco pode não ter contraste suficiente para usuários com baixa visão.

Sugestão: Aumentar o contraste das cores utilizadas em mensagens de erro e alertas para atender às diretrizes do WCAG (Web Content Accessibility Guidelines).

### 3.2. Navegação por Teclado

Garantir que todos os elementos interativos (botões, links, filtros) possam ser facilmente acessados e ativados utilizando apenas o teclado.

Sugestão: Realizar testes de navegação utilizando a tecla "Tab" para garantir que a ordem do foco seja lógica e que todos os componentes sejam alcançáveis.
