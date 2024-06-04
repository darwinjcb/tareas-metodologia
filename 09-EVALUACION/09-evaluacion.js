'use strict'
// Variable compra:
let purchase;

// Límite:
let limit = Number(20);

// Uso del Parqueadero:
let parkUsage = Number(2);

// Precio Unitario:
let unitPrice = Number(prompt("Ingrese el precio unitario de un solo tipo de producto"));

// Cantidad: 
let quantity = Number(prompt("\nIngrese la cantidad que desea adquirir"));

// Compra Total:
//let totalPurchase = alert(unitPrice * quantity);
let totalPurchase = unitPrice * quantity;

if (totalPurchase > limit) {
    parkUsage = Number(0);
    alert("El estacionamiento será gratuito. Por lo tanto el valor a pagar por el uso del parqueadero es: \$" + 
    parkUsage);

} else {
    parkUsage = Number(2);
    alert("El valor a pagar por el uso del parqueadero es: \$" + parkUsage);
}

