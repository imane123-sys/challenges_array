// chalenge 1

// let nombre1 = parseInt(prompt("entrer entire 1"));
// let nombre2 = parseInt(prompt("entrer entire 2"));
// let nombre3 = parseInt(prompt("entrer entire 3"));
// let nombre4 = parseInt(prompt("entrer entire 4"));
// let nombre5 = parseInt(prompt("entrer entire 5"));


// let nombre_stockees = [nombre1,nombre2,nombre3,nombre4,nombre5];

// let nombres_reverses = nombre_stockees.reverse("");
// console.log(nombres_reverses);





// CHALENGE 2


// let tableau = [1,2,3,4,5,6,7,8,9,10];
// for ( let i=0 ;tableau.length; i++){
//    let somme = tableau.reduce((acc,curr)=> acc + curr ,0);
//    console.log(somme);
//    let moyenne = somme /tableau.length;
//    console.log(moyenne);

// }



// Challenge 3 : Recherche dans un tableau



// let nombre1 = parseInt(prompt("entrer entire 1"));
// let nombre2 = parseInt(prompt("entrer entire 2"));
// let nombre3 = parseInt(prompt("entrer entire 3"));
// let nombre4 = parseInt(prompt("entrer entire 4"));
// let nombre5 = parseInt(prompt("entrer entire 5"));
// let nombre6 = parseInt(prompt("entrer entire 6"));
// let nombre7 = parseInt(prompt("entrer entire 7"));
// let nombre8 = parseInt(prompt("entrer entire 8"));


// let nombres_tableau = [nombre1,nombre2,nombre3,nombre4,nombre5,nombre6,nombre7,nombre8];

// let membre_recherche =nombres_tableau.filter((nombre)=> nombre) 


// chalenge 3

let nombres = [];
for (let i = 0; i < 8; i++) {
  nombres.push(parseInt(prompt("Entrez l'entier " + (i + 1))));
}

let recherche = parseInt(prompt("Entrez le nombre à rechercher :"));
let index = nombres.indexOf(recherche);

if (index !== -1) {
  alert("Le nombre est présent à la position " + (index + 1));
} else {
  alert("Le nombre n'est pas présent dans le tableau.");
}






















