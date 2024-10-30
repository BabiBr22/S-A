const express = require('express');
const Funcionario = require('../models/Funcionario.js');
const router = express.Router();

// Listar todos os funcionários
router.get('/', async (req, res) => {
  const funcionarios = await Funcionario.findAll();
  res.json(funcionarios);
});

// Obter funcionário específico
router.get('/:id', async (req, res) => {
  const funcionario = await Funcionario.findByPk(req.params.id);
  if (!funcionario) return res.status(404).send('Funcionário não encontrado.');
  res.json(funcionario);
});

// Cadastrar novo funcionário
router.post('/', async (req, res) => {
  const { nome, cargo, email, senha } = req.body;
  const newFuncionario = await Funcionario.create({ nome, cargo, email, senha });
  res.status(201).json(newFuncionario);
});

// Atualizar funcionário
router.put('/:id', async (req, res) => {
  const funcionario = await Funcionario.findByPk(req.params.id);
  if (!funcionario) return res.status(404).send('Funcionário não encontrado.');

  const { nome, cargo, email, senha } = req.body;
  await funcionario.update({ nome, cargo, email, senha });
  res.json(funcionario);
});

// Remover funcionário
router.delete('/:id', async (req, res) => {
  const funcionario = await Funcionario.findByPk(req.params.id);
  if (!funcionario) return res.status(404).send('Funcionário não encontrado.');

  await funcionario.destroy();
  res.status(204).send();
});

module.exports = router;
