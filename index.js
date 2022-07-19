

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


