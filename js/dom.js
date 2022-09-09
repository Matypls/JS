const tabla = document.querySelector("#infoTabla")

function cargarProductos() {
    let fila = ""
        tabla.innerHTML = ""
        servicios.forEach(producto => { 
            fila = `<tr>
                        <td>${producto.servicio}</td>
                        <td>${producto.plan}</td>
                        <td>${producto.importe}</td>
                        <td>${producto.final}</td>
                    </tr>`
                    tabla.innerHTML += fila
        })
    }
    cargarProductos()

