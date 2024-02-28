/*
    Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
    Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem 
    "Não é um número ímpar".
*/

const n1 = 6
const isPar = n1 % 2

if (isPar != 0) {
    alert(`${n1} é um número ímpar!`)
} else {
    alert(`${n1} é um número par!`)
}