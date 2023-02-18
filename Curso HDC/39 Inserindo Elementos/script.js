//Adicionando Elementos:

//Podemos inserir um elemento dentro de outro por exemplo um parágrafo em uma div;
//Isso é considerado com 'acrescentar um filho' em JS;

let el = document.createElement('div')

el.classList = 'div-criada' //Adicionar Classe a um elemento;

console.log(el)

let container = document.querySelector('div#container')
console.log(container)


//Inserir elemento filho
container.appendChild(el)


//InsertBefore
let el2 = document.createElement('div')
el2.classList = 'div-before'

container.insertBefore(el2, el)
