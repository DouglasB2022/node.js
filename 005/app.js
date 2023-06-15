const http =  require('http');

const server = http.createServer((req, res)=>{
   
    // header
    // corrige os caracteres da página
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // importa um css não existente até o momento
    res.write('<head><link rel="stylesheet" href="app.css"></head>')
    res.write('<h2>Título principal</h2>')
    res.write('\n')
    res.write('<h3>subtítulo</h3>')
    res.write('\n')
    res.write('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cupiditate modi tempora! Doloremque laborum distinctio eos accusamus reiciendis est illum ut sunt? Voluptatibus earum laudantium cumque sunt unde sapiente vel!</p>')
    res.end()
})
server.listen(3000, 'localhost', ()=>{
    console.log('servidor iniciado')
})