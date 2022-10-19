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

