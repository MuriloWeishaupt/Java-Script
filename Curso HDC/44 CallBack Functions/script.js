//CallBack Functions:

//A função de CallBack é um recurso muito interssante e também amplamente utilizado em JS;
//Permite executar uma função depois de uma determinada ação;
//Conceito fundamental para entender a parte assíncrona do JS;



function exibir(num) {
    console.log('A ação resultou em: ' + num)
}

function soma(a, b, cb) {
    let op = a + b
    cb(op)
}

soma(2, 4, exibir)


function multiplicacao(a, b, cb) {
    let op = a * b
    cb(op)
}

multiplicacao(2, 7, exibir)
