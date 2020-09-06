const express = require('express');
const app = express()
app.get('/',(rqe, res)=>{
    res.end('Hello World..')
})

app.get('/users', (req, res)=>{
    res.end(JSON.stringify({name: 'abc'}))
})

app.listen(3000, ()=>{
    console.log('app is listen 3000');
})