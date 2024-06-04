'use strict'
// Creación de la función 'sumar':
// Esta funcion es de tipo 'Expresión':
let suma = function (a, b) {
    suma = a + b;
    alert("El resultado es " + suma);
};

// Creación de la función 'resta':
// Esta funcion es de tipo 'Flecha':
let resta = (a, b) => a - b;

// Creación de la función principal 'calc':
function calc(operacion, funcionSuma, funcionResta) {
    let num1 = Number(prompt("Ingrese el primer número: "));
    let num2 = Number(prompt("Ingrese el primer número: "));
    if (operacion === "suma") {
        funcionSuma(num1, num2);
    } else {
        alert(funcionResta(num1, num2));
    }
}

// Llamado a la función:
calc("suma", suma, resta);
