let tableau = new Array ('lun','Mar', 'Mer')

console.log (tableau)
console.log(tableau.length) // 3
let mois =['janv', 'fev', 'mars', 'avril']
console.log(mois.toString()) // Janv, fev, mar,Avril
console.log(mois.join(" - "))  // janv - fev - mars - avril
console.log(typeof tableau) // object
console.log(typeof mois) // object

/******************* */
/* COPIE DE TABLEAUX */
/******************* */


let jours = ['lundi', 'mardi', 'mercredi']
let days = jours
days[0] = 'Monday'
console.log(jours) // Monday, mardi, mercredi
console.log(days) // Monday, mardi, mercredi
// => les tableaux jours et days font référence au même tableau en mémoire et une modification de l'un entraine la modification de l'autre

// Pour réaliser une copie dissociée des tableaux il est nécessaire de parcourir les éléments du tableau source un à un et de les copier dans le nouveau tableau

let couleurs = ['bleu', 'rouge', 'vert']
let colors = []
for (let i = 0; i < couleurs.length; i++) {
    colors[i] = jours[i]
}
colors[0] = 'blue'
console.log(couleurs) // bleu, rouge, vert
console.log(colors) // blue, rouge, vert

// => avec ce mode de copie, une action sur le tableau colors n'a aucun impact sur le tableau couleurs. 


/******************* */
/* TABLEAUX SPÉCIAUX */
/******************* */

// Tableaux associatifs
let monnaies = []
monnaies['EUR'] = 'Euro'
monnaies['USD'] = 'Dollar américain'
monnaies['BTC'] = 'Bitcoin'
console.table(monnaies) // Affiche le tableau dans la console

// On peut le parcourir avec une boucle FOR...IN
for( var code in monnaies) {
    console.log( code + " : " + monnaies[code]) // Affiche EUR: Euro USD : dollar américain BTC : bitcoin
}

/***************************** */
/* TABLEAUX MULTIDIMENTIONNELS */
/***************************** */

let serveurs = [];
serveurs['Pierre'] = [24, 5, 804.50];
serveurs['Paul'] = [37, 3, 432.65];
serveurs['Jacques'] = [43, 2, 212.57];
console.table(serveurs) // Donne un tableau 


/******************* */
/* TABLEAUX D'OBJETS */
/******************* */

let clients = [
    {nom: 'Pierre', age: 37, nb:4, ca:807.50},
    {nom: 'Paul', age: 22, nb:3, ca:107.50},
    {nom: 'Jean', age: 45, nb:5, ca:502.50}
]
console.log(clients[2]) // nom: Jean, age: 45, nb:5, ca:502.50


/*************************** */
/* MÉTHODES DE L'OBEJT ARRAY */
/*************************** */

// concat() 
// =>  Retourne un nouveau tableau consituté de la fusion entre le tableau sur lequel elle s'applique et les tableaux passés en paramètre
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3); // Array ["a", "b", "c", "d", "e", "f"]

// every() 
// => teste si l'ensemnle des éléments du tableau sur lequel elle s'applique vérifie la condition testée par la fonction testée en argument

const sontInferieursA40 = (valeur) => valeur < 40; // vérifie que tous les nombres sont inférieurs à 40
const array4 = [1, 30, 39, 29, 10, 13];
console.log(array4.every(sontInferieursA40)); //  true


// filter()
// => crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tableauFiltre = array.filter( valeur => valeur > 5) // tu me retournes un nouveau tableau avec toutes les valeurs supérieures à 5
console.log(tableauFiltre) // retourne [6, 7, 8, 9]

const data = [
    {name: "Paul", age: 31},
    {name: "Jean", age: 22},
    {name: "Claude", age: 23},
    {name: "Luc", age: 56},
]

const ageFiltre = data.filter( objet => objet.age > 30); // "objet" es un nom donné au pif 
console.log(ageFiltre) // nous retourne un nouveau tableau avec les objets qui correspondent à la condition (ici Luc et Paul)

data.filter(obj => obj.age > 30).forEach(person => console.log(person.name, " a plus de 30 ans")) // Paul a plus de 30 ans, Luc à plus de 30 ans


// forEach() 
// => permet d'exécuter uen fonction donnée sur chaque éléménrt d'un tableau
const array6 = ['a', 'b', 'c'];
array6.forEach(element => console.log(element)); // a b c 

// includes()
// => retourne true si le paramètre est présent dans le tableau
console.log(array6.includes('a')) // true, car "a" est bien présent dans le tableau array6

// indexOf() 
// => renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
// Start from index 2
console.log(beasts.indexOf('bison', 2)); // 4
console.log(beasts.indexOf('giraffe')); // -1

// lastIndexOf() 
// =>permet de renvoyer le dernier indice pour lequel une valeur donnée est présente dans un tableau. Si la valeur recherchée n'est pas présente, le résultat sera -1
const animaux = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animaux.lastIndexOf('Dodo')); // 3
console.log(animaux.lastIndexOf('Tiger')); // 1

// join()
// +> retourne une chaîne de caractères composée des éléments du tableau rassemblés par un séparateur passée en paramètre
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // "FireAirWater"
console.log(elements.join('-')); // "Fire-Air-Water"

// map()
// => retourne un nouveau tableau composé des élements du tableau initial auxquels une fonction est appliquée
const array7 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array7.map(x => x * 2); // on multiplie tgous les nombres par 2
console.log(map1); //Array [2, 8, 18, 32]
let elementsEnMajuscule = elements.map(m => m.toUpperCase());
console.log(elementsEnMajuscule.toString()) // FIRE, AIR, WATER


