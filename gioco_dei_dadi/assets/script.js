/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// Generare il primo numero e metterlo nella variabile player
const player = Math.floor(Math.random () * 6) + 1;
console.log('Player', player);

// Generare il secondo numero e metterlo nella variabile computer
const computer = Math.floor(Math.random () * 6) + 1;
console.log('Computer', computer);

/*SE player > computer
        ha vinto il player
    ALTRIMENTI player < computer
        ha vinto il computer
    ALTRIMENTI
        pareggio
    FINE SE*/

if (player > computer) {
    console.log('Il player ha vinto');
}

else if (player < computer) {
    console.log('Il player ha perso');
}

else { 
    (player == computer)
    console.log('Pareggio');
}
