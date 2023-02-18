//Propriedades do document:

// Objeto document não tem somente métodos;
//Podemos retirar várias informações importanres das suas propriedades também;


console.log(document.body)

console.log(document.head)

console.log(document.links)

document.links[0].textContent = 'Twitter'

console.log(document.URL)

console.log(document.title)

document.title = 'Aula 42' //Trocar título

console.log(document.title)