function affichageDeuxValeurs(valeurs1, valeurs2){
    console.log(`Valeur : ${valeurs1}`);
    console.log(`Valeur : ${valeurs2}`);
}

affichageDeuxValeurs("Hey!" , "Salut!");

var factorielle = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };

console.log(factorielle(3));