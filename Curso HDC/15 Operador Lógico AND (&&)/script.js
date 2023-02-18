//Operadores Lógicos:

//Nas linguagens de programação existem os operdores lógicos.
//estes operadores realizam comparações para que seja retornado um true ou false.
//Decidindo então o fluxo da aplicação.
//Utilizamos principalmente nas instruções de condição e repetição, em conjunto dos operadores de comparação.


//Operador Lógico AND (&&):

//O Operador lógico && é conhecido também como AND.
//Ele vai retornar true apenas se as duas expressões retornarem true.
//Qualquer outro resultado o operador lógico and retornará false.


let idade = 17
let nome = 'João'

if( nome === 'João' && idade === 16) {
    console.log('O João pode entrar na aula de esgrima')
} else {
    console.log('Este não é o João')
}

if(4 == 4 && 6 < 10 && 8 > 6) {
    console.log('Todos os elementos estão corretos')
}

if(4 > 4 && 6 < 10 && 8 > 6) {
    console.log('Todos os elementos estão corretos')
}