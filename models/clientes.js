const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientesSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  dataNascimento: {
    type: String,
    require: true
  }, 
  documento: {
    type: String,
    require: true
  },
  servicos: [{
    type: String,
    enum: ['Sistema WEB', 'Aplicativo iOS', 'Aplicativo Android', 'Website Estático', 'Website Gerenciável'],
    required: true
  }],
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('clientes', clientesSchema);