const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do MySQL
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'japinha14', 
    database: 'escola'
});

// Conexão com o MySQL
connection.connect(function(err) {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ' + err.stack);
        return;
    }
    console.log('Conexão bem sucedida com o MySQL');
});

// Middleware para permitir todas as origens
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/enviar-dados', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Dados recebidos com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
