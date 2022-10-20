const comprar = document.querySelector("#comprar")
const carro = document.querySelector("#infoCarro")

function visualCarro(roberto) {    
    let fila = ""
        carro.innerHTML = ""
        roberto.forEach(producto => { 
            producto.id = creoID()
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
            carritoEliminar(`${producto.id}`)
            calcularTotal(...carroFinal)
        })
    })
    Toastify({
        text: "Producto eliminado",
        duration: 750,
        style: {
            background: "#0d2546",
            width: '200px',
            textAlign: 'center', 
            color: "white"  
        }
    }).showToast();
}
eliminarProducto();

function realizarCompra(){
    comprar.addEventListener("click", ()=> {
        if (carroFinal.length > 0){
            Swal.fire({
                title: '¿Quiere realizar la compra?',
                text: `Tu saldo abonar seria de $${total}`,
                icon: 'question',
                iconColor: 'white',
                showCancelButton: true,
                confirmButtonColor: '#0d2546',
                cancelButtonColor: 'rgb(183, 194, 186)',
                confirmButtonText: 'Si',
                cancelButtonText: 'No',
                background: '#0d2546',
                color: 'white'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Compra realizada',
                    text: `Muchas gracias por adquirir los servicios, tu ID de compra es #${Math.random().toString(36).slice(2)}`,
                    icon: 'success',
                    background: '#0d2546',
                    color: 'white',
                    confirmButtonColor: '#0d2546'
                    }).then((result2) => {
                        if (result2.isConfirmed){
                            localStorage.clear()
                            window.location="../index.html"; 
                        }
                    })              
                }
            })    
        } else {
            Swal.fire({
                icon: 'error',
                iconColor: 'White',
                title: 'Tu carrito esta vacio',
                text: 'Vamos a comprar algo',
                background: '#0d2546',
                color: 'white',
                showConfirmButton: false,
                footer: '<a href="../index.html">Volver a la tienda</a>'
            })
        }    
    })
}
realizarCompra()