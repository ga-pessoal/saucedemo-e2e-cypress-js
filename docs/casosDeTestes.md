# Casos de Teste - E-commerce Sauce Demo

Este documento descreve os casos de teste manuais para as funcionalidades do site Sauce Demo. Para facilitar a cópia do texto, cada caso de teste está dentro de um bloco de código.

## 1. Autenticação

CT-AUTH-001: Login com sucesso
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-AUTH-001 |
| **TÍTULO** | Login com usuário padrão (standard_user) |
| **Descrição** | Verificar se o sistema permite o login com um usuário padrão válido. |
| **Precondição** | 1. O sistema deve estar acessível.<br>2. O usuário não deve estar logado. |
| **Passo-a-passo** | 1. Acessar a página `https://www.saucedemo.com/v1/`.<br>2. Preencher o campo `username` com "standard_user".<br>3. Preencher o campo `password` com "secret_sauce".<br>4. Clicar no botão "Login". |
| **Resultado esperado** | O usuário deve ser autenticado e redirecionado para a página de inventário (`/inventory.html`). |
| **Cenário de teste** | Login com credenciais válidas. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-AUTH-002: Login com usuário bloqueado
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-AUTH-002 |
| **TÍTULO** | Login com usuário bloqueado (locked_out_user) |
| **Descrição** | Verificar se o sistema impede o login de um usuário bloqueado. |
| **Precondição** | 1. O sistema deve estar acessível.<br>2. O usuário não deve estar logado. |
| **Passo-a-passo** | 1. Acessar a página `https://www.saucedemo.com/v1/`.<br>2. Preencher o campo `username` com "locked_out_user".<br>3. Preencher o campo `password` com "secret_sauce".<br>4. Clicar no botão "Login". |
| **Resultado esperado** | A mensagem de erro "Epic sadface: Sorry, this user has been locked out." deve ser exibida. |
| **Cenário de teste** | Tentativa de login com usuário bloqueado. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-AUTH-003: Login com credenciais inválidas
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-AUTH-003 |
| **TÍTULO** | Login com credenciais inválidas |
| **Descrição** | Verificar se o sistema impede o login com usuário ou senha incorretos. |
| **Precondição** | 1. O sistema deve estar acessível.<br>2. O usuário não deve estar logado. |
| **Passo-a-passo** | 1. Acessar a página `https://www.saucedemo.com/v1/`.<br>2. Preencher o campo `username` com "usuario_invalido".<br>3. Preencher o campo `password` com "senha_invalida".<br>4. Clicar no botão "Login". |
| **Resultado esperado** | A mensagem de erro "Epic sadface: Username and password do not match any user in this service" deve ser exibida. |
| **Cenário de teste** | Tentativa de login com credenciais incorretas. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-AUTH-004: Logout da aplicação
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-AUTH-004 |
| **TÍTULO** | Logout da aplicação |
| **Descrição** | Verificar se o usuário consegue sair do sistema com sucesso. |
| **Precondição** | 1. O usuário deve estar logado no sistema. |
| **Passo-a-passo** | 1. Clicar no menu "hambúrguer" no canto superior esquerdo.<br>2. Clicar no link "Logout". |
| **Resultado esperado** | O usuário deve ser desconectado e redirecionado para a página de login (`/`). |
| **Cenário de teste** | Efetuar logout do sistema. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

## 2. Catálogo de Produtos (Inventário)

CT-INV-001: Visualização da lista de produtos
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-INV-001 |
| **TÍTULO** | Visualização da lista de produtos |
| **Descrição** | Verificar se a lista de produtos é exibida corretamente após o login. |
| **Precondição** | 1. O usuário deve estar logado com sucesso. |
| **Passo-a-passo** | 1. Realizar o login com um usuário válido. |
| **Resultado esperado** | A página de inventário é carregada, exibindo uma lista com vários produtos, cada um com imagem, nome, descrição, preço e botão "Add to cart". |
| **Cenário de teste** | Visualizar produtos no catálogo. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-INV-002: Ordenação dos produtos
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-INV-002 |
| **TÍTULO** | Ordenação dos produtos |
| **Descrição** | Verificar se as opções de ordenação funcionam corretamente. |
| **Precondição** | 1. O usuário deve estar na página de inventário. |
| **Passo-a-passo** | 1. Clicar no filtro de ordenação.<br>2. Selecionar "Name (A to Z)".<br>3. Selecionar "Name (Z to A)".<br>4. Selecionar "Price (low to high)".<br>5. Selecionar "Price (high to low)". |
| **Resultado esperado** | A lista de produtos deve ser reordenada de acordo com a opção selecionada a cada troca. |
| **Cenário de teste** | Ordenar produtos por nome e preço. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-INV-003: Adição de produtos ao carrinho
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-INV-003 |
| **TÍTULO** | Adição de produtos ao carrinho |
| **Descrição** | Verificar se é possível adicionar um item ao carrinho a partir da página de inventário. |
| **Precondição** | 1. O usuário deve estar na página de inventário. |
| **Passo-a-passo** | 1. Escolher um produto da lista.<br>2. Clicar no botão "Add to cart" do produto escolhido. |
| **Resultado esperado** | O botão deve mudar para "Remove" e o ícone do carrinho no topo da página deve exibir o número "1". |
| **Cenário de teste** | Adicionar um item ao carrinho. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-INV-004: Remoção de produtos do carrinho (página de inventário)
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-INV-004 |
| **TÍTULO** | Remoção de produtos do carrinho (página de inventário) |
| **Descrição** | Verificar se é possível remover um item do carrinho a partir da página de inventário. |
| **Precondição** | 1. Um produto deve ter sido adicionado ao carrinho. |
| **Passo-a-passo** | 1. Localizar o produto que foi adicionado.<br>2. Clicar no botão "Remove" do produto. |
| **Resultado esperado** | O botão deve mudar para "Add to cart" e o ícone do carrinho não deve mais exibir a contagem. |
| **Cenário de teste** | Remover um item do carrinho pela página de inventário. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-INV-005: Acesso à página de detalhes de um produto
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-INV-005 |
| **TÍTULO** | Acesso à página de detalhes de um produto |
| **Descrição** | Verificar se o usuário é redirecionado para a página de detalhes do produto. |
| **Precondição** | 1. O usuário deve estar na página de inventário. |
| **Passo-a-passo** | 1. Clicar no nome ou na imagem de um produto. |
| **Resultado esperado** | O usuário deve ser levado à página de detalhes do produto, que exibe a imagem, nome, descrição, preço e botão "Add to cart". |
| **Cenário de teste** | Visualizar detalhes de um produto específico. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

