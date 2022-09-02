let utiles = ['lapiz', 'goma', 'corrector', 'lapicera', 'colores', 'resaltador', 'rueda']

function agregarUtiles (){
    let nuevosUtiles = prompt("Que util quieres agregar?")
    let resultado = utiles.includes(nuevosUtiles)
        if (resultado === false) {
            utiles.push(nuevosUtiles)
            console.table(utiles)
        } else {
            alert(`El util ${nuevosUtiles} ya esta en la lista`)
        }
}

function quitarUtil (){
    let restar = prompt("Que util quieres retirar?")
    let retirar = utiles.indexOf(restar)
    if (retirar > -1) {
        let resultado = utiles.splice(retirar, 1)
        console.log(resultado)
        console.table(utiles)
    } else {
        alert(`El util ${restar} no se encuentra en la lista`)
    }
}