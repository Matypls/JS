const tabla = document.querySelector("#infoTabla")
const inputServicio = document.querySelector('#inputServicio')
const inputDescripcion = document.querySelector('#inputDescripcion')
const inputImporte = document.querySelector('#inputImporte')
const inputIva = document.querySelector('#inputIva')
const agregandoServicios = document.querySelector('#agregandoServicios')
const vaciar = document.querySelector("#vaciar")

class Servi {
    constructor(servicio, plan, importe, final, id) {
        this.servicio = servicio
        this.plan = plan
        this.importe = importe
        this.final = final
        this.id = id
    }
}

function generadorAutomatico() {
    let servicio = inputServicio.value
    let descripcion = inputDescripcion.value
    let importe = parseFloat(inputImporte.value)
    let final = (importe / 100) * inputIva.value + importe
    let id = creoID()
    const nuevoServicio = new Servi(servicio, descripcion, importe, final, id)
    servicios.push(nuevoServicio)
}

const agregaData = async()=> {
    try {
        const response = await fetch('../data/data.json')
        const data = await response.json()
        servicios.push(...data)
        servicios.forEach(producto => {
            producto.id = creoID()
        })
        cargarProductos(servicios)
        incorporarAlCarro(servicios)
    } catch (error) {
        console.log(error)
    }
}
agregaData() 

function cargarProductos(pedro) {
    let fila = ""
    tabla.innerHTML = ""
    pedro.forEach(producto => { 
        fila = `<tr>
        <td>${producto.servicio}</td>
        <td>${producto.plan}</td>
        <td>$${producto.importe}</td>
        <td>$${producto.final}</td>
        <td><button id="id${producto.id}">Adquirir</button></td>
        </tr>`
        tabla.innerHTML += fila
    })
}

function incorporarAlCarro() {
    servicios.forEach(producto => {     
        const agregar = document.querySelector(`#id${producto.id}`)  
        agregar.addEventListener("click", ()=> {
            carrito(`${producto.id}`)
            calcularTotal(...carroFinal)
            Toastify({
                text: "Producto añadido",
                duration: 750,
                style: {
                    background: "#0d2546",
                    width: '200px',
                    textAlign: 'center', 
                    color: "white"
                }
            }).showToast();
        })    
    })
} 

function carrito(id) {
    const servicioCarrito = servicios.find(producto => producto.id == id)
    carroFinal.push(servicioCarrito)
    localStorage.setItem("carritoFinal", JSON.stringify(carroFinal))  
}

agregandoServicios.addEventListener("click", ()=> {
    generadorAutomatico();
    cargarProductos(servicios);
    incorporarAlCarro();
})

