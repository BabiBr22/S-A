const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Historico = sequelize.define('Historico', {
  funcionarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  epiId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  acao: {
    type: DataTypes.STRING, // 'cadastro', 'exclusão', 'edição', 'retirada', 'devolução'
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Historico;
