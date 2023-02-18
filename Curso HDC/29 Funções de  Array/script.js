

//Métodos de Array

//Os arrays também possuem métodos
//Facilitando a nossa vida para: adicionar e remover elementos, resgatar apenas uma parte do array e etc;


//Length:

let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.length)


//Push:

arr.push(7) //Adiciona um elemento no final do Array
arr.push('Qualquer coisa')
console.log(arr)


//Pop:

arr.pop() //Remove um elemento no final do Array
console.log(arr)


//Unshift:

arr.unshift(0) //Adiciona um elemento no começo do array
arr.unshift('teste')
console.log(arr)


//Shift:

arr.shift() //Remove um elemento no começo do Array
console.log(arr)


//Acesso ao último elemento do Array:
console.log(arr[arr.length - 1])


//Verificar se dado que estamos trabalhando é um array:

console.log(Array.isArray(arr))
