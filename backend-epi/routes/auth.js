const express = require('express');
const bcrypt = require('bcrypt'); // Para hash de senhas
const { Usuario } = require('../models'); // Ajuste conforme necessário
const router = express.Router();

// Rota para autenticação
router.post('/login', async (req, res) => {
    const { nome, senha } = req.body;
    console.log(`Tentando logar usuário: ${nome}`); // Log para verificação

    try {
        // Buscar usuário no banco de dados
        const usuario = await Usuario.findOne({ where: { nome } });
        if (!usuario) {
            console.log('Usuário não encontrado'); // Log para verificação
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Verificar se a senha está correta
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) {
            console.log('Senha incorreta'); // Log para verificação
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        // Autenticação bem-sucedida
        res.status(200).json({ message: 'Login bem-sucedido', usuario });
    } catch (error) {
        console.log('Erro:', error); // Log para verificação
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
