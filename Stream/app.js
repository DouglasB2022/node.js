//  streams

const fs = require('fs');
// readstream lê pedaços de textos em pequenas porções e vai imprimindo no console
const readStrean = fs.createReadStream('./dados.txt', { encoding: 'utf-8' } )
const escrita = fs.createWriteStream('./output.txt')

readStrean.on('data', (dados)=>{
    // console.log('#################')
    // console.log(dados)
    escrita.write('\n===========================\n')
    escrita.write(dados)
})