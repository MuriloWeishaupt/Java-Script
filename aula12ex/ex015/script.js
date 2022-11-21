var msg = window.document.getElementById ('msg')
var foto = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()

var hora = 


msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12) {
        Img.src = 'imagem-manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 19){
        fotos.src = 'imagem-tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        fotos.src = 'imagem-noite.jpg'
        document.body.style.background = '#515154'
    }