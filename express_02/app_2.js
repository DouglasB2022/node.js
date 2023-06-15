const express = require('express');
const app = express();
app.listen(3001);

// routes 
app.get('/', (req, res)=>{
    res.send('olá mundo!');
})

//  routes clientes com parametros
app.get('/clientes/:id_cliente', (req,res)=>{
    res.send(req.params);
})
// busca dos parametros id_cliente, id_comentarios
app.get('/clientes/:id_cliente/comentarios/:id_comentarios', (req, res)=>{
    res.send(req.params);
})
// adicao dos parametros valor1/valor2
app.get('/adicao/:valor1/:valor2', (req, res)=>{
    res.send(`a soma dos valores é ${+req.params.valor1 + +req.params.valor2}`);
})

// routes com parametro endppoint - ou .
app.get('/cliente/:loja-:cidade', (req, res)=>{
    let lojas = [
        'Rua a',
        'Rua b',
        'Rua c',
        'Rua d', 
    ]
    res.send(`a loja escolhida foi na cidade: ${req.params.cidade} que fica localizada na rua: ${lojas[req.params.loja]}`);
})