const { Sequelize, DataTypes } = require("sequelize");

const { db } = require("../database/config");

const Resultado = db.define("resultado", {
  operationType: {
    type: DataTypes.STRING,
  },
  operationResult: {
    type: DataTypes.FLOAT,
  },
});

module.exports = {
  Resultado,
};
