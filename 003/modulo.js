let nomes = ['joão', 'ana', 'douglas', 'carol', 'sasha']
let cidades = ['Porto Alegre', 'Caxias do Sul', 'Canoas', 'Esteio']

// empurra o elemento para o fim do array
cidades.push('Gravataí')
// remove o primeiro elemento do array
cidades.shift()
// adiciona um elemento na posição 0 do array
cidades.unshift('Alvorada')
// remove o ultimo item do array
cidades.pop()
// função básica
 const adicionar = (a,b)=>{
    return a + b
 }
// variavel de texto
const texto = 'Olá Mundo!!'


module.exports = {
    nomes, cidades, adicionar, texto
}