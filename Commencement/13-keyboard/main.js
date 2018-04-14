// ex 1

let changeColor = document.getElementById("character");


document.querySelector("body").addEventListener("keypress", function(event) {
  let keyName = event.keyCode;   // ou event.which
  switch (keyName) {
    case 48 :
      changeColor.style.backgroundColor = "red";
      break;
    case 49 :
      changeColor.style.backgroundColor = "yellow";
      break;
    case 50 :
      changeColor.style.backgroundColor = "green";
      break;
    case 51 :
      changeColor.style.backgroundColor = "blue";
      break;
    case 52 :
      changeColor.style.backgroundColor = "orange";
      break;
    case 53 :
      changeColor.style.backgroundColor = "purple";
      break;
    case 54 :
      changeColor.style.backgroundColor = "grey";
      break;
    case 55 :
      changeColor.style.backgroundColor = "black";
      break;
    case 56 :
      changeColor.style.backgroundColor = "brown";
      break;
    case 57 :
      changeColor.style.backgroundColor = "white";
      break;
  }
});

// ex2

let opacityUp = document.getElementById("up");
let opacityDown = document.getElementById("down");
let opacityLeft = document.getElementById("left");
let opacityRight = document.getElementById("right");

document.body.addEventListener("keydown", function(event) {
  let keyName = event.which;   // = event.keyCode
  switch (keyName) {
    case 37 :
      opacityLeft.classList.add('highlight');
      break;
    case 38 :
      opacityUp.classList.add('highlight');
      break;
    case 39 :
      opacityRight.classList.add('highlight');
      break;
    case 40 :
      opacityDown.classList.add('highlight');
      break;
  }
});

document.body.addEventListener("keyup", function(event) {
  let keyName = event.which;   // = event.keyCode
  switch (keyName) {
    case 37 :
      opacityLeft.classList.remove('highlight');
      break;
    case 38 :
      opacityUp.classList.remove('highlight');
      break;
    case 39 :
      opacityRight.classList.remove('highlight');
      break;
    case 40 :
      opacityDown.classList.remove('highlight');
      break;
  }
});
