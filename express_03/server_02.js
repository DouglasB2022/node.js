const server = require('express');
const app = new server();

app.listen(3001, (req, res)=>{
    console.log('API connecting')
})

// mysql

const mysql = require('mysql');
const conexao = mysql.createConnection({
    user: 'user_blog',
    password: '2ene7Ope3odI84QI3o4I32Xu3up1pe',
    database: 'blog'
});


// routes

app.get('/', (req,res)=>{
    conexao.query('SELECT * FROM users WHERE id = ? AND username = ?', [1,'douglas'] , (error, results)=>{
        if(error){
            res.send(error.sqlMessage)
        }
        if(results.length != 0){
            // como iterar uma lista ordenada na tela do usuario com node

            // let html = '<ul>';

            // results.forEach(row => {
            //     html += '<li>'+ row.username +'</li>'
                
            // });
            // html += '</ul>';
            // res.send(html)
            res.send(results)

        }else{
            res.send('Não existem resultados')
        }
    })
})