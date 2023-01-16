var titulo = window.document.getElementById('title')
var texto = window.document.createTextNode(texto)
titulo.textContent = 'São Paulo Campeão'


window.document.getElementById('btn-set').addEventListener('click', function() { //Quando clicar no Botão 'SET' (Evento de click) irá ocorrer uma função:
    window.document.getElementById('title').setAttribute('class', 'red') //O título irá atribuír uma cor Vermelha que está em uma classe
})

window.document.getElementById('btn-remove').addEventListener('click', function() {  //Quando clicar no Botão 'REMOVE' (Evento de click) irá ocorrer uma função:
    window.document.getElementById('title').removeAttribute('class', 'red')  //O título irá atribuír à313 remoção da cor Vermelha que está em uma classe
})

window.document.getElementById('btn-get').addEventListener('click', function() {
    var value = window.document.getElementById('title').getAttribute('class')
    window.document.getElementById('class').innerHTML = value
})