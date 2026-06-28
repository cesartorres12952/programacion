// Solicitar el número límite N al usuario
let n = parseInt(prompt("Ingrese un número entero positivo N:"));

// Validar que sea un número válido y mayor a cero
if (isNaN(n) || n <= 0) {
    alert("Error: Por favor, ingrese un número entero válido y mayor a 0.");
} else {
    let suma = 0;
    let multiplosEncontrados = [];

    // Bucle desde 1 hasta N (inclusive)
    for (let i = 1; i <= n; i++) {
        // Un número es múltiplo de 3 o 5 si el resto de su división entre 3 o 5 es cero
        if (i % 3 === 0 || i % 5 === 0) {
            suma += i;
            multiplosEncontrados.push(i);
        }
    }

    // Preparar el listado de múltiplos para mostrar
    let listaMultiplos = multiplosEncontrados.length > 0 ? multiplosEncontrados.join(", ") : "Ninguno";

    // Mostrar los resultados en una alerta
    alert("Resultados para N = " + n + "\n" +
        "-----------------------------------\n" +
        "Múltiplos encontrados (3 o 5): " + listaMultiplos + "\n" +
        "Suma total de los múltiplos: " + suma);
}
