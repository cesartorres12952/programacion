// Función que verifica si un número es primo
function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }

    // Probar divisores desde 2 hasta la raíz cuadrada del número (optimización de rendimiento)
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si se encuentra un divisor, no es primo
        }
    }
    return true; // Es primo
}

// Solicitar los límites del rango al usuario
let inicio = parseInt(prompt("Ingrese el número inicial del rango:"));
let fin = parseInt(prompt("Ingrese el número final del rango:"));

// Validar que las entradas sean números válidos
if (isNaN(inicio) || isNaN(fin)) {
    alert("Error: Por favor, ingrese números enteros válidos.");
} else {
    // Si el usuario ingresó el rango al revés, se intercambian los valores automáticamente
    if (inicio > fin) {
        let temp = inicio;
        inicio = fin;
        fin = temp;
    }

    let primosEncontrados = [];

    // Recorrer el rango de números
    for (let i = inicio; i <= fin; i++) {
        if (esPrimo(i)) {
            primosEncontrados.push(i);
        }
    }

    // Preparar el resultado
    let resultadoTexto = primosEncontrados.length > 0
        ? primosEncontrados.join(", ")
        : "No se encontraron números primos en este rango.";

    // Mostrar la lista de números primos encontrados
    alert("Números Primos en el Rango [" + inicio + " - " + fin + "]:\n\n" + resultadoTexto);
}
