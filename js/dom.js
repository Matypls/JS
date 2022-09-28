const tabla = document.querySelector("#infoTabla")
const inputServicio = document.querySelector('#inputServicio')
const inputDescripcion = document.querySelector('#inputDescripcion')
const inputImporte = document.querySelector('#inputImporte')
const inputIva = document.querySelector('#inputIva')
const agregando = document.querySelector('#agregando')
const totalHTML = document.querySelector("#precioTotal")
let total 

function cargarProductos(pedro) {
    let fila = ""
        tabla.innerHTML = ""
        pedro.forEach(producto => { 
            fila = `<tr>
                        <td>${producto.servicio}</td>
                        <td>${producto.plan}</td>
                        <td>$${producto.importe}</td>
                        <td>$${producto.final}</td>
                        <td><button id="final${producto.final}">Adquirir</button></td>
                        </tr>`
                    tabla.innerHTML += fila
        })
}
cargarProductos(conjunto)

function incorporarAlCarro() {
    conjunto.forEach(producto => {      
        const agregar = document.querySelector(`#final${producto.final}`)  
        agregar.addEventListener("click", ()=> {
            Carrito(`${producto.final}`)
            calcularTotal()
        })    
    })
}
incorporarAlCarro()

function Carrito(final) {
    const servicioCarrito = conjunto.find(producto => producto.final == final)
    carroFinal.push(servicioCarrito)
    localStorage.setItem("carritoFinal", JSON.stringify(carroFinal))  
}

function restaurarCarrito() {
    if (localStorage.getItem("carritoFinal")) {
        carroFinal = JSON.parse(localStorage.getItem("carritoFinal"))
    }
}
restaurarCarrito()

function calcularTotal(){
    total = carroFinal.map(producto => parseInt(producto.final)).reduce((prev, curr) => prev + curr, 0);
    totalHTML.innerHTML = `TOTAL: ${total}`
}