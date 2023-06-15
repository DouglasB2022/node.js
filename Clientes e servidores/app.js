const http = require('http');
const fs = require('fs');
const lodash =  require('lodash');

const server = http.createServer((req, res)=>{

    // prepara o conteudo da resposta 
    res.setHeader('Content-Type', 'text/html')
    console.log(lodash.random(0,100))
    
    // sistema de roteamento
    let htmlFile = '';
    switch (req.url) {
        case '/':
            htmlFile = './views/index.html'
            res.statusCode = 200;
            break;

        case '/about':
            htmlFile = './views/about.html'
            res.statusCode = 200;
            break;

        case '/acerca_de':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end();
            break;
    
        default: 
            htmlFile = './views/404.html'
            res.statusCode = 404;
            break;
    }
    fs.readFile(htmlFile, (err, data)=>{
       if(err){
        console.log('erro')
        res.end()
       }else{
        res.write(data)
        res.end()
       }
    })
})
server.listen(3000, 'localhost', ()=>{
    console.log('servidor funcionando novamente')
    
})