'use strict'
let totalKms = prompt("Ingrese el kilometraje");

// Costo por Kilómetro:
let costoPorKm; // Declarando
costoPorKm = 0.29; // Asignación

// Costo de arranque:
let arranque;
arranque = 0.55;

// Tarifa mínima durante el día:
let tarifaMinimaDia;
tarifaMinima = 1.50;

// Tarifa mínima durante la noche:
let tarifaMinimaNoche;
tarifaMinima = 1.75;

let valor = (costoPorKm * totalKms) + arranque; // Calcular valor
if (valor < 1.50) {
    valor = 1.50;
}
alert("El valor a pagar de la carrera es: " + valor);
