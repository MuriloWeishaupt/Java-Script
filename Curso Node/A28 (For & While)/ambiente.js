/* for(i = 0; i <= 10;i++) {
    console.log(i)
}

let i = 0
while(i <= 10) {
    console.log(i)
    i++
}
*/

let paises = window.document.getElementsByClassName('pais')

for(let i = 0; i < paises.length; i++) {
    console.log(paises[i].innerHTML)
}