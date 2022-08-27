let impuesto = 1.75;
let precio = 0;
let resN = 0;
let resS = 0;
let resSt = 0;
let ciclo = true

debugger

while(ciclo === true){
    let producto = prompt("¿Que quieres cotizar Netflix, Spotify, Steam?").toLowerCase();

    if (producto === "netflix"){
        precio = parseFloat(prompt("Cuanto sale tu suscripcion?"));
        resN = precio * impuesto;
        console.log(`Tu suscripcion saldria: $${resN}`)
        ciclo = confirm("¿Quieres seguir?")
    }
    else if (producto === "spotify"){
        precio = parseFloat(prompt("Cuanto sale tu suscripcion?"));
        resS = precio * impuesto;
        console.log(`Tu suscripcion saldria: $${resS}`)
        ciclo = confirm("¿Quieres seguir?")
    }
    else if (producto === "steam"){
        precio = parseFloat(prompt("Cuanto sale tu juego?"));
        resSt = precio * impuesto;
        console.log(`Tu juego saldria: $${resSt}`)
        ciclo = confirm("¿Quieres seguir?")
    }
    else{
        alert("Fijate que escribiste mal.")
    } 
}

let final = confirm("¿Quiere el precio final?")

precioFinal(resN, resS, resSt)

function precioFinal(resN, resS, resSt){
    alert(`Tu precio total seria: $${resN + resS + resSt}`)
}