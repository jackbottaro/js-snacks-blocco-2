/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/
// 1 chiedo un numero
// 2 verifico se sia pari o dispari
// 3 stampo in console

// 1 chiedo numero
 const number = parseInt(prompt('Inserisci un numero').trim());

//  Controllo e stampo in console
 if(number % 2 === 0){
     console.log(number)
 } else {
     console.log(number + 1)
 }


//  VERSIONE while
while 