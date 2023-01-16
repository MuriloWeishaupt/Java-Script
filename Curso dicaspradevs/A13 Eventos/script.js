const submitButton = document.querySelector('#submit-button')
const inputName = document.querySelector('#txtname')
const inputEmail = document.querySelector('#txtem')
const form = document.querySelector('#myForm')
const body = document.querySelector('#body')

submitButton.addEventListener('click', function (e) {
    e.preventDefault()

    const nameValue = inputName.value
    const emailValue = inputEmail.value

    if(nameValue === '' || emailValue === '') {
        return alert('Please fill out all the fiels!')
    }

    body.style.background = 'darkgreen'
    submitButton.style.background = 'gray'

    
})



// const submitButton = document.querySelector('#submit-button')
// const  imputName = document.querySelector('#txtname')
// const imputEmail = document.querySelector('#txtem')
// const form = document.querySelector('#myForm')
// const items = document.querySelector('.items')
// const body = document.querySelector('#body')

// submitButton.addEventListener('click', function (e) {
//     e.preventDefault() //irá impedir o comportamento padrão da função solicitada

//    const nameValue = imputName.value //Pega o valor do input selecionado(nameImput)
//    console.log(nameValue)
//    const emailValue = imputEmail.value 

//    if(nameValue === '' || emailValue === '') {
//     return alert('Please, fill out all the fields!')
//    }
//    form.style.background = 'red'

//    items.firstElementChild.textContent = nameValue
//    items.children[1].textContent = emailValue

//    body.style.background = 'darkblue'


// })

// //  nameImput.addEventListener('change', function(e) {
// // //     console.log(e.target.value) //Acessar o valor de um imput quando nos escutamos por uma mudança diretamente nele
// // })





