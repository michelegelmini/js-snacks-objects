'use strict'

const people = [
    { nome: 'Tizio', cognome: 'Caio', eta: 20, },
    { nome: 'Pippo', cognome: 'pluto', eta: 15, },
    { nome: 'Martino', cognome: 'Sogliacchi', eta: 15, },
    { nome: 'Morgan', cognome: 'Freeman', eta: 67, },
    { nome: 'Lorenzo', cognome: 'Beschi', eta: 48, },
    { nome: 'Mariano', cognome: 'Cremonesi', eta: 18, },
    { nome: 'Claudia', cognome: 'Vernazzi', eta: 92, }
]

console.log(people)

const infoPeople = []

for (let i = 0; i < people.length; i++) {
    let person = people[i];
    infoPeople.push(person);
}

for (let i = 0; i < infoPeople.length; i++) {
    let currentPerson = infoPeople[i];

    if (currentPerson.eta < 18 || currentPerson.eta > 90) {
        currentPerson.info = `${currentPerson.nome} ${currentPerson.cognome} NON può guidare`
    } else {
        currentPerson.info = `${currentPerson.nome} ${currentPerson.cognome} può guidare`
    }
}

console.log(infoPeople);

