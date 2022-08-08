let itemsDiv = document.getElementById("prendas")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let btnAgregar = document.getElementsByClassName("agregar")
const carritoDiv = document.getElementById("carrito")
const carritoSection = document.getElementById("carritoSection")
const vaciarCarrito = document.getElementById("vaciar")

function mostrarTienda(array) {
    array.forEach(tienda => {
        itemsDiv.innerHTML += `
        <div class="col-4 card" style="width: 16rem;">
            <img class="card-img-top" src=${tienda.img}>
            <div class="card-body">
            <h5 class="card-title">${tienda.prenda}</h5>
            <p class="card-text"> $ ${tienda.precio}</p>
            <button id="${tienda.id}" class="agregar btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
        `
    });
}

mostrarTienda(tienda)


function agregarCarrito(e) {
    carritoDiv.innerHTML = ""
    const boton = e.target;
    const btnId = boton.getAttribute("id");
    let itemsSeleccionados = tienda.find(tienda => tienda.id === btnId)
    carrito.push(itemsSeleccionados)

    localStorage.setItem("carrito", JSON.stringify(carrito));

    carritoAlFinal()
}

for (boton of btnAgregar) {
    boton.addEventListener("click", agregarCarrito)
}

function carritoAlFinal() {
    carrito.forEach(tienda => {
        carritoDiv.innerHTML += `
            <div class="productoCarrito">
                <img src=${tienda.img}>
                <h2>${tienda.prenda}   $${tienda.precio}</h2>
                <button class="botonBorrar" id="${tienda.id}">X</button>
            </div>
            `
    })
    let total = carrito.reduce((acc, curr) => acc + parseInt(curr.precio), 0)
    let compraTotal = document.createElement("p")
    compraTotal.setAttribute("class", "total")
    compraTotal.innerText = ("Total: " + total)
    carritoDiv.append(compraTotal)

    let botonBorrar = document.getElementsByClassName("botonBorrar")

    for (btnEliminar of botonBorrar) {
        btnEliminar.addEventListener("click", eliminarItem)
    }

    vaciarCarrito.addEventListener("click", () => {
        carrito = []
        localStorage.clear()
        carritoDiv.innerHTML = ""
    })

    let terminarCompra = document.createElement("button")
    terminarCompra.setAttribute("class", "terminarCompra")
    terminarCompra.innerHTML=("Finalizar compra")
    carritoDiv.append(terminarCompra)

    terminarCompra.addEventListener("click", ()=>{
        window.location.href="/paginas/comprar.html"
    })
}

carrito.length && carritoAlFinal()


function eliminarItem(e) {
    carritoDiv.innerHTML = ""
    const btnEliminar = e.target;
    const btnIdX = btnEliminar.getAttribute("id");
    let indexProducto = carrito.findIndex(tienda => tienda.id === btnIdX)
    carrito.splice(indexProducto, 1)
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito))
    carritoAlFinal(carrito)
}


