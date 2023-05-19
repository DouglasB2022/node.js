// modulos e require

console.log('Inicio')

// importação básica de um modulo atraves de uma variavél
// let pessoas = require('./modulo')

// conceito de desestruturação de variavéis
const { nomes, cidades, adicionar, texto} = require('./modulo')

console.log(nomes)
console.log(cidades)
console.log(adicionar(10,20))
console.log(texto)