// single page scroll navigation
function height() {
	var h = window.innerHeight;
	document.getElementById('con').style.height = h+"px";
	document.getElementById('con1').style.height = h+"px";
	document.getElementById('con2').style.height = h+"px";
	document.getElementById('con3').style.height = h+"px";
}

function move() {
	var Y = window.pageYOffset;
	var h = window.innerHeight;
	var s = document.getElementById('span');
	if (Y < h) {s.style.left = "0px"}
	else if (Y < (2*h)) {s.style.left = "100px"}
	else if (Y < (3*h)) {s.style.left = "200px"}
	else if (Y >= (3*h)) {s.style.left = "300px"}
}

window.addEventListener('scroll',move);
window.addEventListener('load',height);
window.addEventListener('resize',height);