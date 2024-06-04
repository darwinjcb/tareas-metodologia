'use strict'
//1. Declarando a la función

// 2. Llamar a la función
// mostrarmensaje(); 

let a = Number(prompt("Ingrese el primer número"));
let b = Number(prompt("Ingrese el segundo número"));
function mostrarmensajeConNombre(nombre) {
    alert("Hola " + nombre);
}

mostrarmensajeConNombre("Juan"); // Juan es un argumento

function generarFrase() {
    return "Hola Mundo";
}
let resultado;
// Llama a la función "GenerarFrase"
alert("El valor de retorno de la función es: " + generarFrase());

function sumarNumeros(a, b) {
    let resultado = a + b;
    alert("El resultado de la suma es: " + resultado);
    return resultado;
}
alert(sumarNumeros());