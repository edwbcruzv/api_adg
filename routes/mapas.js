const express = require('express');
const router = express.Router();
const consult = require('./consult')
const db = require('./db')



router.get('/',async function(req, res) {
  const result=await db.query("SELECT \"Alcaldia\", \"Latitud\",\"Longitud\" FROM \"Tabla_A\"")
  res.json(result.rows)
});

module.exports = router;