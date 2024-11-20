const sqlconnection = require('../connection/sqlconnection.js')

async function getPortes(req,res){
    try{
        const sql = await sqlconnection()

        const [result] = await sql.query('call getPorte')

        res.status(200).send(result)

    } catch(error){
        res.status(500).send('Erro ao ler os portes, verifique o console')
        console.log(error)
    }
}

async function insertPorte(req,res) {
    try{
        const sql = await sqlconnection()

        const {descricao} = req.body

        await sql.query('call insertPorte(?)', [descricao])

        res.status(201).json({
            "menssage": "O porte foi inserido com sucesso",
            descricao
        })

    } catch(error){
        res.status(500).send('Erro ao inserir um porte, verifique o console')
        console.log(error)
    }
}

async function updatePorte(req,res) {
    try{
        const sql = await sqlconnection()

        const {idPorte} = req.params
        const {descricao} = req.body

        await sql.query('call UpdatePorte(?,?)', [idPorte, descricao])

        res.status(200).json({
            "menssage" : "Foi alterado o porte com sucesso", 
            idPorte, 
            descricao
        })

    } catch(error){
        res.status(500).send('Erro ao tentar alterar o porte, verifique o console')
        console.log(error)
    }
    
}

async function deletePorte(req,res) {
    try{
        const sql = await sqlconnection()

        const {idPorte} = req.params

        await sql.query('call deletePorte(?)',[idPorte])

        res.status(200).json({
            "menssage" : "O porte foi apagado com sucesso",
            idPorte
        })

    } catch(error){
        res.status(500).send('Erro ao tentar apagar o porte, verifique o console')
        console.log(error)
    }
}


module.exports = {
    getPortes,
    insertPorte,
    updatePorte,
    deletePorte
}