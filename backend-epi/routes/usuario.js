const express = require('express');
const Usuario = require('../models/usuario');
const router = express.Router();
const bcrypt = require('bcrypt'); // Para hash de senhas

// Cadastrar novo usuário
router.post('/', async (req, res) => {
  const { nome, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);
  const newUsuario = await Usuario.create({ nome, senha: hashedPassword });
  res.status(201).json(newUsuario);
});

// Login
router.post('/login', async (req, res) => {
  const { nome, senha } = req.body;
  const usuario = await Usuario.findOne({ where: { nome } });

  if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
    return res.status(401).send('Usuário ou senha incorretos.');
  }

  // Aqui você pode gerar um token JWT se quiser implementar autenticação baseada em tokens

  res.send('Login realizado com sucesso.');
});

module.exports = router;
