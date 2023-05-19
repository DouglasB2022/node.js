const fs = require('fs')
// write file - assincrono
fs.writeFile('./dados1.txt', 'carol mendonça', ()=>{
    
})
// write file - sincrono
fs.writeFileSync('./dados2.txt', 'sasha oliveira');

// write file - append inclui o nome rui de forma assincronoma 
fs.appendFile('./dados1.txt', '\nrui', (err)=> {
    console.log(err)
})
// write file - append inclui o nome rui de forma sincronoma
fs.appendFileSync('./dados2.txt', '\nthiago',  )
console.log('ultima operação')