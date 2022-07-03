const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
  benchmark: true,
});

module.exports = sequelize;
