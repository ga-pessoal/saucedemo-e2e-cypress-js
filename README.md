# Projeto de Automação de Testes com Cypress

Este repositório contém um projeto de automação de testes End-to-End (E2E) desenvolvido com Cypress e JavaScript. O objetivo é demonstrar a aplicação de boas práticas de automação, como a utilização do padrão Page Object Model, a criação de comandos customizados para componentes e a organização de uma estrutura de testes escalável e de fácil manutenção.

O projeto visa testar as funcionalidades do e-commerce [Saucedemo](https://www.saucedemo.com/v1/).

## ✨ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/): Framework principal para a escrita e execução dos testes E2E.
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): Linguagem de programação utilizada para desenvolver os scripts de teste.
- [Node.js](https://nodejs.org/pt): Ambiente de execução do JavaScript.
- [npm](https://www.npmjs.com/): Gerenciador de pacotes do Node.js para instalar as dependências do projeto.

## 📁 Estrutura de Pastas

O projeto está organizado da seguinte forma para garantir a separação de responsabilidades e facilitar a manutenção:

```bash
/
├── cypress/
│   ├── e2e/
│   │   └── specs.cy.js              # Arquivos de especificação de testes (specs)
│   ├── support/
│   │   ├── components/
│   │   │   └── exemplo_component.js # Comandos customizados para componentes reutilizáveis
│   │   ├── pages/
│   │   │   └── exemplo_page.js      # Mapeamento de elementos e ações de páginas específicas
│   │   ├── commands.js              # Registro de comandos customizados globais
│   │   └── e2e.js                   # Configurações globais e imports para os testes
│
├── docs/
│   ├── casosDeTestes.md             # Documentação dos cenários de teste manuais/automatizados
│   ├── coberturaDeTestes.md         # Análise da cobertura de funcionalidades testadas
│   ├── planoDeTeste.md              # Planejamento estratégico dos testes
│   └── sugestoesDeMelhoria.md       # Sugestões para o produto ou processo de teste
│
├── cypress.config.js                # Arquivo principal de configuração do Cypress
└── package.json                     # Dependências e scripts do projeto
```

- `cypress/e2e`: Contém os arquivos de teste (.cy.js), onde os cenários são descritos utilizando os comandos do Cypress e as abstrações criadas.
- `cypress/support/pages`: Implementa o padrão Page Object Model. Cada arquivo representa uma página da aplicação, centralizando os seletores e as ações que podem ser executadas nela.
- `cypress/support/components`: Armazena comandos customizados para interagir com componentes de UI reutilizáveis (botões, modais, menus, etc.). Isso evita a repetição de código e de seletores complexos.
- `docs`: Pasta dedicada à documentação do projeto de testes, incluindo casos de teste, planejamento e outras análises importantes.

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados em sua máquina:

[Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
[NPM](https://www.npmjs.com/) (geralmente vem instalado com o Node.js)

## 🚀 Como Começar

Siga os passos abaixo para configurar o ambiente e executar o projeto localmente.

1. Clone o repositório:

```bash
git clone [URL_DO_SEU_REPOSITORIO]
```

2. Navegue até o diretório do projeto:

```bash
cd [NOME_DO_DIRETORIO]
```

3. Instale as dependências:

```bash
npm install
```

## ▶️ Executando os Testes

Você pode executar os testes do Cypress de duas formas principais:

### Modo Interativo (UI)

Este modo abre a interface gráfica do Cypress, permitindo que você visualize a execução dos testes em tempo real, depure e selecione quais specs executar.

```bash
npx cypress open
```

### Modo Headless (Terminal)

Este modo executa os testes em segundo plano (sem abrir o navegador), diretamente no terminal. É ideal para integração contínua (CI/CD) e para obter relatórios rápidos.

```bash
# Executa todos os testes no navegador padrão (Electron)
npx cypress run

# Executa todos os testes em um navegador específico (ex: Chrome)
npx cypress run --browser chrome

# Executa uma spec específica
npx cypress run --spec "cypress/e2e/nome-da-spec.cy.js"
```

📝 Padrões e Abordagens

- Page Object Model (POM): A estrutura em `cypress/support/pages` abstrai a lógica de interação com as páginas, tornando os testes mais legíveis e fáceis de manter.
- Component-Based Commands: Comandos customizados em `cypress/support/components` são criados para interagir com elementos de UI reutilizáveis. Isso não apenas reduz a duplicação de código, mas também centraliza as asserções de estilo e comportamento, como demonstrado no exemplo abaixo:

```bash
// Comando para interagir com um botão de login
Cypress.Commands.add('clickLoginButton', () => {
  cy.get('input[type="submit"]')
    .should('be.visible')
    .and('have.css', 'background-color', 'rgb(226, 35, 26)')
    .click();
});
```

## 📚 Documentação do Projeto

Toda a documentação relacionada ao planejamento e execução dos testes está centralizada na pasta /docs. Consulte os arquivos abaixo para mais detalhes:

- [Casos de Teste](./docs/casosDeTestes.md): Descrição detalhada dos cenários de teste.
- [Plano de Teste](./docs/planosDeTeste.md): Estratégia, escopo e abordagem dos testes.
- [Cobertura de Teste](./docs/coberturaDeTeste.md): Mapeamento das funcionalidades cobertas pelos testes.
- [Sugestões de Melhoria](./docs/sugestoesDeMelhoria.md): Recomendações identificadas durante os testes.
