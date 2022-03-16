const cardDuText = 'Nya';
const dureeDuFilm = "Infini" ;
const DejeVu = true ;

document.querySelector('#lol').innerText =  `Title : ${cardDuText}
Duree : ${dureeDuFilm} min

${DejeVu ?'Oui, j\'ai deja vu' : 'Non'}`

// let number = 5; 
// let copy = number;
// console.log(copy);

// number = 10;

// console.log(copy);

let ep = {
    title : "teste",
    duration : 45,
    hasBeenWatched : true,
}
//ep ici est un object
//cle ce sont les  : title, duration, hasBeenWatched
let exemple = ep.title ; //cette variable contient mtn le "teste"
let exmple2 = ep["duration"]; //ceci contient la cle duration dans l'object`


