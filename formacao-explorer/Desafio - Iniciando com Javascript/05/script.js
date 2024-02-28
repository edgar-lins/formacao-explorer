/*
    Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
    Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem 
    "Não é um booleano"
*/

let value = true
console.log(typeof(value))

if (typeof(value) === "boolean") {
    alert("É um booleano!")
} else {
    alert("Não é um booleano!")
}
