/*
    3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
*/

let value = 1
console.log(typeof(value))

if (typeof(value) === "number") {
    alert("É um número!")
} else {
    alert("Não é um número!")
}
