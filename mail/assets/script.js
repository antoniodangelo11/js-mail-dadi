/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// Chiedere la email all'utente
const userEmail = prompt("Inserisci la tua email");

// Controllo della lista per accesso (Arrey)
const subscribers = [
    'Rudolf@live.it',
    'Christian@live.it',
    'Alfonso@live.it',
    'Federico@live.it',
    'Alberto@live.it',
    'Massimo@live.it',
    'Pietro@live.it',
];

// Variabile per selezionare la mail nell'indice e di default è false
let flag = 0;

// Esito del controllo (con ciclo for)

/*RIPETI finchè è vero che i < subscribers.length
    SE userEmail == subscribers[i]
        stampo che ho trovato la mail 
    FINE SE
        incrementare i
    FINE CICLO
*/

for (let i = 0; i < subscribers.length; i++) {
    console.log(subscribers[i]);
    if (userEmail === subscribers[i]) {
        // Qui usiamo la variabile flag che modifica il valore in true
        flag = 1;
    }
}

if (flag) { // Variabile flag modificata all'interno del ciclo (true). c'è nell'array
    console.log(`L'email è valida`);
    alert (`L'email è valida`);
} else { // Variabile non modificata (false). non c'è nell'array
    console.log(`L'email non è valida`);
    alert (`L'email non è valida`);
}

