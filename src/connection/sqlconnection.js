const mysql = require('mysql2/promise');

async function sqlconnection(){
    const connection = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'petfamily'
    })

    console.log('mysql conectado')

    return connection;
}


module.exports = sqlconnection