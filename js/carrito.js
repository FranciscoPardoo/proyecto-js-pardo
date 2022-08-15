let segundoCarrito = JSON.parse(localStorage.getItem("carrito")) || []
const detalleCompra = document.querySelector("#detalle")
let nombre = document.querySelector("#nombre")
let mail = document.querySelector("#mail")
let tarjeta = document.querySelector("#tarjetaDeCredito")
let direccion = document.querySelector("#direccion")
let divConfirmacion = document.querySelector("#confirmacion")
let submit = document.querySelector("#submit")
let formulario = document.querySelector("#form")

function itemsCarrito() {
    segundoCarrito.map(tienda => {
        detalleCompra.innerHTML += `
        <li class="detalle">
        <img src="${tienda.img}"/>
        <p>${tienda.prenda}</p>
        <p>$ ${tienda.precio}</p>
        </li>`
    })
}

segundoCarrito.length ? itemsCarrito() : (detalleCompra.innerHTML=`<h3>No has añadido ningun item al carrito</h3>`)

function finalizarCompra() {
    if (nombre.value !== "" && mail.value !== "" && tarjeta.value !== "" && direccion.value !== "") {
        divConfirmacion.innerHTML = `
<h3>Gracias por tu compra ${nombre.value}!</h3>
<p>Tu pedido llegara a ${direccion.value} en 7 dias habiles</p>
`
    } else {
        divConfirmacion.innerHTML = `
        <h3>Por favor complete todos los campos</h3>`
    }
}

formulario.onsubmit = (e) => {
    e.preventDefault()
    finalizarCompra()
    formulario.reset()
}
