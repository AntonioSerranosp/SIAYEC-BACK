const { response } = require("express");
const { Resultado } = require("../models/Calculadora");

//falta modelo

const getOperationResult = async (req, res = response) => {
  try {
    const lastResult = await Resultado.findAll({
      limit: 1,
      order: [["createdAt", "DESC"]],
    });

    res.json({
      ok: true,
      lastResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const crearOperation = async (req, res = response) => {
  console.log(req.body, "-----<");

  try {
    const evento = new Resultado(req.body);
    const eventoGuardado = await evento.save();

    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  crearOperation,
  getOperationResult,
};
