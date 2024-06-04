'use strict'
let totalKms = prompt("Ingrese el kilometraje");
let precioPorKm; // Declarando
precioPorKm = 0.25; // Asignación
let arranque;
arranque = 0.50;
let valor = (precioPorKm * totalKms) + arranque;
alert("El valor a pagar de la carrera es: " + valor);