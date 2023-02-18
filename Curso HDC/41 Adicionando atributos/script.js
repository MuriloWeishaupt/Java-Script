//Alterando Atributos:

//Podemos alterar os atributos via JS e DOM;
//Por exempç=lo: alterar o atributo alt de uma imagem;
//Ou até um src de uma imagem;
//Todos os atributos podem ser aterados via JS;



// Adicionar atributo:
let title = document.querySelector('#title')

title.setAttribute('class', 'testando-atributo')

console.log(title)

let  btn = document.querySelector('#btn')
btn.setAttribute('disabled', 'dusabled')

let subtitle = document.querySelector('.subtitle')

subtitle.setAttribute('id', 'titulo2')

console.group(subtitle)

//Remover Atributo:
let lista1 = document.querySelector('#lista1')

lista1.removeAttribute('id')

console.log(lista1)

let lista2 = document.querySelector('#lista2')

console.log(lista2)