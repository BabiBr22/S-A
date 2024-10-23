const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Ajuste o caminho conforme necessário

const Funcionario = sequelize.define('Funcionario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  departamento: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'funcionarios' // Nome da tabela no banco de dados
});

// Sincronizar o modelo com o banco de dados
Funcionario.sync({ force: false });

module.exports = Funcionario;
