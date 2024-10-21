const express= require('express')
const app = express()
require('dotenv').config()

app.get('/', (req,res)=>{
    res.send(process.env.MONGOURI)
})

app.listen(5000, ()=>{
    console.log("http://localhost:5000")
})