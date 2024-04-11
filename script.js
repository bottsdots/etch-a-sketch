const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");
document.body.appendChild(btnContainer);

const container = document.createElement("div"); //create flexbox for the grid
container.classList.add("container");
document.body.appendChild(container);
let transparent = container.style.backgroundColor;

const btn = document.createElement("button");
btn.classList.add("button");
btnContainer.appendChild(btn);
btn.textContent = "Enter a number";
let num = 4;
btn.addEventListener("click", function() {
    num = prompt("Enter a number from 1-100 to set the size of the grid:")
    if (num < 1 || num > 100) {
        alert("Number is not between 1 and 100!");
        num = 100;
    }
    while (pad.hasChildNodes()) {
        pad.removeChild(pad.firstChild);
    }
    createGrid();
});

const pad = document.createElement("pad");
pad.classList.add("pad");
container.appendChild(pad);



function createGrid() {
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            createSquare();
        }
        createBreakLine();
    }
}

function createSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    pad.appendChild(square); 



    let opacityNum = 0;
    square.addEventListener("mouseover", (event) => {
        if (square.style.backgroundColor === transparent) {
            square.style.backgroundColor = getRandomColor();
        }
        if (opacityNum < 0.9) {
            opacityNum += 0.1;
            square.style.opacity = opacityNum;
        }
        
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
}

function createBreakLine() {
    const breakLine = document.createElement("div");
    breakLine.classList.add("breakLine");
    pad.appendChild(breakLine);
}


createGrid();