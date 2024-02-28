/*
    Solicitar o nome do aluno e as 3 notas
    do bimestre para calcular a média dele.

    Se o aluno passou no bimestre, dar os 
    parabéns.

    Se o aluno não passou no bimestre, 
    motivar o aluno a dar seu melhor na prova
    de recuperação.

    Em ambos os casos, mostre uma menasgem com 
    o nome do aluno e a nota.
*/
alert('Vamos calcular a média de um aluno')
const student = prompt("Qual o seu nome? ")

let p1 = prompt('Qual foi a nota da primeira prova? ')
let p2 = prompt('Qual foi a nota da segunda prova? ')
let p3 = prompt('Qual foi a nota da terceira prova? ')

let average = ((Number(p1) + Number(p2) + Number(p3)) / 3)

let approved = average >= 6

average = average.toFixed(1)

if (approved) {
    alert(`Parabéns, ${student}! Sua média final foi de ${average}. Boas férias!`)
} else {
    alert(`Sinto muito, ${student}! Sua média final é ${average}. Dê o seu melhor na prova de recuperação.`)
}