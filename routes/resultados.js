const express = require('express');
const router = express.Router();
const consult=require('./consult')
const db = require('./db')

/**
 * 
 * select "Alcaldia",count(*) from "Tabla_A" group by "Alcaldia";
 * 
 * select "Alcaldia",count(*) from "Tabla_A" group by "Alcaldia" order by "Alcaldia" asc;
 * 
 * 
 * 
 * 
 */
router.get('/',async function(req, res) {
  const result = await db.query(`select "Alcaldia",count(*) from "Tabla_A" group by "Alcaldia" order by "Alcaldia" asc`)
  res.json(result.rows)
  
});

module.exports = router;