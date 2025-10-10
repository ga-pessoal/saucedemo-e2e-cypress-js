# Plano de Teste - E-commerce Sauce Demo

## 1. Introdução

Este documento descreve o plano de testes para o site de e-commerce Sauce Demo. O objetivo é garantir a qualidade e o correto funcionamento das principais funcionalidades da aplicação através de testes automatizados End-to-End (E2E) com Cypress.

## 2. Objetivo

- Validar os fluxos críticos do usuário, desde o login até a finalização da compra.
- Garantir que a interface do usuário (UI) seja consistente e funcional.
- Identificar e documentar defeitos para que possam ser corrigidos.
- Servir como uma base de regressão para futuras alterações no sistema.

## 3. Escopo do Teste

### 3.1. Funcionalidades em Escopo

As seguintes funcionalidades serão testadas:

- Autenticação:
  - Login com usuário padrão (`standard_user`).
  - Login com usuário bloqueado (`locked_out_user`).
  - Login com credenciais inválidas.
  - Logout da aplicação.
- Catálogo de Produtos (Inventário):
  - Visualização da lista de produtos.
  - Ordenação dos produtos (A-Z, Z-A, Preço Baixo-Alto, Preço Alto-Baixo).
  - Adição de produtos ao carrinho de compras a partir da página de inventário.
  - Remoção de produtos do carrinho a partir da página de inventário.
  - Acesso à página de detalhes de um produto.
- Carrinho de Compras:
  - Visualização dos produtos adicionados.
  - Remoção de produtos do carrinho.
  - Navegação para o checkout.
  - Continuação da navegação (retorno para a página de inventário).
- Checkout:
  - Preenchimento das informações do comprador (Nome, Sobrenome, CEP).
  - Visualização do resumo do pedido (Checkout Overview).
  - Confirmação e finalização da compra.

### 3.2. Funcionalidades Fora de Escopo

- Testes de performance, carga e estresse.
- Testes de segurança (ex: injeção de SQL, XSS).
- Testes de compatibilidade em múltiplos navegadores (foco será no Chrome, executado pelo Cypress).
- Testes de API (foco em E2E).

## 4. Estratégia de Teste

### 4.1. Níveis de Teste

O foco será em Testes End-to-End (E2E), simulando a jornada completa do usuário na aplicação.

### 4.2. Tipos de Teste

- **Testes Funcionais:** Para validar se cada funcionalidade se comporta conforme o esperado.
- **Testes de UI/Layout:** Validações visuais para garantir que os componentes da interface são renderizados corretamente.
- **Testes de Regressão:** A suíte de automação será utilizada para garantir que novas funcionalidades ou correções não impactaram o sistema existente.

### 4.3. Ferramentas

- **Automação:** Cypress
- **Linguagem:** JavaScript
- **Gerenciamento:** Git/GitHub

## 5. Ambiente de Teste

- **URL da Aplicação:** https://www.saucedemo.com/v1/
- **Navegador:** Chrome (executado via Cypress)
- **Dados de Teste (Usuários):**
  - Padrão: standard_user
  - Bloqueado: locked_out_user
  - Senha (para todos): secret_sauce

## 6. Critérios de Entrada e Saída

- Critérios de Entrada:
  - O ambiente de teste está disponível e estável.
  - Os casos de teste foram escritos e revisados.
- Critérios de Saída:
  - 100% dos casos de teste planejados foram executados.
  - Os resultados da execução foram documentados.
  - Defeitos críticos e de alta prioridade foram reportados.

## 7. Entregáveis

- Casos de teste automatizados (código-fonte na pasta `cypress/e2e`).
- Documentação de casos de teste manuais (em `docs/casosDeTestes.md`).
- Relatórios de execução gerados pelo Cypress (screenshots e vídeos para falhas).
- Este documento (Plano de Teste).
