const fs = require('fs')
// lendo ficheiros de forma sincrono 
if(fs.existsSync('./dados.csv')){
  let dados =  fs.readFileSync('./dados.csv')
  console.log(dados.toString())
} else {
    console.log('Ficheiro não encontrado')
}

console.log('última operação')