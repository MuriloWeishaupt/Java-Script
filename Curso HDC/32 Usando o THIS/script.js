//A instrução THIS:

//Fora de escopos locais o this sempre se refere ao objeto global window;
//Em bjetos o this se refere a instância e pode acessar suas propriedades;


let pessoa = {
    nome: 'Murilo',
    idade: 16,
    falar: function() {
        console.log('Olá, tudo bem?')
    },
    dizerNome: function() {
        console.log('O meu nome é' + ' ' + this.nome)
    },
    aniversario: function() {
        this.idade += 1
    }
}
pessoa.dizerNome()
pessoa.aniversario()
pessoa.aniversario()
console.log(pessoa.idade)
