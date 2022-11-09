const express = require('express');
const router = express.Router();
const pool=require('./db')

/**
 * 
 */
router.get('/', async function(req, res) {
  try {
    const result=await pool.query("SELECT \"Alcaldia\", \"Delito\", count(\"Delito\") as Cantidad FROM \"Tabla_A\" GROUP BY \"Alcaldia\",\"Delito\"")

    // console.log(result.rows)
    console.log("> /resultados")
    res.json(result.rows)
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;