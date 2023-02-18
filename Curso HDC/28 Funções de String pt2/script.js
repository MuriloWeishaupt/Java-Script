//Métodos de String pt2:

//Os métodos de String também aauxiliam na sua modificação
//Podemos por exemplo deixar deixar a fonte em caixa alta ou baixa com JS


//ToLowerCase e ToUpperCase:

let frase = 'Frase que vamos manipular'

console.log(frase.toLowerCase()) //Caixa Baixa
console.log(frase.toUpperCase())//Caixa Alta


//Trim:

let nome = '         Murilo          '
let nomeTrim = nome.trim()

console.log(nome)
console.log(nomeTrim)


//Split:

let tags = 'PHP, JS, HTML, CSS '
console.log(tags)
console.log(tags.split(', ')) //Separar strings por algum separador determinado


//LastIndexOf:

let frase2 = 'Exemplo de frase onde quero buscar a ultima palavra Exemplo'
console.log(frase2.indexOf('Exemplo'))
console.log(frase2.lastIndexOf('Exemplo'))
