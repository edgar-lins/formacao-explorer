/*
    Dada uma lista de pacientes, descubra o IMC de cada paciente e 
    imprima

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente

    Crie uma função para fazer o cálculo de IMC
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

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

const printIMC = (patient) => {
    return `
        Paciente ${patient.name} possui o IMC de
        ${IMC(patient.weight, patient.height)}
    `
}

for (const patient of patients) {
    let message = calculatePatientIMC(patient)
    alert(message)
}
