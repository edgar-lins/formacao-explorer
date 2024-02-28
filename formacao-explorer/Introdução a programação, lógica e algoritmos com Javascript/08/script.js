/*
    Crie uma lista de pacientes

    Cada paciente deverá conter
        Nome
        Idade
        Peso
        Altura

    Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
    {
        name: "Edgar",
        age: 22,
        weight: 95,
        height: 186
    },
    {
        name: "Thais",
        age: 22,
        weight: 75,
        height: 177
    },
    {
        name: "Roberto",
        age: 30,
        weight: 98,
        height: 178
    },
    {
        name: "Bruno",
        age: 53,
        weight: 121,
        height: 173
    },
]

let patientsName = []

for (const patient of patients) {
    patientsName.push(patient.name)
    alert(`O paciente ${patient.name} tem ${patient.age} anos, ${patient.weight} Kgs e ${patient.height} de altura`)
}
