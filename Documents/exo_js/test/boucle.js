// const tableau = [
//     "anne",
//     "marie",
//     "lucia",
//     "lol"
// ]

// //====================================
// //=============A BOUCLE for....in======
// const abc = document.getElementById("boucle");
// for (let i in tableau){
//     abc.innerText = `J'utilise le boucle for...in : ${tableau[i]}`;

// }


// //============================================
// //============ le tableau a plusieurs objets===
// const passengers = [
//     {
//     name: "Will Alexander",
//     ticketNumber: 209542
//     },
    
//     {
//     name: "Sarah Kate",
//     ticketNumber: 169336
//     },
    
//     {
//     name: "Audrey Simon",
//     ticketNumber: 779042
//     },
    
//     {
//     name: "Tao Perkington",
//     ticketNumber: 703911
//     }
//     ]

//     for (let passenger of passengers) {
//         console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
//      }

let guestsSeated = 5;

// let seatsRemaining = 10;
let guestsRemaining = 7;

while (guestsRemaining > 0) {
    // console.log("guestsSeated: " + guestsSeated);
    guestsSeated++;

    // console.log("seatsRemaining: " + seatsRemaining);
    // seatsRemaining--;

    console.log('guestsRemaining: ' + guestsRemaining);
    guestsRemaining--;
}

console.log(guestsSeated);