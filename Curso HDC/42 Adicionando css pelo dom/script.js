//Alterando CSS pelo DOM;

//É muito comum alterar CSS com JS também;
//As regras de CSS ficam de forma inline;
//Substituindo a maioria das outras regras criadas;


//Selecionar o elemento
let title = document.querySelector('#title')

//Adicionar Estilo
title.style.color = 'red'

//Background-color
title.style.backgroundColor = 'yellow' //CamelCase


//Adicionar vários estilos
let subtitle = document.querySelector('.subtitle')

subtitle.style.cssText = 'color: purple; background-color: pink; font-size: 30px; font-family: Arial; font-style: italic;'
