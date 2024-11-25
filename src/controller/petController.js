const sqlconnection = require('../connection/sqlconnection.js')

async function getPet(req,res) {
    try{
        const sql = await sqlconnection()

        const [result] = await sql.query('call getpet')

        res.status(200).send(result)

        } catch (error) {
            res.status(500).send('Erro ao ler os pets, verifique o console')
            console.log(error)
        }
    
}

async function insertPet(req,res) {
    try{
        const sql = await sqlconnection()

        const {
            idPorte,
            idEspecie,
            idRaca,
            nome,
            sexo,
            nascimento
        } = req.body

        await sql.query('call insertPet(?,?,?,?,?,?)', [idPorte,idEspecie,idRaca,nome,sexo,nascimento])

        res.status(201).json({
            "menssage": "O pet foi inserido com sucesso",
            idPorte,
            idEspecie,
            idRaca,
            nome, 
            sexo,
            nascimento
        })

    } catch(error){
        res.status(500).send('Erro ao inserir um pet, verifique o console')
        console.log(error)
        
    }
}

async function updatePet(req,res) {
    try{
        const sql = await sqlconnection()

        const {idPet} = req.params
        const {
            idPorte,
            idEspecie,
            idRaca,
            nome,
            sexo,
            nascimento
        } = req.body

        await sql.query('call UpdatePet(?,?,?,?,?,?,?)',[idPet,idPorte,idEspecie,idRaca,nome,sexo,nascimento])

        res.status(200).json({
            "menssage" : "O pet foi alterado com sucesso",
            idPet,
            idPorte,
            idEspecie,
            idRaca,
            nome,
            sexo,
            nascimento
        })
    } catch(error){
        res.status(500).send('Erro ao alterar um pet, verifique o console')
        console.log(error)
    }  
}


async function deletePet(req,res) {
    try{
        const sql = await sqlconnection()

        const {idPet} = req.params

        await sql.query('call deletePet(?)',[idPet])

        res.status(200).json({
            "menssage" : "O pet foi apagado com sucesso",
            idPet
        })

    } catch(error){
        res.status(500).send('Erro ao tentar apagar o pet, verifique o console')
        console.log(error)
    }
    
}


module.exports = {
    getPet,
    insertPet,
    updatePet,
    deletePet
}