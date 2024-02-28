/*
    Bora praticar e rever tudo o que foi ensinado na aula? **💜**
    Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

    - [ ]  A soma dos dois números;
    - [ ]  A subtração dos dois números;
    - [ ]  A multiplicação dos dois números;
    - [ ]  A divisão dos dois números;
    - [ ]  O resto da divisão dos dois números;

    Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

    - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
    - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

const msg = alert('*** Vamos fazer uma calculadora! ***')
let n1 = prompt('Digite o primeiro número: ')
let n2 = prompt('Digite o primeiro número: ')

let sum = Number(n1) + Number(n2)
let sub = Number(n1) - Number(n2)
let multi = Number(n1) * Number(n2)
let div = Number(n1) / Number(n2)
let restDiv = Number(n1) % Number(n2)

let isPar = sum % 2


alert(`
    ${n1} + ${n2} = ${sum}
    ${n1} - ${n2} = ${sub}
    ${n1} * ${n2} = ${multi}
    ${n1} / ${n2} = ${div}
    ${n1} % ${n2} = ${restDiv}
`)

if (isPar == 0) {
    alert(`
        A soma de ${n1} com ${n2} da um número par!
    `)
} else {
    alert(`
        A soma de ${n1} com ${n2} da um número ímpar!
    `)
}

if (n1 == n2) {
    alert(`
        ${n1} e ${n2} são iguais!
    `)
} else {
    alert(`
        ${n1} e ${n2} não são diferentes!
    `) 
}