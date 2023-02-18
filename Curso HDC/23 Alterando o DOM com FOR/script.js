let arr = ['Maçã', 'Banana', 'Pera', 'Goiaba']

let corpo = document.getElementsByTagName('body')
let lista = document.createElement('ul')

corpo[0].appendChild(lista)

let listaBody = document.getElementsByTagName('ul')

for(let i = 0; i < arr.length; i++) {
   li = document.createElement('li')
   contLi = document.createTextNode(arr[i])

   li.appendChild(contLi)

   listaBody[0].appendChild(li)
}

lista.style.color = 'white'
lista.style.listStyleType = 'none'

