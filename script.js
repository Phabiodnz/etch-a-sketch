let quantidadeDivs = 16 * 16;
const gridContainerJS = document.querySelector('.grid-container')

for (let i = 0; i < quantidadeDivs; i++) {
    let novaDiv = document.createElement("div");
    novaDiv.classList.add("grid-blocks");
    novaDiv.addEventListener('mouseover', (evento) =>{
        novaDiv.style.backgroundColor = 'black';
    });
    gridContainerJS.appendChild(novaDiv);
}

