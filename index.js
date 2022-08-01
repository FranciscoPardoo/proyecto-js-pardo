
console.log(tienda)


const cards = tienda.reduce((acc, elemento) => {

    return acc = acc + `
        <div class= "tarjeta">
            <div class= "img-container">
                <img src=${elemento.img} alt=${elemento.prenda}>
            </div>
            <p>
                ${elemento.precio}
            </p>
            <p>
                ${elemento.tallesDisponibles}
            </p>
        </div>
    
    `
}, "")

console.log(cards)

const containerCards = document.querySelector(".contenedor-tarjetas")

console.log(containerCards)

containerCards.innerHTML = cards



const nuevaSuscripcion = [];

class NuevoSuscriptor {
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
};

const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputEmail = document.querySelector("#email");
const submit = document.querySelector("#submit");


formulario.onsubmit = (event) => {
    event.preventDefault()
    nuevaSuscripcion.push(new NuevoSuscriptor(inputNombre.value, inputApellido.value, inputEmail.value))
    console.log(nuevaSuscripcion)
}



const mayorPrecio = document.querySelector("#mostrarMayor");
const menorPrecio = document.querySelector("#mostrarMenor");


const mayorAMenor = tienda.sort( (a, b) => {

    if(b.precio > a.precio){
        return 1
    }
    else if( b.precio < a.precio){
        return -1
    }
});

const menorAMayor = tienda.sort( (a, b) => {

    if(a.precio > b.precio){
        return 1
    }
    else if( a.precio < b.precio){
        return -1
    }
});

const clickMayor = function(){
    console.log(mayorAMenor)
}

mayorPrecio.addEventListener("click", clickMayor);
mayorPrecio.removeEventListener("click", clickMayor);

const clickMenor = function(){
    console.log(menorAMayor)
}

menorPrecio.addEventListener("click", clickMenor);
menorPrecio.removeEventListener("click", clickMenor);
