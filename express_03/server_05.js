const express = require('express');
const app = new express();


app.listen(3000, (req, res) => {
    console.log('API rodando')
})

// mysql

const mysql = require('mysql');
const conexao = mysql.createConnection({
    user: 'user_blog',
    password: '2ene7Ope3odI84QI3o4I32Xu3up1pe',
    database: 'blog'
});


// routes
app.get('/', (req,res) =>{
    res.json(api_response('sucess','sucess',[]))
})


// transformando a resposta em json
app.get('/users/:id', (req,res) =>{
    let id =  req.params.id;
    conexao.query('SELECT * FROM users WHERE id = ?', [id], (error, results) =>{
        if(error){

            res.json(api_response('ERROR: ', error.sqlMessage, []))

        }else {
            
            res.json(api_response('sucess','sucess',results))
        }
    })
})


const api_response = (status, message, data) =>{
    return {
        status: status,
        message: message,
        results: data
    }
}