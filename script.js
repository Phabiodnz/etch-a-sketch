const redefineButtonJS = document.querySelector('.redefine-button');
const updateButtonJS = document.querySelector('.update-button');
const gridContainerJS = document.querySelector('.grid-container');

function createGrid(divQuantity) {
    if (divQuantity >= 1 && divQuantity <= 100) {
        gridContainerJS.innerHTML = '';
        const blockSize = 1000 / divQuantity;

        for (let i = 0; i < divQuantity * divQuantity; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-blocks");
            newDiv.style.width = blockSize + "px";
            newDiv.style.height = blockSize + "px";
            newDiv.addEventListener('mouseover', (event) => {
                newDiv.style.backgroundColor = 'black';
            });
            gridContainerJS.appendChild(newDiv);
        }
    } else {
        alert("Invalid input");
    }
}

function updateGrid() {
    const inputUpdate = prompt('Choose your grid size (1~80):');
    createGrid(Number(inputUpdate));
}

updateButtonJS.addEventListener('click', updateGrid);

function redefineGrid() {
    const gridBlocks = document.querySelectorAll(".grid-blocks");
    gridBlocks.forEach(function(block) {
        block.style.backgroundColor = '#FFFFFF';
    });
}

redefineButtonJS.addEventListener("click", redefineGrid);

createGrid(prompt("Choose your grid size (1-100):"));
