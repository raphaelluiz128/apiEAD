const mongoose = require('mongoose');
const { Schema } = mongoose;

const servicosSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('servicos', servicosSchema);