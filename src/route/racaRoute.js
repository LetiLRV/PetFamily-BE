const express = require('express')
const router = express.Router()
const racaController = require('../controller/racaController.js')

router.get('/raca', racaController.getRacas)

router.post('/raca', racaController.insertRaca)

router.put('/raca/:idRaca', racaController.updateRaca)

router.delete('/raca/:idRaca', racaController.deleteRaca)


module.exports = router