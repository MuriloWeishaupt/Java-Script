//Classes: São impressoras de objetos

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }
   getfullName() {
    console.log(`${this.firstName} ${this.lastName}`)
   }

   static speak() {
    console.log('Hello, World')
   }
}
const person = new Person ('Murilo', 'Weishaupt')
person.getfullName()
Person.speak()


//Heranças:Herdar determinada classe em uma nova classe


class Animal {
    constructor(name) {
        this.name = name 
    }

    speak() {
        console.log(`${this.name} made some noise!`)
    }
  
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    speak() {
        console.log(`${this.name} Barked!`)
    }
}

const animal = new Animal('Simba')
const dog = new Dog('Luck')
animal.speak()
dog.speak()



