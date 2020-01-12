// express

const express = require('./kpress')
const app = express()
app.get('/', (req, res) => {
    res.end('Hello express')
})

app.get('/users', (req, res) => {
    res.end(JSON.stringify({name: 'express'}))
})

app.listen(3000, () => {
    console.log('App listen at 3000')
})