document.getElementById("burger").onclick = function(){
	addMenu();
}

function addMenu(){
	document.getElementById("menu").classList.toggle("menu");
	document.getElementById("menu").classList.toggle("show");
}

document.getElementById("filter1").onclick = function(){
	filterFunctionAll();
}

document.getElementById("filter2").onclick = function(){
	filterFunctionPS();
}

document.getElementById("filter3").onclick = function(){
	filterFunctionIllustrator();
}

document.getElementById("filter4").onclick = function(){
	filterFunctionBrand();
}

document.getElementById("filter5").onclick = function(){
	filterFunctionMockup();
}

function filterFunctionPS(){
	document.getElementById("img1").classList.add("show_gallery");
	document.getElementById("img2").classList.remove("show_gallery");
	document.getElementById("img3").classList.add("show_gallery");
	document.getElementById("img4").classList.add("show_gallery");
	document.getElementById("img5").classList.add("show_gallery");
	document.getElementById("img6").classList.remove("show_gallery");
}

function filterFunctionIllustrator(){
	document.getElementById("img1").classList.remove("show_gallery");
	document.getElementById("img2").classList.remove("show_gallery");
	document.getElementById("img3").classList.remove("show_gallery");
	document.getElementById("img4").classList.remove("show_gallery");
	document.getElementById("img5").classList.remove("show_gallery");
	document.getElementById("img6").classList.remove("show_gallery");
}

function filterFunctionBrand(){
	document.getElementById("img1").classList.add("show_gallery");
	document.getElementById("img2").classList.add("show_gallery");
	document.getElementById("img3").classList.add("show_gallery");
	document.getElementById("img4").classList.add("show_gallery");
	document.getElementById("img5").classList.remove("show_gallery");
	document.getElementById("img6").classList.add("show_gallery");
}

function filterFunctionMockup(){
	document.getElementById("img1").classList.remove("show_gallery");
	document.getElementById("img2").classList.add("show_gallery");
	document.getElementById("img3").classList.remove("show_gallery");
	document.getElementById("img4").classList.add("show_gallery");
	document.getElementById("img5").classList.add("show_gallery");
	document.getElementById("img6").classList.add("show_gallery");
}

function filterFunctionAll(){
	document.getElementById("img1").classList.remove("show_gallery");
	document.getElementById("img2").classList.remove("show_gallery");
	document.getElementById("img3").classList.remove("show_gallery");
	document.getElementById("img4").classList.remove("show_gallery");
	document.getElementById("img5").classList.remove("show_gallery");
	document.getElementById("img6").classList.remove("show_gallery");
}