/*
    Crie um script que declare uma variável e verifique se o seu valor é um número par. 
    Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem 
    "Não é um número par".
*/

const n1 = 5
const isPar = n1 % 2

if (isPar == 0) {
    alert(`${n1} é um número par!`)
} else {
    alert(`${n1} é um número ímpar!`)
}