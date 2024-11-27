const cors = require('cors');
const express = require('express');
const app = express();


const port = 3000;

const especieRoute = require('../src/route/especieRoute.js')
const racaRoute = require('../src/route/racaRoute.js')
const porteRoute = require('../src/route/porteRoute.js')
const petRoute = require('../src/route/petRoute.js')

app.listen(port,()=>{
    console.log(`Servidor aberto http://localhost:${port}`)
})

app.get('/',(req,res)=>{
    res.send("Pet Family")
})

app.use(express.json())
app.use(cors())

app.use(especieRoute)
app.use(racaRoute)
app.use(porteRoute)
app.use(petRoute)