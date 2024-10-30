// db.js
const { Sequelize } = require('sequelize');

// Substitua pelos detalhes da sua conexão
const sequelize = new Sequelize('postgresql://barbara:ue0bEUWx6_siRJo0Sq_44g@projeto-s-a-2635.jxf.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full', {
  host: 'localhost', // ou o host do seu banco de dados
  dialect: 'postgres',
  logging: false, // Desative o logging, se não precisar
});

module.exports = sequelize;
