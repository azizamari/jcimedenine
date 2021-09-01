const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})
app.get('/rnp',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','rnp.html'))
})
app.post('/rnp',(req,res)=>{
    res.status(200).json(req.body)
})
app.listen(3000,()=>{
    console.log('listening on port 3000')
})