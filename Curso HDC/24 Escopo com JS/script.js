//Escopo com JS:

//No JS podemos ter vários escopos.
//O global que é iniciado em toda a aplicação
//E os locais que podem existir em várias instruções com as funções.


var x = 2 //Escopo Global

var y = 7 //Escopo Global

function teste() {
   var z = 0 //Escopo local da função
   console.log(z)

   console.log(x) //POde se ter acesso de uma varíavel no escopo global dentro de um escopo local.
}
teste()

// console.log(z): Não se pode ter acesso a uma variável em um escopo local de um escopo global.


function testando() {
   var z = 3 //Pode se ter uma variável de mesmo nome em escopos locais diferentes.
   console.log(z)
}
testando()


if(true) {
   var p = 6
}

console.log(p) //Estruturas IF não limitam suas variáveis a escopos locais.

