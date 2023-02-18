//Operadores de atribuição:

//Temos algumas maneiras de atribuir um valor a uma variável
//As mais utilizadas são: '+=', '-+', '*=', '/='
//Basicamente é uma forma resumida da operação x = x + y
//Em loops também é comum utilizar os operadores ++ ou --

let x = 5
let y = 2

//Soma
console.log(x = x + y)
console.log(x+= y)

//Subtração
console.log(x -= y)

//Mutiplicação
console.log(x *= y)

//Divisão
console.log(x /= y)

//Loops
console.log(x++)
console.log(x--)


while(x <= 100) {
   console.log(x)
   x*= 2
}

let j = 5

while(x > 0) {
   console.log(x)
   x-= j
}

