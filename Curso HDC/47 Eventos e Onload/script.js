//O que são eventos?

//Por meio do JS podemos mapear algumas ações dos usuários, que chamamos de eventos;
//Como: movimento do mouse, click, mouse entrando ou saindo de um elemento, carregamento da página e etc;
//E então criar comportamento interessante como: animação de menu abrindo e fechando;


//Evento Onload:

//O Onload é ativado ao carregar a página;
//podemos depois desse evento realizar alguma ação no nosso projeto;


window.onload = function() {
    console.log('Carregou o DOM')
let title = document.querySelector('#title')
    console.log(title)
}

