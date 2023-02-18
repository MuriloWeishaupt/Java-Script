//Métodos de Array pt2:

//Podemos também resgatar um conjunto de elementos com os métodos;
//Identificar o índice de um elemento específico e muito mais;


let arr = [1, 2, 3, 4, 5]

arr.splice(2, 0, 999) //Adicionar elemento no meio do Array 
console.log(arr)


// arr.splice(2, 3)
// console.log(arr)


//IndexOf:

console.log(arr.indexOf(999))


//Join:

let arr2 = ['O', 'rato', 'roeu', 'a', 'roupa']

console.log(arr2.join(' ')) //Transforma Array em string


//Reverse:


console.log(arr2.reverse()) //Coloca o Array de trás para frente
