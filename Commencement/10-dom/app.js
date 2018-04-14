// ex 1

let transformBody = document.querySelector("body");

transformBody.classList.remove("bg-aqua");   // pour faire un remove et add en même temps
                                             // document.body.className = "bg-olive"
transformBody.classList.add("bg-olive");

let premPara = document.getElementById("first-paragraph");

premPara.classList.remove("bg-lime", "gray");

premPara.classList.add("aqua");

let classSilver = document.getElementsByClassName("bg-silver");
// console.log(classSilver);

for (let i=0; i<classSilver.length; i++) {
  classSilver[i].classList.add("bg-teal");
  classSilver[i].classList.remove("bg-silver");
}

let block = document.getElementsByTagName("blockquote");
for (let i=0; i<block.length; i++) {
  block[i].classList.add("bg-white");
}

// ex 2

let tabble = document.querySelector("#my-table");  // pas oublier # car id.
tabble.classList.add("bg-purple");

selecTout = document.querySelectorAll(".container > p");   // comme dans le CSS prendre les p du container
for (let i=0; i<selecTout.length; i++) {
  selecTout[i].classList.add("shadow");
}

// ex 3

elemPre = document.getElementsByTagName("pre");
for (let i=0; i<elemPre.length; i++) {
  elemPre[i].style.color = "yellow";
  elemPre[i].style.backgroundColor = "orange";
  elemPre[i].style["border-top"] = "3px solid red";    // [] car il y a un -
  elemPre[i].style["border-bottom"] = "3px solid red";
}

premH3 = document.getElementsByTagName("h3")[0];
premH3.innerHTML = "<em>Itelic title ! yeah !</em>";

premH2 = document.getElementsByTagName("h2")[0];
premH2.innerHTML = "<strong>HTML doens't work !</strong>";

// ex 4

let premUl = document.getElementsByTagName("ul")[0];
let ajoutLi = document.createElement("li");
ajoutLi.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
premUl.appendChild(ajoutLi);
let premLien = ajoutLi.querySelectorAll("a")[0];
premLien.style.color = "red";                     // premLien à la place de document car ce qu on veut sélectionner est là, avec document la recherche se fait dans tout le fichier HTML


// ex 5

let premOl = document.getElementsByTagName("ol")[0];
let listeChild = premOl.children;

for (let i=listeChild.length - 1; i >= 0; i--) {
  premOl.removeChild(listeChild[i]);
}

let tabbleau = ["Silent Teacher", "Code Monkey", "CodeCombat"];
for (let i=0; i<tabbleau.length; i++) {
  let nouveauLi = document.createElement('li');
  nouveauLi.innerText = tabbleau[i];
  premOl.appendChild(nouveauLi);
}
