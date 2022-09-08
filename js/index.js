const spotify = [
    {nombreS: "Plan economico", precio: 279},
    {nombreS: "Plan normal", precio: 389},
    {nombreS: "Plan Premium", precio: 489},
]
const nombreS = spotify.map((el) => el.nombreS)
const conIvaS = spotify.map((el) => {
    return {
        nombre: el.nombreS,
        precio: el.precio * 1.74.toFixed()
    }
})


const netflix = [
    {nombreN: "Plan economico", precio: 429},
    {nombreN: "Plan normal", precio: 799},
    {nombreN: "Plan Premium", precio: 1199},
]

const nombreN = netflix.map((al) => al.nombreN)
const conIvaN = netflix.map((al) => {
    return {
        nombre: al.nombreN,
        precio: al.precio * 1.74.toFixed()
    }
})

let impuesto = 1.74;
let consulta = true;
let cuentaS = 0;
let cuentasN = 0;
let cuentasSte = 0;

debugger
while (consulta === true){
    let producto = prompt("Que producto deseas adquirir Spotify, Netflix, Steam?").toLowerCase()

    if (producto === "spotify"){
        console.table(conIvaS)
        let preciosS = parseInt(prompt("Ingrese el importe del plan mostrado en la tabla"))

            if ((preciosS === 558) || (preciosS === 778) || (preciosS === 978)){
                cuentaS = preciosS 
                console.log(`Agregando los impuestos tendrias un monto abonar de $${cuentaS}`)
                consulta = confirm("Quieres calcular otro servicio?")
            }
            else{
                alert("Campeon este importe no existe")
            }
    } 

    else if (producto === "netflix"){
        console.table(conIvaN)
        let preciosN = parseInt(prompt("Ingrese el importe del plan mostrado en la tabla"))

            if ((preciosN === 858) || (preciosN === 1598) || (preciosN === 2398)){
                cuentasN = preciosN 
                console.log(`Agregando los impuestos tendrias un monto abonar de $${cuentasN}`)
                consulta = confirm("Quieres calcular otro servicio?")
            }
            else{
                alert("Campeon este importe no existe")
            }

    }

    else if (producto === "steam"){
        let preciosSte = parseInt(prompt("Cuanto saldo quieres agregar?"))
        cuentasSte = preciosSte * impuesto
        console.log(`Agregando los impuestos tendrias un monto abonar de $${cuentasSte}`)
        consulta = confirm("Quieres calcular otro servicio?")
    }
    else{
        alert("Seleccionaste bien el producto?")
    }
} 

let final = confirm("¿Quiere el monto final?")

precioFinal(cuentaS, cuentasN, cuentasSte)

function precioFinal(cuentaS, cuentasN, cuentasSte){
    alert(`Tu precio total seria: $${cuentaS + cuentasN + cuentasSte}`)
}
