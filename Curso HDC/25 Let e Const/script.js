//Let e Const + Escopo:

//Utilizando let e const podemos criar escopo até em instrucões com IF.
//Deixando o código mais confiável.
//Separando cada bloco em um escopo.


let x = 5 //var x = 5

const y = 10 //Não pode ser alterado durante o código.

x = 13
console.log(x)

console.log('const' + ' ' + y)

if(true) {
   let x = 20 //cada bloco é separado com let
   console.log(x)

   const y = 50 //Pode haver uma const de mesmo nome do escopo global em um escopo local.

   
console.log('Const IF' + ' ' + y)
}

console.log(x)

var p = 10

console.log(p)

for(var p = 0; p <= 10; p++) {
   console.log(p)
}

let w = 13

for(let w = 0; w <= 15;w++) {
   console.log(w)
}


var r = 3

for(let r = 0; r < 100; r++) {
   console.log(r)
}

