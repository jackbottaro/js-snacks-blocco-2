/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

// versione for

let sum = 0;

for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('Inserisci un numero'))
    sum += userNumber;
}

console.log(sum)

// versione while

let sum = 0;
let i = 0;

while(i < 5){
    let userNumber = parseInt(prompt('Inserisci un numero'))
    sum += userNumber;
    i++
}

console.log(sum)

// versione do while
let sum = 0;
let i = 0;
do{
    let userNumber = parseInt(prompt('Inserisci un numero'))
    sum += userNumber;
    i++
} while (i < 5)
console.log(sum)