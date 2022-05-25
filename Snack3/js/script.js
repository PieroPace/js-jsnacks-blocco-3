//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


// Ciclo While
let somma = 0;
let i = 0;

while (i < 5) {
    const number = parseInt(prompt('inserisci il ' + (i + 1) + '° numero:'));
    somma += number;
    i++;
}

console.log(somma);