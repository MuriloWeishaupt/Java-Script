//Alterando o conteúdo:

//Podemos alterar o texto de qualquer elemento de forma fácil com JS;
//Posteriormente poderemos atrelar esra ação com algum evento;


let title = document.querySelector('#title')

//InnerHTML:
title.innerHTML = 'Testando texto alterado!'

//TextContent -> Mais utilizado, recomendado e performático
let subtitle = document.querySelector('.subtitle')
subtitle.textContent = 'Testando o TextContent'

