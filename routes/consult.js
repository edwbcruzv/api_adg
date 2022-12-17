const pool = require('./db')

function consult(consult_sql) {

    pool.query(consult_sql).then((result)=>{
        console.log(result.rows)
        return result
    })
}

module.exports=consult