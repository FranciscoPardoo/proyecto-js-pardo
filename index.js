/* 

    const tienda = [
        {
            prenda: "buzo",
            tallesDisponibles:["S", "M", "L", "XL"],
            precio: 20,
        },
        {
            prenda: "campera",
            tallesDisponibles: ["S", "M", "L", "XL"],
            precio: 25,
        },
        {
            prenda: "pantalon",
            tallesDisponibles: ["S", "M", "L", "XL"],
            precio: 22,
        },
    ];

function compra (prenda){
    if (prenda === "buzo"){
        prendaElegida= tienda.slice(0, 1)
        console.log(prendaElegida)
    }else if (prenda === "campera"){
        prendaElegida = tienda.slice(1, 2)
        console.log(prendaElegida)
    }else {
        prendaElegida = tienda.slice(2, 3)
        console.log(prendaElegida)
    }
};

compra("buzo");
compra("campera");
compra("pantalon");
*/



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



