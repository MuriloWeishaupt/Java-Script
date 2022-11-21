function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fAno.value.lenght == 0 || fAno.value > ano) {
        window.alert ('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano = Number(fAno.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
             if (idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe.jpg')
             } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.jpg')
             } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.jpg')
             } else {
                // Idoso
                img.setAttribute('homem-idoso.jpg')
             }
        } else {
            gênero = 'Mulher'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe.jpg')
             } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-f.jpg')

             } else if (idade < 50) {
                // Adulto
                img.setAttribute ('mulher.adulta.jpg')
             } else {
                // Idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
        
    } 
}
