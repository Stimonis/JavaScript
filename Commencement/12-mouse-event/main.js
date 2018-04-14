// ex 1

let classHoverMe = document.getElementsByClassName("hoverMe");

for (let i=0; i<classHoverMe.length; i++) {
  classHoverMe[i].addEventListener("mouseover", function(event){
    event.target.style.visibility = "hidden";
  // classHoverMe[i].addEventListener("mouseon", function(event){
  //   event.target.style.opacity = 1;              //pour faire réapparaitre dès que la souris part de la div (mettre opacity=0 dans le mouseover)
    // event.target.style.color = "red";
  });
}

for (let i=0; i<classHoverMe.length; i++) {
  classHoverMe[i].addEventListener("mouseover", function(event){
    event.target.style.visibility = "hidden";
    // event.target.style.color = "red";
  });
}

// ex 2

let clickRemove = document.getElementById("reset");

clickRemove.addEventListener('click', function(event){
  for (let i = 0; i < classHoverMe.length; i++) {
    classHoverMe[i].style.visibility = "visible";
  };
})

// ex 3

let axeX = document.getElementById("axe-x");
let axeY = document.getElementById("axe-y");

document.addEventListener("mousemove", function(event) {
  let x = event.clientX;
  let y = event.clientY;
  axeX.innerText = x;
  axeY.innerText = y;
})
