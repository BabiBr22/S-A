const express = require('express');
const Historico = require('../models/historico');
const router = express.Router();

// Listar todos os históricos
router.get('/', async (req, res) => {
  const historicos = await Historico.findAll();
  res.json(historicos);
});

// Cadastrar novo histórico
router.post('/', async (req, res) => {
  const { funcionarioId, epiId, acao } = req.body;
  const newHistorico = await Historico.create({ funcionarioId, epiId, acao });
  res.status(201).json(newHistorico);
});

module.exports = router;
