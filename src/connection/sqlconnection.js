const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'petfamily',
    waitForConnections: true,
    connectionLimit: 10,      
    queueLimit: 0             
});

async function sqlconnection() {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL CONECTADO');
        return connection; 
    } catch (error) {
        console.error('Erro ao conectar ao MySQL:', error);
        throw error; 
    }
}

module.exports = sqlconnection;