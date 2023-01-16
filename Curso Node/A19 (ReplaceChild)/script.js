var lista = document.getElementsByTagName('ul')[0]
var itens = lista.children
var NovoItem = document.createElement('li')
NovoItem.textContent = 'Bolacha'
lista.replaceChild(NovoItem, itens[1])