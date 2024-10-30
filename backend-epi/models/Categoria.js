// models/Categoria.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Ajuste conforme necessário

class Categoria extends Model {}

Categoria.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'categoria',
});

module.exports = Categoria;
