require('dotenv').config(); // Carrega as variáveis do arquivo .env

const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Configurar o cliente PostgreSQL usando a variável de ambiente
const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

app.get('/', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM your_table'); // Substitua 'your_table' pelo nome da sua tabela
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Rota POST para cadastrar um novo produto
app.post('/api/products', async (req, res) => {
    console.log(req)
    const { name, value } = req.body;
    try {
        const result = await client.query('INSERT INTO products(name, value) VALUES($1, $2) RETURNING *', [name, value]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ message: 'Error adding product', error: err });
    }
});

// Rota GET para listar todos os produtos
app.get('/api/products', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM products');
        console.log(result)
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products', error: err });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
