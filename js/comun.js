let total 
let carroFinal = JSON.parse(localStorage.getItem("carritoFinal")) || []
const totalHTML = document.querySelector("#precioTotal")
const servicios = []
const creoID = ()=> parseInt(Math.random() * 10000)

function calcularTotal(...array){
    total = array.map(producto => parseInt(producto.final)).reduce((prev, curr) => prev + curr, 0);
    totalHTML.innerHTML = `TOTAL: ${total}`
}
calcularTotal(...carroFinal)

function restaurarCarrito() {
    localStorage.getItem("carritoFinal") && carroFinal
}
restaurarCarrito()

function vaciarCarro(){
    vaciar.addEventListener("click", ()=> {
        if (carroFinal.length > 0){
            Swal.fire({
                title: 'Quieres vaciar el carro?',
                text: "Se perderan todos los productos",
                icon: 'question',
                iconColor: 'white',
                showCancelButton: true,
                confirmButtonColor: '#0d2546',
                cancelButtonText: 'No',
                cancelButtonColor: 'rgb(183, 194, 186)',
                confirmButtonText: 'vaciar',
                background: '#0d2546',
                color: "white"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                    title: 'Carro vaciado',
                    icon: "success",
                    confirmButtonText: 'ok',
                    confirmButtonColor: '#0d2546',
                    iconColor: 'white',
                    background: '#0d2546',
                    color: "white"
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
                title: 'No hay nada que vaciar',
                text: 'Carga productos en el carrito',
                background: '#0d2546',
                color: 'white',
                iconColor: 'white',
                showConfirmButton: false,
              })
        }
    })
}
vaciarCarro()