// pop() 
// => supprime le dernier élément d'un tableau
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // Expected output: "tomato"
console.log(plants); // Array ["broccoli", "cauliflower", "cabbage", "kale"]


// shift()
// => proche de pop(), supprimer le premier élément d'un tableau initial
const array8 = [1, 2, 3];
const firstElement = array8.shift();
console.log(array8); // Array [2, 3]
console.log(firstElement); // 1


// push() 
// => ajoute un ou plusieurs éléments à la fin du tableau et retourne la nouvelle taillle du tableau

const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count); // 4
console.log(animals); // Array ["pigs", "goats", "sheep", "cows"]
animals.push('chickens', 'cats', 'dogs');
console.log(animals); // Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


// reverse() 
// => inverse l'ordre des éléments du tableau initial
console.log(animals.reverse()); // ['dogs', 'cats', 'chickens', 'cows', 'sheep', 'goats', 'pigs']


// slice()
// => retourne un nouveau tableau composé de l'extrait du tableau initial entre l'indice de début inclus et l'indice de fin exclu
const animals2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals2.slice(2)); // Array ["camel", "duck", "elephant"]
console.log(animals2.slice(2, 4)); // Array ["camel", "duck"]
console.log(animals2.slice(1, 5)); // Array ["bison", "camel", "duck", "elephant"]
console.log(animals2.slice(-2)); // Array ["duck", "elephant"]
console.log(animals2.slice(2, -1)); // Array ["camel", "duck"]
console.log(animals2.slice()); // Array ["ant", "bison", "camel", "duck", "elephant"]


// sort()
// => tri le tableau par ordre croissant ou par ordre alphabétique
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // Array ["Dec", "Feb", "Jan", "March"]
const array9 = [1, 30, 4, 21, 100000];
array9.sort();
console.log(array1); //Array [1, 100000, 21, 30, 4]


// splice()
// => modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau
const months2 = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // Inserts at index 1
console.log(months2); // Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May'); // Replaces 1 element at index 4
console.log(months2); //Array ["Jan", "Feb", "March", "April", "May"]


/**************************** */
/* FONCTIONNALITÉS MANQUANTES */
/**************************** */


// Mélanger un tableau
function shuffle(months2) {
    months2.sort(function(a,b) {
        return Math.random() - Math.random();
    })
}
console.log(months2.toString()) // March,Jan,April,June
shuffle(months2) //Array ["March", "Jan", "April", "June"] 


// Extraire des éléments au hasard 
function arrayRand(tableau, nb=1) {
    /* Création du tableau temporaire de travail */
    var tmp=[];
    tableau.forEach(function(e) {
        tmp.push(e);
    });
    /* Mélange */
    shuffle(tmp);
    /* Retour du 1er élément ou d'une tranche */
    if (nb==1) { 
        return tmp[0];      
    } else {
        return tmp.slice(0, nb);
    }
}
var mois3=["Jan","Fév","Mar","Avr","Mai","Jui","Jul","Aou","Sep","Oct","Nov","Déc"];
console.log(arrayRand(mois3)); // Jul
console.log(arrayRand(mois3,3).toString()); // Aou, Nov, Janv


  // Dédoublonner un tableau
function arrayUnique(tableau) {
    var tmp=[];
    tableau.forEach(function(e) {
        if (tmp.indexOf(e)==-1) { /* Si e n'est pas dans tmp */
        tmp.push(e);
    }
});
    return tmp;
}
var doublons=["Jean", "Gérard", "Pierre", "Paul", "Jean", "Paul", "Jacques"];
console.log(doublons.toString()); // Jean,Gérard,Pierre,Paul,Jean,Paul,Jacques
console.log(arrayUnique(doublons).toString()); // Jean,Gérard,Pierre,Paul,Jacques


/******************* */
/* Les ensembles SET */
/******************* */


// L'objet set()
// => Définit un ensemble d'éléments uniques interdisant tout doublon. Attend en paramètre un tableau

const dias = new Set( ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'] );
console.log(dias) // Set(7) {'Lun', 'Mar', 'Mer', ...}
console.log(typeof dias) // Objet


// add() ajoute un élément à un ensemble seulement si l'élément n'est pas déjà inclus dans l'ensemble
const mesChiffres = new Set();
mesChiffres.add(1)  // Set(1) { 1 }
mesChiffres.add(5) // Set(2) { 1, 5 }

// delete() supprime l'élément de l'ensemble
mesChiffres.delete(5) // Set(1) { 1 }

// clear() supprime tous les éléments de l'ensemble

// has() retourne true si l'élément est présent dans l'ensemble
console.log(mesChiffres.has(1)); // true

// foreach() parcourt les éléments un par un et leur applique un traitement défini par la fonction passée en paramètre 
let bee = new Set(['Noire', 'Buckfast', 'Caucasica']);
console.log(bee) // Set(3) {'Noire', 'Buckfast', 'Caucasica'}

let i = 0;
for (var element of bee) {
    i++
    console.log('Element '+i+' '+element) // Element 1 Noire Element 2 Buckfast Element 3 Caucasica
} // -> la boucle for...of ne fonctionne pas avec IE, le faire avec la boucle forEach(). 

bee.forEach(function(element) {
    console.log(element)
}) // Noire, Buckfast, Caucasica 

