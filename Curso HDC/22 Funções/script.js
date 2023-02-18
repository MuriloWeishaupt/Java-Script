//Funções:

//Funções são blocos de códigos reutilizáveis.
//Ou seja, evitamos a repetição da lógica de um programa em diversas partes do código.
//A função precisa ser invocada para ser executada.


function primeiraFuncao() {

   console.log('Hello World das Funções')
}

primeiraFuncao()


function dizerNome(nome) {
   console.log(`O nome é ${nome}`)
}

dizerNome('Murilo')
dizerNome('Xavier')
dizerNome('Malcom')

let nomeBancoDeDados = 'Erick'

dizerNome(nomeBancoDeDados)


function soma(a, b) {
   let soma = a + b
   return soma
}

let somaUm = soma(1, 8)
console.log(somaUm)

let somaDois = soma(6, 17)
console.log(somaDois)

console.log(soma(4, 8))