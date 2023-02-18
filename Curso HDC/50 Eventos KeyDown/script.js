// Evento Keydown:

//O evento keydown é ativado quando uma tecla é pressionada;
//Podemos tambem atrelar o evento keyup para quando uma tecla volta a posição normal;



document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        console.log('Apertou Enter!')
    }
})



//Keyup:

document.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        console.log('Soltou o Enter!')
    }
})