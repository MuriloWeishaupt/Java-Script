var lista = document.getElementsByTagName('ul')[1]
var itens = lista.children

var NI = window.document.createElement('li')
NI.textContent = 'Batata Doce'

lista.insertBefore(NI, itens[2])

console.log(lista)
