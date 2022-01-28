/*
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

// Creo Array
const number = [11, 22, 130, 90, 3, 8, 12, 77]

// Dichiaro variabile di appoggio
let sum = 0;

// creo ciclo per fare la somma dei numeri dispari
for(let i = 0; i < number.length; i = i +2){
    if(i % 2 === 0){
        
    } else {
        sum += number[i]
    }

}

console.log(sum)

// Creo ciclo con while

let sum = 0;
let i = 0;

while(i < number.length){
    if(i % 2 === 0){
        
    } else {
        sum += number[i]
    }
    i++
}


console.log(sum)
