// Condicionais Else IF & Else:

//Caso a instrução de IF seja negativa, podemos adicionar else
//Que será a outra condicional a ser executada
//Podemos então criar uma bifircação no código
//Já o Else IF tema possibilidade de fazer a verificação e adicionar mais um bloco de código


let nome = 'Matheus'

if(nome == 'Pedro') {
    console.log('Seu nome é Pedro')
} else if(nome == 'Matheus') {
    console.log('Seu nome é Matheus')
} else {
    console.log('Você possui outro nome!')
}

let idade = 16

if(idade >= 20) {
    console.log('Ele pode entrar na festa')
} else if(idade == 18) {
    console.log('Ele só pode entrar com autorização')
} else {
    console.log('Ele não pode entrar na festa')
}