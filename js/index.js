let num = parseInt(prompt("Que numero quieres multiplicar por 6?:"));
let multiplo = 6;
let resultado = num * multiplo;

console.log(`Tu resultado es ${resultado}`);

debugger

let repeticion = confirm("Desea repetir la operacion?")

while(repeticion){
    resultado = resultado * num
    console.log(resultado)
    repeticion = confirm("Desea repetir la operacion?")
}