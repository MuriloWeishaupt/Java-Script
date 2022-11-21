function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var pas = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    var i = Number(txti.value)
    var f = Number(txtf.value)
    var p = Number(txtp.value)

    if (ini.value.lenght== 0 || fim.value.length == 0 || pas.value.length == 0 ) {
         window.alert('[ERRO] Estão faltando Dados!')
    } else {
        res.innerHTML = 'Contando... <br>'
     if (i < f) {
     }
     for (c = i; c <= f; c += p) {
        res.innerText += `${c} \u{1F449}`
    }

    }