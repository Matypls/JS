const comprar = document.querySelector("#comprar")
const carro = document.querySelector("#infoCarro")


function visualCarro(roberto) {
    let fila = ""
        carro.innerHTML = ""
        roberto.forEach(producto => { 
            fila = `<tr>
                        <td>${producto.servicio}</td>
                        <td>${producto.plan}</td>
                        <td>$${producto.importe}</td>
                        <td>$${producto.final}</td>
                        <td><button id="id${producto.id}">Eliminar</button></td>
                        </tr>`
                    carro.innerHTML += fila
        })
}
visualCarro(carroFinal)

function carritoEliminar(id) {
    let carroActualizado = carroFinal.filter(producto => producto.id != id);
    carroFinal = carroActualizado;
    localStorage.setItem("carritoFinal", JSON.stringify(carroFinal));
    location.reload();
}

function eliminarProducto() {
    carroFinal.forEach(producto => {
        let eliminar = document.querySelector(`#id${producto.id}`)
        eliminar.addEventListener("click", () => {
            carritoEliminar(`${producto.id}`);
            calcularTotal(...carroFinal);
        })
    })
}

eliminarProducto();


function realizarCompra(){
    comprar.addEventListener("click", ()=> {
        if (carroFinal.length > 0){
            Swal.fire({
                title: '¿Quiere realizar la compra?',
                text: `Tu saldo abonar seria de $${total}`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: 'green',
                cancelButtonColor: 'red',
                confirmButtonText: 'Si',
                cancelButtonText: 'No',
                background: 'linear-gradient(180deg, #f0c338 15%, #fbd97a 30%, #ffe5a8 60%, #f3eacd 90%)'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Compra realizada',
                    text: 'Muchas gracias por adquirir los servicios',
                    text: `Tu ID de compra es #${Math.random().toString(36).slice(2)}`,
                    icon: 'success',
                    background: 'linear-gradient(180deg, #f0c338 15%, #fbd97a 30%, #ffe5a8 60%, #f3eacd 90%)'
                    }).then((result2) => {
                        if (result2.isConfirmed){
                            localStorage.clear()
                            location.reload() 
                        }
                    })              
                }
            })    
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Tu carrito esta vacio',
                text: 'Vamos a comprar algo',
                showConfirmButton: false,
                footer: '<a href="../index.html">Volver a la tienda</a>'
              })
        }
        
    })
}
realizarCompra()