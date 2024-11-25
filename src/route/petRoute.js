const express = require('express')
const router = express.Router()
const petController = require('../controller/petController.js')

router.get('/pet', petController.getPet)

router.post('/pet', petController.insertPet)

router.put('/pet/:idPet', petController.updatePet)

router.delete('/pet/:idPet', petController.deletePet)


module.exports = router