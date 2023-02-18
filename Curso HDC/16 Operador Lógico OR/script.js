 //Operador Lógico OR:
 
 //O Operador Lógico || é conhecido também com OR.
 //Ele retorna true caso uma das operaçoes retorne verdadeiro.
 //O OR retorna false apenas se as duas operações são falsas.


 let nome = 'João'
 let idade = 13

 if(nome == 'João' || idade >= 14) {
    console.log('Pode entrar na aula de esgrima')
 } else {
    console.log('Não pode entrar')
 }

 if((nome == 'Murilo' || 15 < 20) && 10 == 10) {
    console.log('Testando')
 } else {
    console.log('Não entrou')
 }
