//Evento click:

//O click é ativado quando o usuário clica em um elemento em que atrelamos o evento;
//Após a ação podemos fazer as modificações e alterações no HTML/CSS que quisermos;



//Inserir Click:
let btn = document.querySelector('#btn')

console.log(btn)

btn.addEventListener('click', function() {
    console.log('Clicou!')

    this.style.color = 'red' //Alterar o estilo do próprio evento.
})



//Click afetando outros elementos:
let title = document.querySelector('#title')

console.log(title)

title.addEventListener('click', function() {
    
    let subtitle = document.querySelector('.subtitle')

    subtitle.style.display = 'none'
})


//Double click:
let subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('dblclick', function() {
    console.log('Click Duplo!')
})