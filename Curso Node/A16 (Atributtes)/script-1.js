window.document.getElementById('btn-set').addEventListener('click', function() {
    window.document.getElementById('titulo').setAttribute('class', 'red')
}
)

window.document.getElementById('btn-remove').addEventListener('click', function(){
    window.document.getElementById('titulo').removeAttribute('class', 'red')
})

window.document.getElementById('btn-get').addEventListener('click', function(){
  var value =  window.document.getElementById('titulo').getAttribute('class')
  window.document.getElementById('p').innerHTML = value
})