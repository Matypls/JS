const servicios = [
    {servicio: "Spotify", plan: "Economico", importe: 279, final: (279 * 1.74).toFixed()},
    {servicio: "Spotify", plan: "Normal", importe: 389, final: (389 * 1.74).toFixed()},
    {servicio: "Spotify", plan: "Premium", importe: 489, final: (489 * 1.74).toFixed()},
    {servicio: "Netflix", plan: "Economico", importe: 429, final: (429 * 1.74).toFixed()},
    {servicio: "Netflix", plan: "Normal", importe: 799, final: (799 * 1.74).toFixed()},
    {servicio: "Netflix", plan: "Premium", importe: 1199, final: (1199 * 1.74).toFixed()},
]

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
    conjunto.push(nuevoServicio)
}

agregando.addEventListener("click", ()=> {
    generadorAutomatico();
    cargarProductos(conjunto);
    incorporarAlCarro();
})

const carroFinal = JSON.parse(localStorage.getItem("carritoFinal")) || []
const serviciosAgregados = [] 
const conjunto = [...servicios, ...serviciosAgregados]