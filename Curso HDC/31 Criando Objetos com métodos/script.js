//Tudo é objeto:

//Como voçê pode perceber muitos tipos de dados tem métodos e propriedades;
//Podemos criar também os nossos objetos com propriedades e métodos para auxiliar nos nossos programas;


let pessoa = {
    nome: 'Murilo',
    idade: 16,
    falar: function() {
        console.log('Olá, tudo bem?') //Criação de um método em um objeto
    },
    soma: function(a, b) {
       return a + b
    }
}

console.log(pessoa.nome)
pessoa.falar()
let soma = pessoa.soma(2, 8)
console.log(soma)