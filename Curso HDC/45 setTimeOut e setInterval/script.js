//SetTimeOut e SetInterval:

//Podemos com estas funções criar ações no software que executam depois de um tempo ou de tempos em tempos;
//Um dos argumentos destas funções é uma callback function;



//SetTimeOut:
setTimeout(function() {
    console.log('Testando SetTimeOut')
}, 2000) //Tempo para a função acontecer


//SetInterval:
setInterval(function() {
    console.log('Testando SetInterval')
}, 1000)