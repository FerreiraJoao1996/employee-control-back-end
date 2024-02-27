const express = require('express');
const bodyParser = require('body-parser');
const usuarioRouter = require('./routes/Usuario');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/usuario', usuarioRouter);

app.listen(PORT, async () => console.log(`Servidor rodando na porta ${PORT}`));