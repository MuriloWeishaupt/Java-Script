//Trocando elementos:

//Podemos também trocar um elemento no DOM;
//Ou seja, substituir uma tag por outra e de modo bem fácil;


let h3 = document.createElement('h3')

h3.classList = 'classe-h3'

let texto = document.createTextNode('Texto do H3')

h3.appendChild(texto)

let h2 = document.querySelector('.subtitle')

let pai = h2.parentNode

pai.replaceChild(h3, h2)

