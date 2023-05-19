// NodeJs File System

const fs = require('fs')

// leitura de ficheiros de forma assincrono -- reading files
if(fs.existsSync('./dados.csv')){

    fs.readFile('./dados.csv', (err, data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data.toString())
        }
    })
} else{
    console.log('Ficheiro não encontrado')
}

console.log('última operação')