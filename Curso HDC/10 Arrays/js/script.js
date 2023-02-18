//Arrays:

//Na verdade os Arrays são considerados objetos em JS, porém servem como listas
//Podemos ter itens de qualquer tipo de dado também
//Porém não por chave, e sim por índice


let arr = [16, 'Murilo', true, {teste: 1, teste: 2}] //Array de vários tipos
console.log(arr)

let arr2 = [2, 5, 1, 6] //Array de um só tipo
console.log(arr2)

console.log(arr[1]) //Resgatar elementos
console.log(arr2[0]) //Resgatar elementos

arr[4] = 13 //Adicionar valor ao Array
console.log(arr)

arr[0] = 'Teste' //Modificar valores no Array
console.log(arr)

console.log(typeof arr)













