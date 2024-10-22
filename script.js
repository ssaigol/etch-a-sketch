//Element Queries
var mainContainer = document.getElementById("main-container");
var gridSize = 16;
var body = document.getElementById("body"); 
var button = document.getElementById("button");

//Initial Grid 16x16
createGrid(mainContainer);

//Event Listeners
mainContainer.addEventListener("mouseover", changeColor); //Changes box color when mouseover
button.addEventListener("click", sizePrompt); //Prompts user to change grid size when button clicked


//FUNCTIONS
function createGrid (container) {
    for (let u = 0; u < gridSize * gridSize; u++) {
        var box = document.createElement("div");
        box.className = "box";
        container.appendChild(box);
    }
    setBoxSize(gridSize);
}

function setBoxSize () {
    var boxes = document.getElementsByClassName("box");
    var sideLength = 992/gridSize;
    var arr = Array.from(boxes);
    arr.forEach((element) => {
        element.style.height = sideLength + "px";
        element.style.width = sideLength + "px";
    })
}

function changeColor (e) {
    var randomColor = "rgb(" + randomRGBValue() + ", " + randomRGBValue() + ", " + randomRGBValue() + ")";
    if (e.target.classList.contains("box")){
        e.target.style.backgroundColor = randomColor;
        const opacity = getComputedStyle(e.target).opacity - .1;
        e.target.style.opacity = opacity;
    }
}

function sizePrompt () {
    gridSize = prompt("How many squares per side? Please enter a square number.", 16);
    if (gridSize === null) gridSize = 16;
    button.textContent = "Grid Size: " + gridSize;
    if (gridSize <= 100 && Number.isInteger(Math.sqrt(gridSize))) {
        const container = document.getElementById("main-container");
        container.remove();
        const newContainer = document.createElement("div");
        newContainer.setAttribute("id", "main-container");
        body.appendChild(newContainer)
        createGrid(newContainer);
        setBoxSize();
        newContainer.addEventListener("mouseover", changeColor);
    } else sizePrompt();
}


function randomRGBValue () {
    return Math.floor(Math.random()*(255+1))
}
