# 🍺 Bar - Sistema de Gestão de Estoque


## 🚀 Requisitos Atendidos

A aplicação cumpre integralmente os seguintes requisitos:
- **CRUD Completo:** Criação, leitura, atualização e remoção (soft delete) de itens.
- **Entidades Obrigatórias:**
  - `item`: id, descrição, quantidade, preco, ativo.
  - `usuário`: id, nome, username, password.
- **Registro de Vendas:** Sistema funcional de saída de estoque.
- **Histórico:** Registro detalhado de todas as operações de compra/venda.
- **Persistência:** Todos os dados são salvos e recuperados do `localStorage`.

## 🛠️ Tecnologias Utilizadas
- **JavaScript (ES6+)**
- **HTML5** (Estrutura para visualização)
- **Local Storage API** (Persistência de dados)

## 📁 Estrutura de Arquivos
- `index.html`: Página base que carrega os scripts e fornece a interface de console.
- `entidades.js`: Definição das classes/moldes de `Item` e `Usuário`.
- `database.js`: Lógica de comunicação com o `localStorage`.
- `estoque.js`: Motor do sistema (CRUD, lógica de vendas e histórico).

## 📋 Como Testar
1. Clone o repositório:
   ```bash
   git clone [https://github.com/alissonf94/estoqueBar.git](https://github.com/alissonf94/estoqueBar.git)