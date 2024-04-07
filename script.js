var css = document.querySelector("h3");
var css2 = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i=0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
		return color;
	} 

function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setBackground();

}

function setBackground() {
	body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
	css.textContent = body.style.background + ";";
	css2.textContent = color1.value + "       " + color2.value;

}

// run function to match the startup value of inputs
setBackground()


button.addEventListener("click", randomColors);
color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);