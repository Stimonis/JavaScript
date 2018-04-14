
//Variables
let mot =(prompt("Encodez un mot pour avoir des informations sur lui:"));
	let motReverse = mot;
	let longueurMot = mot.length;
	let minuscules = mot.toLowerCase();
	let majuscules = mot.toUpperCase();
	let nbrVoyelles = 0;
//=========

//Nombre de Voyelles
for (i = 0; i < mot.length; i++) {
	switch(mot.charAt(i)) {
		case 'a':
			nbrVoyelles++
			break;
		case 'e':
			nbrVoyelles++
			break;
		case 'i':
			nbrVoyelles++
			break;
		case 'o':
			nbrVoyelles++
			break;
		case 'u':
			nbrVoyelles++
			break;
		case 'y':
			nbrVoyelles++
			break;
	}
}


let nbrConsonnes = mot.length - nbrVoyelles; //Nombres de consonnes
//==================

// Mot Inversé
motReverse = motReverse.split("");
motReverse = motReverse.reverse();
motReverse = motReverse.join("");

//==================

//Affichage Console

console.log("Le mot " + mot + " contient " + longueurMot + " caractère(s)");
console.log("Il s'écrit en minuscules " + minuscules);
console.log("Il s'écrit en majuscules " + majuscules);
console.log("Il contient " + nbrVoyelles + " voyelles et " + nbrConsonnes + " consonne(s)" );
console.log(" Le mot "+ mot + " inversé se lit " + motReverse);

//==================

// Palindrome ou pas
if (mot == motReverse) {
	console.log("Ceci est un palindrome")
} else {
	console.log("Ceci n'est pas un palindrome")
}
//==================

//Leet speak

let trouverLettreLeet = function() {

while (i < mot) {
	switch (mot.charAt(i)) {
		case 'a' :
			return mot[i] = 4
			i ++
			break;
		case 'b' :
			return mot[i] = 8
			i ++
			break;
		case 'e' :
			return mot[i] = 3
			i ++
			break;
		case 'l' :
			return mot[i] = 1
			i++
			break;
		case 'o' :
			return mot[i] = 0
			i++
			break;
		case 's' :
			return mot[s] = 5
			i++
			break;
		default	
		}
	}
}

console.log(trouverLettreLeet());
