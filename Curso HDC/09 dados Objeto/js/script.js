//Dados Objeto:

//Funcionam com um array associativo de outras linguagens
//Podemos criar propriedades com chave e valor
//A ideia é guardar um conjunto de valores para utilizar posteriormente


var obj = {
    nome: 'Murilo',
    idade: 16,
    profissao: 'Programador',
    estaEstudando: true,
}

console.log(obj)
console.log(typeof obj)

console.log(obj.nome)
console.log(obj.idade)
console.log(obj.profissao)

console.log('O meu nome é' +' ' + obj.nome)

obj.idade = 17
console.group(obj.idade)

obj.altura = 1.80

console.log(obj)












