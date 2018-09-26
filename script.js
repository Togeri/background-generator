var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var random = document.getElementById('random');

console.log(body.style.background);



css.textContent = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";


function setGradient() {
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	css.textContent = 
	body.style.background;
}

function setGradientRandom() {
	color1.value = randomHexColor();
	color2.value = randomHexColor();
	body.style.background = 
	"linear-gradient(to right," 
	// + (color1.value = randomHexColor()) 
	+ color1.value
	+ "," 
	// + (color2.value = randomHexColor())
	+ color2.value
	+ ")";

	css.textContent = 
	body.style.background;
}

function randomHexColor() {
	var values = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += 
		values[Math.floor(Math.random() * 16)];
	}
	return color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setGradientRandom)