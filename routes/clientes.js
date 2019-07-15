const express = require('express');
const router = express.Router();

const Cliente = require('../models/clientes');

router.get('/', (req, res) => {
    Cliente.find()
      .then(cliente => {
        res.json(cliente);
      })
      .catch(error => res.status(500).json('o erro é',error));
  });

router.post('/', (req, res) => {
  const novoCliente = new Cliente({
    nome: req.body.nome,
    dataNascimento: req.body.dataNascimento,
    documento: req.body.documento,
    servicos: req.body.servicos,
  });

  novoCliente
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//editar um cliente

router.put('/editar/:id', (req, res) => {
    const novosDados = {     
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        documento: req.body.documento,
        servicos: req.body.servicos, };
  
    Cliente.findOneAndUpdate({ _id: req.params.id }, novosDados, { new: true })
      .then(cliente => {
        res.json(cliente);
      })
      .catch(error => res.status(500).json(error));
  });
  

  // deletar um cliente
  router.delete('/delete/:id', (req, res) => {
    Cliente.findOneAndDelete({ _id: req.params.id })
      .then(cliente => {
        res.json(cliente);
      })
      .catch(error => res.status(500).json(error));
  });

module.exports = router;