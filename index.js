const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 3200;
const HOST = '0.0.0.0';
//para o docker entender que deve apenas repassar a porta 3000
const app = express();
app.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost:27017/apiEAD', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log('o erro é', error);
  });


app.listen(PORT, HOST,() => console.log('server ativo em 3200'));