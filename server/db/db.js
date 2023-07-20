const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/todos_app_db', {
  logging: false,
});

module.exports = db;
