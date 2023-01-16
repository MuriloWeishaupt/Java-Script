const person = {
    firstName: 'Murilo',
    lastName: 'Weishaupt',
    age: 16,
    hobbies: ['tocar', 'assistir series', 'estudar']
}

//const firstName = person.firstName
//const lastName = person.lastName
//const age = person.age
//const hobbies = person.hobbies

//Mesma coisa de cima, porém simplificado
const {firstName: primeiroNome, lastName, age, hobbies} = person // Destructuring


console.log(primeiroNome) //Renomeação
console.log(lastName)
console.log(age)
console.log(hobbies)

 person.dog = 'Luck' //Adicionar Propriedades a um Objeto
console.log(person.dog)



const todos = [
    {
        id: 1,
        description: 'Estudar Programação',
        iscompleted: false
    },
    {
        id: 2,
        description: 'Estudar Inglês',
        iscompleted: true
    },
    {
        id: 3,
        description: 'Treinar',
        iscompleted: false
    }
]

const lastThingToDo = todos[2].description

console.log(lastThingToDo)



















