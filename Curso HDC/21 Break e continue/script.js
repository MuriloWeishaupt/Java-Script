//Break e Continue:

//Com Break podemos encerrar uma instrução
//Com o continue podemos pular uma instrução
//Utilizados na maioria das vezes em loops


for(let i = 0; i < 10;i++ ) {
   console.log(i)

   if(i === 5) {
      break
   }
}
console.log('Deu o Break')


let x = 0

while(x < 100) {
   x += 10

   if(x === 60) {
      console.log('CONTINUE')
      continue


   }
   console.log('Testando continue')
}
