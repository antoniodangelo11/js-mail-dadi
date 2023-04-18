/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

const player = Math.floor(Math.random () * 6) + 1;
console.log('Player', player);

const computer = Math.floor(Math.random () * 6) + 1;
console.log('Computer', computer);

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
