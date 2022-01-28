/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

// Creo due array

const numberOne = [1, 22, 6, 9, 24, 3, 8]
const numberTwo = [8, 44, 15]

console.log(`Qui hanno lungezza diversa: Array 1: ${numberOne}  Array 2: ${numberTwo}`)

//  Calcolo la differenza
if (numberOne.length > numberTwo.length ) {
    console.log('Array 1 più piccolo');
    do {
        let num = Math.floor(Math.random() * 100 );
        numberTwo.push(num);
    } while (numberTwo.length < numberOne.length); 
    
    
    } else if ( numberTwo.length > numberOne.length ) {
    console.log('Array 2 più piccolo');
    do {
        let num = Math.floor(Math.random() * 100 );
        numberOne.push(num);
    } while (numberOne.length < numberTwo.length);
    
    
    } else {
    console.log('Array 1 e 2 sono uguali');
    }



    console.log(`Qui hanno lungezza uguale: Array 1: ${numberOne}  Array 2: ${numberTwo}`)