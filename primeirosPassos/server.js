const server = require('http')
server.createServer((req, res) =>{
    res.end('Olá Douglas seja bem-vindo ao NodeJS')
}).listen(5000)