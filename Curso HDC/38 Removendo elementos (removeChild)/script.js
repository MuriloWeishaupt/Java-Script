//Removendo elementos:

//Remover elementos também é muito fácil com JS;
//Temos com oremover o elemento diretamente e também um elemento filho;


//Remover elemento filho
let container = document.querySelector('#container')

let p = document.querySelector('#container p')

container.removeChild(p)


//Remover elemento 
let subtitle = document.querySelector('.subtitle')

subtitle.remove()