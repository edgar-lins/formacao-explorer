/*  
    **Jogo Da Advinhação**

    Apresente a mesnagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório
    e verificar se o número digitado é o mesmo que o aleatório gerado
    pelo sistema.

    Enquanto o usuário não advinhar o número, mostrar a mensagem:
    "Erro, tente novamente!"

    Caso o usuário acerte o número, apresenta a mensagem:
    "Parabéns! Você advinhou o número em x tentativaas"

    Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let attempts = 1

while (Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente")
    attempts++
}

if (attempts > 1) {
    alert(`Parabéns! Você advinhou o número em ${attempts} tentativas`)
} else {
    alert(`Parabéns! Você advinhou o número em ${attempts} tentativa`)
}
