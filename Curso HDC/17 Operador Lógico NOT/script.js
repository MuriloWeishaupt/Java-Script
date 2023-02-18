// Operador Lógico !:

//O operador lógico ! é conhecido também com NOT.
//Este operador muda o valor que a expressão retornou.
//Se recebeu true, vira false, se recebeu false, vira true.


if(!true) { //Vira false
   console.log('Passou!')
}

if(!false) { //Vira true
   console.log('Não Passou!')
}


let nome = 'Murilo'

if(!(nome == 'Murilo')) {
   console.log('OK')
}
