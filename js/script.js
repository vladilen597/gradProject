document.getElementById("burger").onclick = function(){
addMenu();
}

function addMenu(){
document.getElementById("menu").classList.toggle("menu");
document.getElementById("menu").classList.toggle("show");
}

document.getElementById("filter1").onclick = function(){
document.getElementById("li1").classList.add("border_gallery");
document.getElementById("li2").classList.remove("border_gallery");
document.getElementById("li3").classList.remove("border_gallery");
document.getElementById("li4").classList.remove("border_gallery");
document.getElementById("li5").classList.remove("border_gallery");
filterFunctionAll();
}

document.getElementById("filter2").onclick = function(){
document.getElementById("li1").classList.remove("border_gallery");
document.getElementById("li2").classList.add("border_gallery");
document.getElementById("li3").classList.remove("border_gallery");
document.getElementById("li4").classList.remove("border_gallery");
document.getElementById("li5").classList.remove("border_gallery");
filterFunctionPS();
}

document.getElementById("filter3").onclick = function(){
document.getElementById("li1").classList.remove("border_gallery");
document.getElementById("li2").classList.remove("border_gallery");
document.getElementById("li3").classList.add("border_gallery");
document.getElementById("li4").classList.remove("border_gallery");
document.getElementById("li5").classList.remove("border_gallery");
filterFunctionIllustrator();
}

document.getElementById("filter4").onclick = function(){
document.getElementById("li1").classList.remove("border_gallery");
document.getElementById("li2").classList.remove("border_gallery");
document.getElementById("li3").classList.remove("border_gallery");
document.getElementById("li4").classList.add("border_gallery");
document.getElementById("li5").classList.remove("border_gallery");
filterFunctionBrand();
}

document.getElementById("filter5").onclick = function(){
document.getElementById("li1").classList.remove("border_gallery");
document.getElementById("li2").classList.remove("border_gallery");
document.getElementById("li3").classList.remove("border_gallery");
document.getElementById("li4").classList.remove("border_gallery");
document.getElementById("li5").classList.add("border_gallery");
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