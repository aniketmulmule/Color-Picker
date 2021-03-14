var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
//var body = document.getElementsByClassName("gradient");

function AddGradient(){
    var body = document.querySelector("body") 
    body.style.backgroundImage = "linear-gradient(to right,"+ color1.value +","+ color2.value +")";
};
color1.addEventListener("input",AddGradient);

color2.addEventListener("input",AddGradient);