const http = require('http');
const host = '127.0.0.1'
const port = 3001

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/plain; charset=utf-8")

    if(req.url == '/'){
        res.end("Página inicial do nosso website")
    }else if(req.url == '/new'){
        
        res.end("Página nova do nosso website")
    }
    else if(req.url == '/contatos'){
        
        res.end("Página de contatos do nosso website")
    }
    else {
        
        res.end("Página desconhecida")
    }
})
server.listen(port, host, () =>{
    console.log("Servidor rodando");
})