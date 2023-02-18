//ClearTimeOut e ClearInterval:

//Podemos por um fim em setTimeOut e setInterval por meio destes dois métodos;
//Então após determinada condição os timers não serão mais executados;


//ClearTimeOut na prática:

let x = 0

let timeOut = setTimeout(function() {
    console.log('O x é 0')
}, 1500)

x = 5

if(x > 0) {
    clearTimeout(timeOut)
    console.log('O x passou de 0!')
}


//ClearInterval na prática:

let myInterval = setInterval(function() {
    console.log('imprimindo interval')
}, 500)

setTimeout(function() {
    console.log('Não precisamos mais do interval!')
    clearInterval(myInterval)
}, 1500) //Depois do Interval ser imprimido 3 vezes(1,5 segundo) eu quero que ele pare de ser imprimido



x = 0

let myTimer = setTimeout(function(){
    console.log('O x é igual a 0')
}, 1500)

x = 5

if(x > 0) {
    clearTimeout(myTimer)
    console.log('o x passou de 0!')
}

let myTimer2 =setInterval(function() {
    console.log('Imprimindo Interval')
}, 5000)

setTimeout(function() {
    clearInterval(myTimer2)
    console.log('Não precisamos mais do Interval!')
}, 20000)