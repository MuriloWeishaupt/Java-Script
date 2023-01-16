const inputName = document.querySelector('#txtname')
const inputEmail = document.querySelector('#txtem')
const submitButton = document.querySelector('#submit-button')

const errorMessage = document.querySelector('.msg')

const items = document.querySelector('.items')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

   const nameValue = inputName.value
   const emailValue = inputEmail.value 

   if(nameValue === '' || emailValue === '') {
    errorMessage.textContent = 'Please, fill out the Fields!'
    errorMessage.classList = 'error' //Caso um dos campos nao esteja preenchido irá aparecer uma mensagem de erro com estilo de uma classe do CSS

    setTimeout(() => {
        errorMessage.textContent = ''
    }, 3000); //Caso o usuário não digite em um dos campos, a mensagem de erro irá  aparecer, e depois de 3 segundos irá desaparecer para melhor experieência.
    return
   }

    const li = document.createElement('li')
    li.classList = 'item'
    li.innerHTML = `Nome: ${nameValue} <br /> Email: ${emailValue}`

    items.appendChild(li)

   inputName.value = ''
   inputEmail.value = ''
})





