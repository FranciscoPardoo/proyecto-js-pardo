
console.log(pokemon)
console.log(pokemon.pokemon)


const cards = pokemon.pokemon.reduce((acc, elemento) => {

    return acc = acc + `
        <div class= "tarjeta">
            <div class= "img-container">
                <img src=${elemento.img} alt=${elemento.name}>
            </div>
            <p>
                ${elemento.name}
            </p>
            <p>
                ${elemento.height}
            </p>
            <p>
                ${elemento.weight}
            </p>
        </div>
    
    `
}, "")

console.log(cards)

const containerCards = document.querySelector(".contenedor-tarjetas")

console.log(containerCards)

containerCards.innerHTML = cards



/* 

    const tienda = [
        {
            prenda: "buzo",
            tallesDisponibles:["S", "M", "L", "XL"],
            precio: 80,
        },
        {
            prenda: "campera",
            tallesDisponibles: ["S", "M", "L", "XL"],
            precio: 90,
        },
        {
            prenda: "pantalon",
            tallesDisponibles: ["S", "M", "L", "XL"],
            precio: 60,
        },
    ];


console.log(tienda.sort( (a, b) => {

    if(a.precio > b.precio){
        return 1
    }
    else if( a.precio < b.precio){
        return -1
    }
}));



function compra (prenda){
    if (prenda === "buzo"){
        prendaElegida = tienda.slice(0, 1)
        console.log(prendaElegida)
    }else if (prenda === "campera"){
        prendaElegida = tienda.slice(1, 2)
        console.log(prendaElegida)
    }else {
        prendaElegida = tienda.slice(2, 3)
        console.log(prendaElegida)
    }
};

const cuotas = (precio, cantidadCuotas) => {
    if (cantidadCuotas === 3) {
        console.log(`En 3 cuotas de ${precio / 3} dolares.`);
    } else if (cantidadCuotas !== 3 && cantidadCuotas === 6) {
        console.log(`En 6 cuotas de ${precio / 6} dolares.`);
    } else {
        console.log(`En 12 cuotas de ${precio / 12} dolares.`);
    }
}


compra("campera");
cuotas(90, 12) */