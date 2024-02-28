/* 
    Caputrar 2 números 
    e fazer as operações matemáticas
    de soma, subtração, multiplicação, 
    divisão e resto da divisão!
*/

alert("Vamos fazer uma calculadora!")
let numberOne = prompt("Digite o primeiro número: ")
let numbertwo = prompt("Digite o segundo número: ")

const sum = Number(numberOne) + Number(numbertwo)
const sub = Number(numberOne) - Number(numbertwo)
const multi = Number(numberOne) * Number(numbertwo)
const div = Number(numberOne) / Number(numbertwo)
const divRest = Number(numberOne) % Number(numbertwo)

alert(`
    ${numberOne} + ${numbertwo} = ${sum}
    ${numberOne} - ${numbertwo} = ${sub}
    ${numberOne} * ${numbertwo} = ${multi}
    ${numberOne} / ${numbertwo} = ${div}
    ${numberOne} % ${numbertwo} = ${divRest}
`)
