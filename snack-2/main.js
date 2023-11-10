'use strict';

// Chiedi all'utente la prima parola
const primaParola = prompt("Inserisci la prima parola:");

// Chiedi all'utente la seconda parola
const secondaParola = prompt("Inserisci la seconda parola:");

// Verifica la lunghezza delle parole
if (primaParola.length < secondaParola.length) {
    console.log("La parola più corta è: " + primaParola);
    console.log("La parola più lunga è: " + secondaParola);
} else if (primaParola.length > secondaParola.length) {
    console.log("La parola più corta è: " + secondaParola);
    console.log("La parola più lunga è: " + primaParola);
} else {
    console.log("Le parole hanno la stessa lunghezza.");
}
