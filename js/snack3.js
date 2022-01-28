/*Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati
*/

// Creo array

const fakeNames = [];
const firstNames = ['Luca', 'Paolo', 'Marco', 'Antonio'];
const lastNames = ['Rossi', 'Signorini', 'Letta', ]

// creo ciclo for



for(let i = 0; i <= firstNames.length; i++){
    // Creo un random number in base alla lunghezza degli array
    const randNum1 = Math.floor(Math.random() * firstNames.length);
    const randNum2 = Math.floor(Math.random() * lastNames.length);

    // Associo il numero casuale alla posizione del index negli array
    const fakeName = firstNames[randNum1];
    const fakeSurname = lastNames[randNum2];

    // Creo Falso nome

    const fakeID = `${fakeName} ${fakeSurname}`

    // Aggiungo Nomi otteni al Array

    fakeNames.push(fakeID)

    
}

console.log(fakeNames)

// Faccio con ciclo while

let j = 0;
while(j <= firstNames.length){
    // Creo un random number in base alla lunghezza degli array
    const randNum1 = Math.floor(Math.random() * firstNames.length);
    const randNum2 = Math.floor(Math.random() * lastNames.length);

    // Associo il numero casuale alla posizione del index negli array
    const fakeName = firstNames[randNum1];
    const fakeSurname = lastNames[randNum2];

    // Creo Falso nome

    const fakeID = `${fakeName} ${fakeSurname}`

    // Aggiungo Nomi otteni al Array

    fakeNames.push(fakeID)

    j++;
}

console.log(fakeNames)