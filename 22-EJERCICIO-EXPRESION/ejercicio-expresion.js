/* 
Ejercicio:
Utilizando una expresión de función para crear un algoritmo que reciba el 
año de nacimiento y devuelva la edad 
*/
let año = Number(prompt("Ingrese el año de nacimiento:"));
let calcularFechaNacimiento = function (año) {
    return 2024 - año;
}

alert("Su edad actual es de: " + calcularFechaNacimiento(año) + " años.");