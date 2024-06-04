'use strict'
let premio;
premio = 7;
let num;
let contador = 0;
do {
    num = Number(prompt("Ingrese un número"));
    contador++;
} while (contador < 3 && num != premio);
if (num == premio && contador <= 3) {
    alert("¡Felicidades!\nAdivinaste el número en el " + contador + " intento.");
}
else {
    alert("Perdiste.\nSolo tienes permitido " + contador + " intento(s).");
}

/* do {
    num = Number(prompt("Ingrese un número"));
    contador++;
} while (num != premio);
alert("¡Ganaste! al " + contador + " intento");
*/