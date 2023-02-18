//Outras formas de acessar:

//Com a evolução da linguagem foram criados dois seletores que acabam com toda a complexidade desta ação;
//QuertSelector e QuerySelectorAll;
//Com estes podemos acessar os elementos baseados em regras de CSS;


let itensClasse = document.getElementsByClassName('item')
console.log(itensClasse)


//QuerySelectorAll:
let itensQueryAll = document.querySelectorAll('#lista2 li')
console.log(itensQueryAll)


//QuerySelector:
let itensQuery = document.querySelector('#lista1 li')
console.log(itensQuery)

let span = document.querySelector('#paragrafo span')
console.log(span)