document.getElementById("burger").onclick = function(){
	addMenu();
}

function addMenu(){
	document.getElementById("menu").classList.toggle("menu");
	document.getElementById("menu").classList.toggle("show");
}
