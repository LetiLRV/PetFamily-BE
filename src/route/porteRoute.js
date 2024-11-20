const express = require('express')
const router = express.Router()
const porteController = require('../controller/porteController.js')

router.get('/porte', porteController.getPortes)

router.post('/porte', porteController.insertPorte)

router.put('/porte/:idPorte', porteController.updatePorte)

router.delete('/porte/:idPorte', porteController.deletePorte)

module.exports = router 