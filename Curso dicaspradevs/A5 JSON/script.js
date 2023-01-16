
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

//Converter um elementos para JSON para mandá-los para um servidor.

const todosJSON = JSON.stringify(todos) //Deixa de ser uma lista.
console.log(todosJSON)


//Converter JSON para elementos quando te enviam de um servidor.

const todosElem = JSON.parse(todosJSON) //Passa a ser uma lista.
console.log(todosElem)

//Não se consegue mandar dados JS para um servidor, por isso deve convertê-los com 'JSON.stringfy()'.

//Usar 'JSON.parse()' para transformar JSON em dados JS paraa poder manipulá-los.





















