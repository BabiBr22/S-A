// routes/categoria.js
const express = require('express');
const Categoria = require('../models/categoria.js'); // Importando o modelo Categoria
const router = express.Router();

// Criar uma nova categoria
router.post('/', async (req, res) => {
  try {
    const { nome } = req.body;

    // Verifica se o nome da categoria foi fornecido
    if (!nome) {
      return res.status(400).json({ error: 'O nome da categoria é obrigatório.' });
    }

    const categoria = await Categoria.create({ nome });
    res.status(201).json(categoria);
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    res.status(500).json({ error: error.message });
  }
});

// Obter todas as categorias
router.get('/', async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.error('Erro ao obter categorias:', error);
    res.status(500).json({ error: error.message });
  }
});

// Excluir uma categoria
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Verifica se a categoria existe
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoria não encontrada.' });
    }

    await Categoria.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao excluir categoria:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
