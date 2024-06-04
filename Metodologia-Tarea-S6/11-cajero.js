'use strict'
let contador = 0;
let claveCorrecta = 3214;
let claveIngresada;
do {
    claveIngresada = Number(prompt("Ingrese la clave"));
    contador++; // Incremento contador
    if (claveIngresada != claveCorrecta) {
        alert("Clave incorrecta");
    }
} while (claveIngresada != claveCorrecta && contador < 3); // ¿Las claves son iguales?
if (claveCorrecta == claveIngresada && contador <= 3) {
    alert("Operación exitosa");
}
else {
    alert("Bloqueo de tarjeta");

}
/*if (claveCorrecta == claveIngresada) {
    alert("Operaciones exitosas");
}
else {
    alert("Clave incorrecta");
}*/