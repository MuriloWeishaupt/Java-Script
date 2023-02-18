//Evento Mouseover;

//O Mouseover é ativado quando o ponteiro do mouse passa em cima do elemento que criamos o evento;
//Temos também o evento mouseout que é quando o ponteiro sai do elemento;


//Evento de mouseover:
let title = document.querySelector('#title')

console.log(title)

title.addEventListener('mouseover', function() {
    this.style.color = 'red'
})


//Evento de mouseout:
title.addEventListener('mouseout', function() {
    this.style = 'none'
})



//Afetar outro elemento com mouseout:
let pHide = document.querySelector('.hide')

let subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('mouseover', function() {
    pHide.classList.remove('hide')
} )

subtitle.addEventListener('mouseout', function() {
    pHide.classList.add('hide')
})