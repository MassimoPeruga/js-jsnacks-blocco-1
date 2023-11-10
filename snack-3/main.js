'use strict';

// Dichiaro una variabile somma
let somma = 0;

for (let i = 0; i < 10; i++) {
    // Chiedo all'utente un numero
    let numeroInserito = Number(prompt("Inserisci il numero " + (i + 1) + ":"));

    // Verifico se l'input è valido
    if (!isNaN(numeroInserito)) {
        console.log("Numero " + (i + 1) + ": " + numeroInserito);
        somma += numeroInserito; // Aggiungi il numero alla somma
    } else {
        console.log("Input non valido. Inserisci un numero valido.");
        i--; // Decrementa l'indice per ripetere la richiesta
    }
}

console.log("Somma totale: " + somma);
