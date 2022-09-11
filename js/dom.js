const tabla = document.querySelector("#infoTabla")
const inputServicio = document.querySelector('#inputServicio')
const inputDescripcion = document.querySelector('#inputDescripcion')
const inputImporte = document.querySelector('#inputImporte')
const inputIva = document.querySelector('#inputIva')
const agregando = document.querySelector('#agregando')
const form = document.querySelector("form")

function cargarProductos(pedro) {
    let fila = ""
        tabla.innerHTML = ""
        pedro.forEach(producto => { 
            fila = `<tr>
                        <td>${producto.servicio}</td>
                        <td>${producto.plan}</td>
                        <td>$${producto.importe}</td>
                        <td>$${producto.final}</td>
                    </tr>`
                    tabla.innerHTML += fila
        })
}
cargarProductos(conjunto)

