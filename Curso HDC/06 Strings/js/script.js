//String é o tipo de dado para textos
//Podem ser escritas com aspas simples ou duplas
//Um número entre aspas é uma strins
//É possível concatenar strings com '+'


var nome = 'Murilo' //String
var sobrenome = 'Weishaupt'

 //Concatenação
var nomeCompleto = nome + ' ' + sobrenome

var frase = 'Meu nome é'

console.log(nomeCompleto)
console.log(typeof nome)
console.log(typeof '2.52452') //String

//Concatenação no console:
console.log(frase + ' ' + nome + ' ' + sobrenome)

//Escrever no documento:
document.write(nome + ' ' + sobrenome + ' ') 

//Adicionar aspas a um elemento (Também funciona ao contrário)
document.write('Ele disse "Olá!"')






