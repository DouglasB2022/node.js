const fs = require('fs')

// create folder --> criando pasta 
// if(!fs.existsSync('./pasta1')){

//     fs.mkdir('./pasta1', (err)=>{
//         if(err){
//             console.log(err)
    
//         }else {
//             console.log('Pasta criada com sucesso.')
//         }
//     })
// } else {
//     console.log('A pasta já existe.')
// }

// remove folder --> removendo pasta do sistema 
if(fs.existsSync('./pasta1')){
    fs.rm('./pasta1', { recursive: true}, (err) =>{
        console.log(err)
    })
} else{
    console.log('Não existe a pasta no sistema.')
}
console.log('terminado')