//Map: Executa uma determinada função sobre cada item de uma lista e retorna uma nova lista com a função executada em cada item.

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)

const numbersMultipliedByTwo = numbers.map(function(number) {
    return number * 2
})
console.log(numbersMultipliedB)


//Filter: Filtra uma lista e retorna uma nova lista baseada no filtro passado.

const age = [20, 47, 52, 59, 81, 25]

const evenAges = age.filter(function(ages) { //Função para retornar somente números pares.
    return ages % 2 === 0
})
console.log(evenAges)


//Reduce: Reduz todo os números de uma lista pra um só.



const sumOfAges = age.reduce(function(age, accumulator) { //Funcçao para somar todas as idades da Lista.
    return accumulator + age
},0) // Número 0 significa o valor inicial para começar a soma (se o número fosse '100' a soma iria começar com o número '100', tendo como resultado '384').

// O segundo parametro da função pode ter qualquer nome, coloquei 'Accumulator' pois faz sentido.
console.log(sumOfAges)



















