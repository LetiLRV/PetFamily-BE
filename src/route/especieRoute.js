const express = require('express')
const router = express.Router()
const especieController = require('../controller/especieController.js')

router.get('/especie',especieController.getEspecies)

router.post('/especie',especieController.insertEspecie)

router.put('/especie/:idEspecie', especieController.updateEspecie)

router.delete('/especie/:idEspecie', especieController.deleteEspecie)


module.exports = router
