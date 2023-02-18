//Acessando elementos DOM

//Acessar o DOM caracteriza-se por identificar um elemento do HTML através de métodos;
//Depois dpodemos manipulá-los de forma que quisermos;
//Acessar o DOM é semelhante as regras CSS;
//Podemos acessar por: tags, ids, classes;


//Tag:
let titulo = document.querySelector('h1')
console.log(titulo)


//Id:
let paragrafo = document.getElementById('paragrafo')
console.log(paragrafo)


//Class:
let itens = document.getElementsByClassName('itens')
console.log(itens)