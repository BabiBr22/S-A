// models/Epi.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Categoria = require('.Categoria.js'); // Importando o modelo Categoria

class Epi extends Model {}

Epi.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoriaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Categoria,
      key: 'id',
    },
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  validade: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'epi',
});

// Definindo a relação
Epi.belongsTo(Categoria, { foreignKey: 'categoriaId' });

module.exports = Epi;
