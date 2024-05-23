'use strict'

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'lupo', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'coccodrillo', famiglia: 'crocodylidae', classe: 'reptilia' },
    { nome: 'delfino', famiglia: 'platanistidae', classe: 'mammiferi' },
    { nome: 'bisonte', famiglia: 'bovidae', classe: 'mammiferi' },
]

const mammals = []

for (let i = 0; i < animals.length; i++) {
    let currentAnimal = animals[i];

    if (currentAnimal.classe === 'mammiferi') {
        mammals.push(currentAnimal)
    }

}

console.log(mammals)