 var num = window.document.getElementById('fnum')
 var lista = window.document.getElementById('flista')
 var res = window.document.getElementById('res')
 var valores = []
 var n = Number(num.value)

 function adicionar() {
    if(n < 1 && n > 100) {
        window.alert('[ERRO] Número Não Compatível')
    } else {
        res.innerHTML = 'OK'
    }
 }