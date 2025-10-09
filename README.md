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
