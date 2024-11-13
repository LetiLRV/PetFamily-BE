const sqlconnection = require('../connection/sqlconnection.js')
 
async function getEspecies(req,res){
    try { 
        const sql = await sqlconnection()
        

        const [result] = await sql.query('call getEspecies')

        res.status(200).send(result)

    } catch (error) {
        res.status(500).send('Erro ao ler as especies, verifique o console')
        console.log(error)

    }
}


module.exports = {
    getEspecies,
    
}