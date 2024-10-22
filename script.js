var mainContainer = document.getElementById("main-container");

for (let u = 0; u < 256; u++) {
    var box = document.createElement("div");
    box.className = "box";
    mainContainer.appendChild(box);
}

mainContainer.addEventListener("mouseover", changeColor);

function changeColor (e) {
    e.target.style.backgroundColor = "#ff7f50";
}