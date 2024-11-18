const express = require('express');
const app = express();

const port = 3000;

const especieRoute = require('../src/route/especieRoute.js')
const racaRoute = require('../src/route/racaRoute.js')

app.listen(port,()=>{
    console.log(`Servidor aberto http://localhost:${port}`)
})

app.get('/',(req,res)=>{
    res.send("Pet Family")
})

app.use(express.json())

app.use(especieRoute)
app.use(racaRoute)