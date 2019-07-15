const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const clientes = require('./routes/clientes');

//para o docker entender que deve apenas repassar a porta 3000

const app = express();
const server = require('http').Server(app);
app.use(cors({}));
app.use(bodyParser.json());

app.use('/api/clientes', clientes);


mongoose.connect('mongodb://admin:admin123@ds143156.mlab.com:43156/heroku_n2s08gc8', {
        useNewUrlParser: true
    })
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.log('o erro éeee', error);
    });
/*
mongoose local
mongoose.connect('mongodb://192.168.1.103:27017/apiEAD', {
        useNewUrlParser: true
    })
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.log('o erro éeee', error);
    });
*/
// porta sem usar heroku server.listen(3200, () => console.log('server ativo em 3200'));
// variável de ambiente PORT do heroku


server.listen((process.env.PORT || 3200), function(){
    console.log('listening on *:3200');
  });