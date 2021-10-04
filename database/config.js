const { Sequelize, Model, DataTypes } = require("sequelize");
const db = new Sequelize("siayec", "root", "Odontocode2", {
  host: "localhost",
  dialect: "mysql",
});

const dbConnection = async () => {
  try {
    await db.sync();
    console.log("data base on");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar BD");
  }
};

module.exports = {
  dbConnection,
  db,
};
