'use strict';

let numeri = [];

const calcoloSomma = function () {
    let somma = 0;
    for (let i = 0; i < numeri.length; i++) {
        somma += numeri[i];
    }
    return somma;
};

while (calcoloSomma() < 50) {
    let numeroInserito = parseFloat(prompt("Inserisci un numero:"));

    // Validazione dell'input
    if (!isNaN(numeroInserito)) {
        numeri.push(numeroInserito);
    } else {
        alert("Input non valido. Inserisci un numero valido.");
    }
}

console.log("Numeri inseriti:", numeri);
console.log("Somma dei numeri:", calcoloSomma());