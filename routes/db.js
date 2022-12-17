const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'prueba1',
  password: 'postgres',
  port: 5432,
})

pool.connect((err)=>{
  if (err) {
    console.error("Error al conectarse a postgres",err.stack)
  } else {
    console.log("Conectado a postgres")
  }
}) 

module.exports = {
  query:(text)=>pool.query(text)
}