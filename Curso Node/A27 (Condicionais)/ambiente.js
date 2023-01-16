let pais = 'França '
let estado = 'São Paulo'

/*
if (pais == 'Brasil') {
    console.log('Sou Brasileiro')
}  else {
    console.log('Sou Gringo')
}
*/

switch(pais) {
    case 'Brasil':
        console.log('Brasileiro')
        break
    case "Canadá":
        console.log('Canadense')
        break
    case "EUA":
        console.log('Estaduidense/Americano')
        break
    default:
        console.log('[ERRO] País não encontrado!')
}

