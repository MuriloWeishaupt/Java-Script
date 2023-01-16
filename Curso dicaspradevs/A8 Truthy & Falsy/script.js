//Falsy: string vazia, numero 0, null, undefined

//!: altera o valor booleano do elemento atual
console.log(!false) 
console.log(!true)

//!!: Verifica se um número é Truthy or falsy
const num = 1
console.log(!!null)



//Listas e Objetos vazios são TRUE
const list = []
console.log(!!list)

const objeto = {}
console.log(!!objeto)


if(list.length > 0) {
    console.log(list)
}



