const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'prueba1',
  password: 'postgres',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log("Error:",err,"\nRespuesta:",res.rows[0])
})

module.exports = pool