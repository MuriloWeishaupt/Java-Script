const names = ['Murilo', 'Marlon', 'Douglas', 'Rafael'] //Cria uma lista(Array)
console.log(names)

const Murilo = names[0] //Seleciona um índice específico
console.log(Murilo)

names.push('Renata') //Adiciona um elemento no último índice
console.log(names)

names.unshift('Gilmar') //Adiciona um elemento no primeiro índice
console.log(names)

names.pop() //Retira o último índice da lista
console.log(names)

names[0] = 'João' //Altera o valor de um índice específico
console.log(names)

const IndexOfName = names.indexOf('Murilo') //Mostra o índice de um elemento
console.log(IndexOfName)

const SortedNames = names.sort() //Ordena a lista (por ordem Numérica, Alfabetica etc.)
console.log(SortedNames)

console.log(names.length) //Mostra o número de índices que a lista tem

const  NameIsArray = Array.isArray(names) //Verifica se um elemento é uma lista
console.log(NameIsArray)












