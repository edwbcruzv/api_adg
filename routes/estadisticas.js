const express = require('express');
const router = express.Router();
const pool=require('./db')


router.get('/', async function(req, res) {
  try {
    const result=await pool.query("SELECT \"Delito\",\"Latitud\",\"Longitud\" FROM \"Tabla_A\" ")
    // console.log(result.rows)
    console.log("> /estadisticas")
    res.json(result.rows)
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
