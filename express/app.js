const express = require('express');
var morgan = require('morgan');
// cria uma aplicação express
const app = express();

// registra o template ejs com engine views
app.set('view engine', 'ejs')

// escuta o request
app.listen(3000)

// middleware 
app.use(express.static('public'))
app.use(morgan('dev'))

// routes
app.get('/', (req, res) =>{
    res.render('home', {title: 'home'})
})

app.get('/about', (req, res)=>{
    res.render('about', {title: 'Acerca-de'})
})
app.get('/services', (req, res)=>{

    const servicos = [{titulo_servico: "Desenvolvimento Web", descricao: "Desenvolvemos páginas e apps para web"},
                      {titulo_servico: "Desenvolvimento Desktop", descricao: "Desenvolvemos páginas e aplicações para desktop"},
                      {titulo_servico: "Desenvolvimento Mobile", descricao: "Desenvolvemos páginas e apps para mobile"}
];
    res.render('services', {title: 'Serviços' , servicos})
})
// app.get('/acerca-de', (req, res)=>{
//     res.status(302).redirect('about')
// })

app.use((req, res)=>{
    res.status('404').render('404', {title: 'Erro'})
})