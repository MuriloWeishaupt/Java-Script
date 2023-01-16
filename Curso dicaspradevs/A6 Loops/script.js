
//Usar Loop quando quiser executar um coódigo várias vezes


//Enquanto i for menor ou igual a 10, executá-lo e adicionar 1 ao seu valor
for(let i = 0; i <= 10; i++) {
    console.log(i)
}


//Executar i enquanto i for menor do que a lista de carros, e depois de cada execução adicionar um i
const cars = ['Mercedes', 'Audi', 'BMW']

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}


//Mesmo resultado de cima, mas simplificado(For Of)
//Para cada carro na lista de carros, logar um carro
for(let car of cars) { 
    console.log(car)
}

//Mesmo resultado dos acima, porém nesse você pode indicar o índice(For Each). 
cars.forEach(function(car, index) {
    console.log(index)
    console.log(car)
})


//Enquanto i for menor do que 10, executar i + 1
let i = 0

while(i < 10) {
    console.log(`${i}`)
    i++
}


