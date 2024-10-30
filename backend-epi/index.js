const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriaRoutes = require('./routes/categoria.js');
const authRoutes = require('./routes/auth.js'); // Importando as rotas de autenticação

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/categorias', categoriaRoutes); // Registrando as rotas de categoria
app.use('/auth', authRoutes); // Registrando as rotas de autenticação

// Rota padrão (opcional)
app.get('/', (req, res) => {
  res.send('API de Controle de EPIs');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
