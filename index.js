const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
// Crear el servidor de express
const app = express();
const port = 3001;
// Base de datos
dbConnection();

// CORS
app.use(cors());
// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/calculadora", require("./routes/calculadora"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
