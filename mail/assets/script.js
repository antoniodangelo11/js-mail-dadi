/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// Chiedere la email all'utente
const userEmail = prompt("Inserisci la tua email");

// Controllo della lista per accesso
const subscribers = [
    'Rudolf@live.it',
    'Christian@live.it',
    'Alfonso@live.it',
    'Federico@live.it',
    'Alberto@live.it',
    'Massimo@live.it',
    'Pietro@live.it',
];
console.log(subscribers);

let flag = 0

// Esito del controllo

for (let i = 0; i < subscribers.length; i++) {

    if (userEmail == subscribers[i]) {
        console.log(`L'email è valida`);
        alert (`L'email è valida`);
        flag = 1
    }
}

if (flag === 0) {
    // non c'è nell'array
    console.log(`L'email non è valida`);
    alert ('Email non valida');
}

