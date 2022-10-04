const tabla = document.querySelector("#infoTabla")
const inputServicio = document.querySelector('#inputServicio')
const inputDescripcion = document.querySelector('#inputDescripcion')
const inputImporte = document.querySelector('#inputImporte')
const inputIva = document.querySelector('#inputIva')
const agregando = document.querySelector('#agregando')
const totalHTML = document.querySelector("#precioTotal")
const vaciar = document.querySelector("#vaciar")
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
            carrito(`${producto.final}`)
            calcularTotal(...carroFinal)
            Toastify({
                text: "Producto añadido",
                duration: 750,
                style: {
                  background: "rgb(133, 136, 119)",
                  width: '200px',
                  textAlign: 'center', 
                  color: "black"  
                }
            }).showToast();
        })    
    })
}
incorporarAlCarro()

function carrito(final) {
    const servicioCarrito = conjunto.find(producto => producto.final == final)
    carroFinal.push(servicioCarrito)
    localStorage.setItem("carritoFinal", JSON.stringify(carroFinal))  
}

function restaurarCarrito() {
    localStorage.getItem("carritoFinal") && carroFinal
}
restaurarCarrito()

function calcularTotal(...array){
    total = array.map(producto => parseInt(producto.final)).reduce((prev, curr) => prev + curr, 0);
    totalHTML.innerHTML = `TOTAL: ${total}`
}

function vaciarCarro(){
    vaciar.addEventListener("click", ()=> {
        Swal.fire({
            title: 'Quieres vaciar el carro?',
            text: "Se perderan todos los productos",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonText: 'No',
            cancelButtonColor: 'red',
            confirmButtonText: 'vaciar',
            background: 'linear-gradient(180deg, #f0c338 15%, #fbd97a 30%, #ffe5a8 60%, #f3eacd 90%)'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: 'Carro vaciado',
                icon: "success",
                confirmButtonText: 'ok',
                confirmButtonColor: 'green',
                background: 'linear-gradient(180deg, #f0c338 15%, #fbd97a 30%, #ffe5a8 60%, #f3eacd 90%)',
                iconColor: 'orange'
                }).then((result2) => {
                    if (result2.isConfirmed){
                        localStorage.clear()
                        location.reload() 
                    }
                })
            }           
        })        
    })
}
vaciarCarro() 