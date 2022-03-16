//=================les insstances se sont ceux qui heritent des classes avec la methode constructeur ==============
//================Une classe est un plan général qui va servir à créer des objets similaires


// TOUS ceci est un constructeur
    class episode2 {
    constructor(title, duration, hasBeenWatched){
        this.title = title ;
        this.duration = duration ;
        this.hasBeenWatched = hasBeenWatched ;
    }
    }

// ==================================
// créer des instances par le mot clé   new
let ep1 = new episode2 ("Les miserables", 0 , true) ;
let ep2 = new episode2 ("Les cons", 1 , false) ;
let ep3 = new episode2 ("Marie", 2 , false) ;

//====================================
// ARRAY
let Episode = [ep1, ep2, ep3];

//=======================================
document.querySelector('#indexInstance').innerText = `Nouveau episodes : 
${ep2.title} (${ep2.hasBeenWatched ? "OUI" : "NON"}) , ${ep3.title} (${ep3.hasBeenWatched ? "OUI" : "NON"})`;

//${episode[1].title};
// let longueur  = episode.length;

// Ajouter un element dans le tableau
let ep4;
Episode.push(ep4 = new episode2 ("nirihintso", 3 , true));
document.querySelector('#h2').innerText = `${Episode[3].duration}`;
