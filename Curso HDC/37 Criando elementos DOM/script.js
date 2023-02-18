//Criando Elementos:

//Outra possibilidade do JS e o DOM é criar elementos;
//O texto de um elemento é considerado um nó na árvore do DOM;
//Ou seja, temos que criar o texto do elemento também;


let novoParagrafo = document.createElement('p')

console.log(novoParagrafo)

let texto = document.createTextNode('Conteúdo do parágrafo')

novoParagrafo.appendChild(texto)

let body = document.querySelector('body')
body.appendChild(novoParagrafo)

let container = document.querySelector('#container')

let span = document.createElement('span')

span.textContent = 'Conteúdo do span'

container.appendChild(span)