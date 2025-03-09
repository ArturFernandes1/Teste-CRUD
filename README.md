Teste de Desenvolvimento - CRUD Simples em React, Node.js e PostgreSQL
Objetivo
Este projeto tem como objetivo a criação de um sistema simples de CRUD (Create, Read) para cadastro e visualização de produtos.
O sistema foi desenvolvido utilizando as seguintes tecnologias:

Frontend: React.js
Backend: Node.js com Express
Banco de Dados: PostgreSQL

Requisitos do Projeto
1. Frontend (React.js)
2. A interface de cadastro de produtos deve permitir a inserção de:
Nome do produto
Valor do produto
Visualização dos Produtos: A interface deve exibir os produtos cadastrados em uma tabela.
Tecnologias:
React com componentes funcionais
Hooks (useState, useEffect) para gerenciar estado e realizar chamadas à API
Design Responsivo: A página deve ser responsiva e adaptável a diferentes dispositivos
Estruturação de código organizada com componentes e hooks reutilizáveis
3. Backend (Node.js e Express)
API Simples: O backend deve implementar as seguintes rotas:
POST: Cadastrar um novo produto
GET: Listar todos os produtos cadastrados
Interação com o Banco de Dados PostgreSQL:
O backend deve se comunicar com o banco de dados usando a biblioteca pg (PostgreSQL)
Configuração:
O backend deve rodar localmente na porta http://localhost:5000
4. Banco de Dados (PostgreSQL)
Estrutura do Banco:
Tabela Produtos: A tabela deve ter, no mínimo, os seguintes campos:
id (chave primária)
nome (texto)
valor (decimal)
SQL: Utilizar SQL para criar a tabela e realizar as operações de inserção e leitura de dados
