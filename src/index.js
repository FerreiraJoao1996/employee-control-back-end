const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');

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

app.post('/enviar-dados', async (req, res) => {
    try {
      const data = req.body;

      data.dataNascimento = moment(data.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
      
      const usuario = await Usuario.create(data);
      res.send('Dados cadastrados com sucesso!');
    } catch (error) {
      res.status(500).send('Erro ao cadastrar dados');
    }
});

app.listen(PORT, async () => console.log(`Servidor rodando na porta ${PORT}`));