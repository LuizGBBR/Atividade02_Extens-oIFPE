const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Luiz'
    + ' Gabriel') 
    res.end()
})

app.get('/retorno', (req,res) => {
    res.send('Nodejs é muito fácil') 
    res.end()
})

app.get('/onepiece', (req,res) => {
    res.send('The One Piece'
    + ' Is Real') 
    res.end()
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(
    'Server started on port ${PORT}'));