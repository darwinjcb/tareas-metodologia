'use strict'
// Declaración de Función:
function validarCampo(esVisible, mostrar, ocultar) {
    if (esVisible) {
        mostrar();
    }
    else {
        ocultar();
    }
};

// Expresión de Función:
let mostrarCampo = function () {
    alert("Campo visible");
};

// Funcion 'Flecha':
let ocultarCampo = () => alert("Campo oculto");

validarCampo(true, mostrarCampo, ocultarCampo); // 'mostrarCampo' y 'ocultarCampo' se llaman Callbacks.