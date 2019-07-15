const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 3200;
const cors = require('cors');
const clientes = require('./routes/clientes');

//para o docker entender que deve apenas repassar a porta 3000

const app = express();
const server = require('http').Server(app);
app.use(cors({}));
app.use(bodyParser.json());

app.use('/api/clientes', clientes);


mongoose.connect('mongodb://192.168.1.103:27017/apiEAD', {
        useNewUrlParser: true
    })
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.log('o erro éeee', error);
    });

server.listen(PORT, () => console.log('server ativo em 3200'));
