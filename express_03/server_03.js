const express =  require('express');
const app = new express();

app.listen(3000, (req,res)=>{
    console.log('API rodando')
})

const mysql = require('mysql');
const conexao = mysql.createConnection({
    user: 'user_blog',
    password: '2ene7Ope3odI84QI3o4I32Xu3up1pe',
    database: 'blog'
});

// routes
app.get('/', (req,res)=>{

    // inserção de multiplos dados no banco
    let values = [
        ['0','teste2', '2023-06-27 11:30:00'],
        ['0','teste3', '2023-06-27 12:30:00'],
        ['0','teste4', '2023-06-27 13:30:00'],
        ['0','teste5', '2023-06-27 14:30:00'],
        ['0','teste6', '2023-06-27 15:30:00'],
        ['0','teste7', '2023-06-27 16:30:00'],
        
    ]
    
    // sintaxe de inserir dados no banco 
   conexao.query('INSERT INTO users VALUES ?', [values], (error, results)=>{
        if(error){
            res.send('Error: ' + error.sqlMessage)
            
        }else {
            res.send('Tudo certo')
            console.log(results)
        }
   })
})