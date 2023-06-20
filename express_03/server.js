const express = require('express');
const app = new express();

app.listen(3000, (req, res)=>{
    console.log('API running')
});

// mysql
const mysql = require('mysql');
const connection =  mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'blog'
})

// routes
app.get('/', (req,res)=>{
    connection.query('SELECT * FROM users', (err, resultados)=>{
        if(err){
            console.log(err.message)
            res.send('erro :'+ err.code)
        }
        res.send(resultados[0].username)
    })
    // res.send('Olá node + mysql');
})