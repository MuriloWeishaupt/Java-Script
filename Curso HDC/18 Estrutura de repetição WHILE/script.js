//Estruturas de repetição:

//Estas estruturas servem para repetir n vezes uma operação
//Por exemplo: repetir uma determinada lógica em cada elemento de um array
//As estruturas mais comuns são: while e for
//OBS: Tomar cuidado com o loop infinito


//Estrutura While:

//O while é a estrutura de repetição mais simples do JS
//A ideia é que se repita algo até atingir tal condição
//While -> Enquanto

let x = 0

while(x < 5) {
   console.log(`Testando repetição ${x}`)
   x++
}

arr = ['teste', 'testando', 'a', 'b']
var y = 0

while (y <= 3) {
   console.log(arr[y])
   y++
}

let palavra = 'Murilo'
let i = 0

while(i <= 5) {
   console.log(palavra[i])
   i++
}