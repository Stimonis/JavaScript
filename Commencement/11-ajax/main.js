let ajax = new XMLHttpRequest();

let whenDataLoaded = function() {
  let dataText = ajax.responseText;
  let dataObject = JSON.parse(dataText);
  manipulateData(dataObject);
  // console.log(dataObject);
}

ajax.onload = whenDataLoaded;                 // +- pareil que onreadystatechange
ajax.open("GET", "mydata.json", true);        // the type, the url, asynchronous?
ajax.send(null);                                  // send the request on peut mettre null entre ()

let a = [];
let b = [];
let c = [];
let paysBahrain = [];

let ajoutScore = function(array) {
  // array = array.map(objet => objet.score = Math.floor(Math.random() * 1001));
  array = array.map(function(objet) {
    objet.score = Math.floor(Math.random() * 1001);
  })
  console.log(array);
};

let classementParScore = function(array) {
  array = array.sort((a,b) => a.score - b.score);
  console.log(array);
};

let diviserEnTrois = function(array) {
  array.forEach(function(ouVasTu) {
    if (ouVasTu.score <= 500) {
       c.push(ouVasTu);
    } else if (ouVasTu.score < 750 && ouVasTu.score > 500) {
      b.push(ouVasTu);
    } else {
      a.push(ouVasTu);
    }
  })
  console.log(a);
  console.log(b);
  console.log(c);
};

let quelPays = function (array) {
  paysBahrain = array.filter(pays => pays.country === "Bahrain");
  console.log(paysBahrain);
};

let plusGrand = function (array) {
  array = array.sort((a,b) => a.score + b.score);
  console.log(array[0]);
};

let plusPetit = function(array) {
  array = array.sort((a,b) => a.score - b.score);
  console.log(array[0]);
};

let afficherHTML = function (array) {
  let transformBody = document.querySelector("body");
  let ajoutPara = document.createElement("p");
  // array.forEach(function(ajoutPara1) {
  //   ajoutPara1 = ajoutPara.innerHTML = "<table>" + array + "</table>";
  //   transformBody.appendChild(ajoutPara1)});

  let ajoutParaBarhain = document.createElement("p");
  ajoutParaBarhain.innerText = "Il y a " + paysBahrain.length + " personnes qui habitent à Bahrain : " + paysBahrain[0].name + ", " + paysBahrain[1].name + " et " + paysBahrain[2].name;
  transformBody.appendChild(ajoutParaBauhain);

  let ajoutParaPlusGrand = document.createElement("p");
  ajoutParaPlusGrand.innerText = "Le score le plus grand est : " + array[array.length-1].score + "\nCe score a été réalisé par " + array[array.length-1].name;
  transformBody.appendChild(ajoutParaPlusGrand);

  let ajoutParaPlusPetit = document.createElement("p");
  ajoutParaPlusPetit.innerText = "Le score le plus petit est : " + array[0].score + "\nCe score a été réalisé par " + array[0].name;
  transformBody.appendChild(ajoutParaPlusPetit);

};

let manipulateData = function (array) {
  ajoutScore(array);
  classementParScore(array);
  diviserEnTrois(array);
  quelPays(array);
  plusGrand(array);
  plusPetit(array);
  afficherHTML(array);
};
