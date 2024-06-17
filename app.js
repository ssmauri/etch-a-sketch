


const containerDiv = document.querySelector(".container-divs");
let numSquares = 16
//temporal para el test
containerDiv.setAttribute("style", "height: 500px; width: 500px;")
//temporal



function divsMaker (num) {
    let alto = 100 / num;
    for ( let i = 0 ; i < num ; ++i) {
        const divRow = document.createElement('div');
        divRow.className = 'row';
        divRow.setAttribute("style", "display: flex; flex-direction: row; height: " + alto + "%");
        containerDiv.appendChild(divRow);
        for ( let j = 0 ; j < num ; ++j ) {
            const divCol = document.createElement('div');
            divCol.className = 'col';
            divCol.setAttribute("style", "flex-basis: " + alto + "%");
            divRow.appendChild(divCol);
        }
    }
}

// Funcion de los botones del costado
function getColor(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }
  


let tipoPixel = "";
function pixeleada() {
    switch (tipoPixel) {
        case "pixelear":
            this.style.backgroundColor = "";
            this.style.opacity = "1";
            this.classList.toggle("active");
            break;

        case "arcoiris":
            this.classList.remove("active");
            this.style.backgroundColor = "";
            this.style.opacity = parseFloat(Math.random());
            this.style.backgroundColor = "rgb(" + getColor(0,255) + ", " + getColor(0,255) + ", " + getColor(0,255) + ")" ;

            break;

        case "sombra":
            this.classList.remove("active");
            if ( this.style.backgroundColor == "black" ) {
                this.style.opacity = parseFloat(this.style.opacity) + 0.1 ;
            } else {
                this.style.backgroundColor = "black";
                this.style.opacity = "0.1";
            }
            break;

        case "clear":
            this.classList.remove("active");
            this.style.opacity = "";
            this.style.backgroundColor = "";
            break;
    }
}

function pixelGrid() {
    tipoPixel = "pixelear";
}

function arcoGrid() {
    tipoPixel = "arcoiris";
}
function clearGrid() {
    tipoPixel = "clear";
}
function sombraGrid() {
    tipoPixel = "sombra"
}
function clearAll() {
    document.querySelectorAll(".col").forEach( (e) => {
        e.style.backgroundColor = "";
        e.classList.remove("active");
    });
}
// Fin de las funciones de los botones del costado



divsMaker(numSquares)



const buttonGrid = document.querySelector(".newGrid");
buttonGrid.addEventListener("click", () => {
    document.querySelector(".container-divs").innerHTML = '';
    const numSquares = prompt("Ingresa un número entero menor o igual 100");
    if ( numSquares != null && numSquares <= 100 && numSquares > 0 ){
        divsMaker(numSquares);
    } else {
        alert("Ingresa un número entero menor o igual a 100")
    }
    
});



const domObserver = new MutationObserver( () => {

    const coldivs = document.querySelectorAll(".col");
    coldivs.forEach( (e) => { 
    e.addEventListener('mouseover', this.pixeleada );
});

});
domObserver.observe(document.body, { childList: true,  subtree: true}); 