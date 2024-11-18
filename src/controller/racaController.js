const sqlconnection = require('../connection/sqlconnection.js')

async function getRacas(req,res) {
    try{
        const sql = await sqlconnection()

        const [result] = await sql.query('call getraca')

        res.status(200).send(result)


    } catch(error){
        res.status(500).send('Erro ao ler as raças, verifique o console')
        console.log(error)
    }
    
}

async function insertRaca(req,res) {
    try{
        const sql = await sqlconnection()

        const {descricao} = req.body

        await sql.query('call InsertRaca(?)', [descricao])

        res.status(201).json({
            "menssage": "A raça foi inserida com sucesso",
            descricao
        })

    } catch(error){
        res.status(500).send('Erro ao inserir a raça, verifique o console')
        console.log(error)
    }
    
}

async function updateRaca(req,res) {
    try{
        const sql = await sqlconnection()

        const {idRaca} = req.params
        const {descricao} = req.body

        await sql.query('call UpdateRaca(?,?)', [idRaca, descricao])

        res.status(200).json({
            "menssage": "Raça alterada com sucesso",
            idRaca,
            descricao
        })

    } catch(error){
        res.status(500).send('Erro ao alterar a raça, verifique o console')
        console.log(error)
    }
    
}

async function deleteRaca(req, res) {
    try{
        const sql = await sqlconnection()

        const {idRaca} = req.params

        await sql.query('call DeleteRaca(?)',[idRaca])

        res.status(200).json({
            "menssage": "Raça apagada com sucesso",
            idRaca
        })
        
    } catch(error){
        res.status(500).send('Erro ao apagar a raça, verifique o console')
        console.log(error)
    }
    
}




module.exports = {
    getRacas,
    insertRaca,
    updateRaca,
    deleteRaca
}