const express = require('express')
const router = express.Router()
const especieController = require('../controller/especieController.js')

router.get('/especie',especieController.getEspecies)


module.exports = router
