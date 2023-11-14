'use strict';

let N;
do {
    N = Number(prompt("Inserisci un numero (N):"));
} while (isNaN(N) || N <= 0);
for (let i = 0; i < N; i++) {
    let arrayCasuale = [];
    for (let j = 0; j < 10; j++) {
        let numeroCasuale = Math.floor(Math.random() * 100) + 1;
        arrayCasuale.push(numeroCasuale);
    }
    alert("Array " + (i + 1) + ": " + arrayCasuale.toString());
}

