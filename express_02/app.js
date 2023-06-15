const express = require('express');
const app = express();
app.listen(3001);

//  routes 
app.get('/',(req, res)=>{
    res.write('teste');
    res.send(); 
})
// rota somente com expressões abcd, acd
app.get('/ab?cd',(req, res)=>{
    res.send('rota com expressões regulares'); 
})
// rota com adiçao de expressões 
app.get('/ab+cd',(req, res)=>{
    res.send('rota com adicao de expressões'); 
})

app.all('/home',(req, res, next)=>{
    // res.write('home');
    res.send('home'); 
})