## 3. Carrinho de Compras

CT-CART-001: Visualização dos produtos adicionados
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-CART-001 |
| **TÍTULO** | Visualização dos produtos adicionados |
| **Descrição** | Verificar se os produtos adicionados são exibidos corretamente na página do carrinho. |
| **Precondição** | 1. Pelo menos um produto foi adicionado ao carrinho. |
| **Passo-a-passo** | 1. Clicar no ícone do carrinho de compras. |
| **Resultado esperado** | A página do carrinho (`/cart.html`) é exibida, listando os produtos que foram adicionados, com suas respectivas quantidades, nomes e preços. |
| **Cenário de teste** | Conferir itens no carrinho. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | FALHA - O preço está aparecendo sem cifrão|

CT-CART-002: Remoção de produtos do carrinho
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-CART-002 |
| **TÍTULO** | Remoção de produtos do carrinho |
| **Descrição** | Verificar se é possível remover um item de dentro da página do carrinho. |
| **Precondição** | 1. Estar na página do carrinho (`/cart.html`) com pelo menos um item. |
| **Passo-a-passo** | 1. Clicar no botão "Remove" ao lado do produto que deseja remover. |
| **Resultado esperado** | O produto é removido da lista no carrinho. |
| **Cenário de teste** | Esvaziar o carrinho. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-CART-003: Navegação para o checkout
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-CART-003 |
| **TÍTULO** | Navegação para o checkout |
| **Descrição** | Verificar se o botão "Checkout" redireciona para a próxima etapa da compra. |
| **Precondição** | 1. Estar na página do carrinho (`/cart.html`) com pelo menos um item. |
| **Passo-a-passo** | 1. Clicar no botão "Checkout". |
| **Resultado esperado** | O usuário é redirecionado para a página de informações do comprador (`/checkout-step-one.html`). |
| **Cenário de teste** | Iniciar o processo de checkout. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-CART-004: Continuação da navegação (retorno para o inventário)
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-CART-004 |
| **TÍTULO** | Continuação da navegação (retorno para o inventário) |
| **Descrição** | Verificar se o botão "Continue Shopping" retorna o usuário para a página de inventário. |
| **Precondição** | 1. Estar na página do carrinho (`/cart.html`). |
| **Passo-a-passo** | 1. Clicar no botão "Continue Shopping". |
| **Resultado esperado** | O usuário é redirecionado de volta para a página de inventário (`/inventory.html`). |
| **Cenário de teste** | Voltar para a loja para adicionar mais itens. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

## 4. Checkout

CT-CHECKOUT-001: Preenchimento das informações do comprador
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-CHECKOUT-001 |
| **TÍTULO** | Preenchimento das informações do comprador |
| **Descrição** | Verificar se o usuário consegue preencher seus dados e avançar para o resumo do pedido. |
| **Precondição** | 1. O usuário deve estar na página de checkout (`/checkout-step-one.html`). |
| **Passo-a-passo** | 1. Preencher o campo "First Name".<br>2. Preencher o campo "Last Name".<br>3. Preencher o campo "Zip/Postal Code".<br>4. Clicar no botão "Continue". |
| **Resultado esperado** | O usuário é redirecionado para a página de resumo do pedido (`/checkout-step-two.html`). |
| **Cenário de teste** | Inserir dados de entrega. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-CHECKOUT-002: Visualização do resumo do pedido
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-CHECKOUT-002 |
| **TÍTULO** | Visualização do resumo do pedido |
| **Descrição** | Verificar se o resumo do pedido é exibido corretamente antes da finalização. |
| **Precondição** | 1. O usuário deve ter preenchido as informações de comprador e estar na página `/checkout-step-two.html`. |
| **Passo-a-passo** | 1. Observar as informações na tela. |
| **Resultado esperado** | A página exibe os itens do carrinho, informações de pagamento, informações de envio e o total da compra (itens + impostos). |
| **Cenário de teste** | Revisar o pedido antes de finalizar. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |

CT-CHECKOUT-003: Confirmação e finalização da compra
| Atributo | Descrição |
| :--- | :--- |
| **ID** | CT-CHECKOUT-003 |
| **TÍTULO** | Confirmação e finalização da compra |
| **Descrição** | Verificar se a compra é finalizada com sucesso e a mensagem de confirmação é exibida. |
| **Precondição** | 1. O usuário deve estar na página de resumo do pedido (`/checkout-step-two.html`). |
| **Passo-a-passo** | 1. Clicar no botão "Finish". |
| **Resultado esperado** | O usuário é redirecionado para a página de conclusão (`/checkout-complete.html`) e a mensagem "Thank you for your order!" é exibida. |
| **Cenário de teste** | Finalizar um pedido. |
| **Ambiente de teste** | Chrome + Windows 10 |
| **Resultado encontrado** | |
| **Status** | |
