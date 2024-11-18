const sqlconnection = require('../connection/sqlconnection.js')
 
async function getEspecies(req,res){
    try { 
        const sql = await sqlconnection()
        

        const [result] = await sql.query('call getEspecies')

        res.status(200).send(result)

    } catch (error) {
        res.status(500).send('Erro ao ler as espécies, verifique o console')
        console.log(error)

    }
}

async function insertEspecie(req,res) {
    try{
        const sql = await sqlconnection()

        const {descricao} = req.body

        await sql.query('call InsertEspecie(?)',[descricao])

        res.status(201).json({
            "menssage": "Espécie foi inserida com sucesso",
            descricao
        })

    } catch(error){
        res.status(500).send('Erro ao inserir a espécie, verifique o console')
        console.log(error)

    }   
}

async function updateEspecie(req,res) {
    try{
        const sql = await sqlconnection()

        const {idEspecie} = req.params
        const {descricao} = req.body

        await sql.query('call UpdateEspecie(?,?)',[idEspecie, descricao])

        res.status(200).json({
            "menssage": "Espécie alterada com sucesso",
            idEspecie, 
            descricao
        })
        
    } catch(error){
        res.status(500).send('Erro ao alterar a espécie, verifique o console')
        console.log(error)
    }
    
}

async function deleteEspecie(req,res) {
    try{
        const sql = await sqlconnection()

        const {idEspecie} = req.params

        await sql.query('call DeleteEspecie(?)',[idEspecie])

        res.status(200).json({
            "menssage": "Espécie apagada com sucesso",
            idEspecie
        })

    } catch(error){
        res.status(500).send('Erro ao apagar a espécie, verifique o console')
        console.log(error)
    }

}


module.exports = {
    getEspecies,
    insertEspecie,
    updateEspecie,
    deleteEspecie
    
}