const express = require("express");
const router = express.Router();
const db = require("./db");

/**
 * select "Alcaldia","Delito",count(*) as "Num_Delito" from "Tabla_A" group by "Alcaldia","Delito";
 * select "Alcaldia","TipoDelito",count(*) as "Num_TipoDelito" from "Tabla_A" group by "Alcaldia","TipoDelito";
 * 
 * 
 * select "TipoDelito","Num_TipoDelito"
 * from (select "Alcaldia","TipoDelito",count(*) as "Num_TipoDelito" from "Tabla_A" group by "Alcaldia","TipoDelito") as "Tabla_Aux" 
 * where "Alcaldia"='MIGUEL HIDALGO'
 * 
 */

async function getInfoAlcaldia(Alcaldia) {
  const temp = await db.query(`select "TipoDelito","Num_TipoDelito"
    from (select "Alcaldia","TipoDelito",count(*) as "Num_TipoDelito" from "Tabla_A" group by "Alcaldia","TipoDelito") as "Tabla_Aux" 
    where "Alcaldia"='${Alcaldia}'`);
  // console.log(temp.rows)
  return temp.rows;
}

router.get("/", async function (req, res) {
  const Alcaldias = await db.query(
    `select "Alcaldia",count(*) from "Tabla_A" group by "Alcaldia" order by "Alcaldia" asc`
  );
  // console.log(Alcaldias.rows)
  let result = {};

  for (let i = 0; i < Alcaldias.rows.length; i++) {
    let alcaldia = Alcaldias.rows[i].Alcaldia;
    // console.log(alcaldia);
    result[alcaldia] = await getInfoAlcaldia(alcaldia);
  }

  res.json(result);
});

module.exports = router;
