const pais = 'Canadá'

if(pais === 'EUA') {
    console.log('Americano')
} else if(pais === 'Canadá') {
    console.log('Canadense')
} 
else {
    console.log('Brasileiro')
}


//&& And
//|| Or

const sum1 = 1 + 1
const sum2 = 2 + 2

if(sum1 === 2 && sum2 === 6) {
    console.log('sum1 é igual a 4 e sum2 é igual a 6')
}

if(sum1 === 2 || sum2 === 6) {
    console.log('sum1 é igual a 4 ou sum2 é igual a 6')
}


//Ternary Operator

const n1 = 7
const n2 = 6
const n3 = 8
const media = (n1 + n2 + n3) /3

const Media = media >= 7 ? 'APROVADO' : 'REPROVADO'

console.log(Media)


//Switch

const car = 'BMW'

switch (car) {
    case 'Mercedes':
    console.log('Eu tenho uma Mercedes')
        break
    case 'Audi':
        console.log('Eu tenho um Audi')
        break
    case 'BMW':
        console.log('Eu tenho uma BMW')
        break
    
}

