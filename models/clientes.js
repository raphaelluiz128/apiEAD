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
  servicos: {
    type: Number,
    require: true
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('clientes', clientesSchema);