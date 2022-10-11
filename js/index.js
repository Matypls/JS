class Servi {
    constructor(servicio, plan, importe, final) {
        this.servicio = servicio
        this.plan = plan
        this.importe = importe
        this.final = final
    }
}

function generadorAutomatico() {
    let servicio = inputServicio.value
    let descripcion = inputDescripcion.value
    let importe = parseFloat(inputImporte.value)
    let final = (importe / 100) * inputIva.value + importe
    const nuevoServicio = new Servi(servicio, descripcion, importe, final)
    servicios.push(nuevoServicio)
}

agregando.addEventListener("click", ()=> {
    generadorAutomatico();
    cargarProductos(servicios);
    incorporarAlCarro();
})

const agregaData = async()=> {
    try {
        const response = await fetch('../data/data.json')
        const data = await response.json()
        servicios.push(...data)
        cargarProductos(servicios)
        incorporarAlCarro(servicios)
    } catch (error) {
        console.log(error)
    }
}
agregaData() 

const carroFinal = JSON.parse(localStorage.getItem("carritoFinal")) || []
const servicios = []
