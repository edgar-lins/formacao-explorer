/*
    Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

Depois de criada a lista:

    - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
    - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const studants = [
    {
        name: "Edgar",
        n1: 8.5,
        n2: 7.6
    },
    {
        name: "Thais",
        n1: 7.4,
        n2: 9.2
    },
    {
        name: "Thiago",
        n1: 5.3,
        n2: 5.8
    },
    {
        name: "Bruna",
        n1: 9.4,
        n2: 8.6
    },
    {
        name: "Jose",
        n1: 4.5,
        n2: 5.2
    },
]

const checkAverage = (n1, n2) => {
    const average = (n1 + n2) / 2
    return average
}


for (const studant of studants) {
    if (checkAverage(studant.n1, studant.n2) >= 7) {
        alert(`
           A média do(a) aluno(a) ${studant.name} é: ${checkAverage(studant.n1, studant.n2)}
               Parabéns, ${studant.name}! Você foi aprovado(a) no concurso!
           `)
    } else {
        alert(`
        A média do(a) aluno(a) ${studant.name} é: ${checkAverage(studant.n1, studant.n2)}
            Não foi dessa vez, ${studant.name}! Tente novamente!
        `)
    }
}

