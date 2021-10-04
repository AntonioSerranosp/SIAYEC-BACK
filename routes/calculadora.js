const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearOperation,
  getOperationResult,
} = require("../controllers/operations");

const router = Router();

// Obtener eventos
router.get("/", getOperationResult);

router.post("/", crearOperation);
module.exports = router;
