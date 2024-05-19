const redefineButtonJS = document.querySelector('.redefine-button');
const updateButtonJS = document.querySelector('.update-button');
const gridContainerJS = document.querySelector('.grid-container');

let userImput = prompt('Choose your grid size (1~80):');

function gridCreation(divQuantity){
    if ((divQuantity >= 1 && divQuantity <= 80)){
        gridContainerJS.innerHTML = '';
        let quantityCalculation = divQuantity ** 2;
        let blockWidthHeight = Math.floor(960/ divQuantity);

        for (let i = 0; i < quantityCalculation; i++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("grid-blocks");
            newDiv.addEventListener('mouseover', (evento) =>{
                newDiv.style.backgroundColor = 'black';
            });     
            gridContainerJS.appendChild(newDiv);
        }
        
        let divConfig = document.querySelectorAll(".grid-blocks");
        divConfig.forEach(function(div) {
            div.style.width = blockWidthHeight + "px";
            div.style.height = blockWidthHeight + "px";
        });
    }else{
        alert("Invalid Imput");
    }
}

updateButtonJS.addEventListener('click', updateGrid);

function updateGrid() {
    let inputUpdate = prompt('Choose your grid size (1~80):');
    gridCreation(Number(inputUpdate));
}


redefineButtonJS.addEventListener("click", function() {
    let redefineDivs = document.querySelectorAll(".grid-blocks");
    redefineDivs.forEach(function(div) {
        div.style.backgroundColor = 'white';
    });
});

gridCreation(userImput);
console.log(updateButtonJS);