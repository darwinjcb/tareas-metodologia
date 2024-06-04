'use strict'
/* 
Escribir una función que reciba como argumento la edad de una persona y devuelva True si es mayor a 18 y 
False si es menor.
*/

// Forma 1:
function calcularEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
let resultado1 = calcularEdad(20);
//alert("El resultado es: " + resultado1);
//alert("Su edad es: " + edad + " por lo tanto es mayor de edad");
//alert("Su edad es: " + edad + " por lo tanto es menor de edad");

// Forma 2:
function calcularEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
let ingresoEdad = Number(prompt("Ingrese su edad"));
let resultado2 = calcularEdad(ingresoEdad);
alert("El resultado es: " + resultado2);

// Forma 3: