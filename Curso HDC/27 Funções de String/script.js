// Métodos de String:

//O objeto string também possui métodos muito úteis.
//Que vão nos auxiliar a manusear textos nos nossos softwares.


//Length:

let nome = 'Murilo'
console.log(nome.length)

// IndexOf:

let frase = 'O rato roeu a roupa do rei de Roma'
console.log(frase.indexOf('roeu'))

//Slice:

let roeu = frase.slice(7, 11)
console.log(roeu)

//Replace:

let novaFrase = frase.replace('roeu', 'teste')
console.log(novaFrase)