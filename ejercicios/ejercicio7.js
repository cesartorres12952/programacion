// Solicitar al usuario un número entero largo
let entrada = prompt("Ingrese un número entero largo:");

// Validar entrada del usuario
if (entrada === null || entrada.trim() === "") {
    alert("Error: Entrada vacía o cancelada.");
} else {
    // Filtrar la entrada para quedarse únicamente con los dígitos numéricos (0-9)
    // Esto descarta signos negativos (-) o caracteres no válidos
    let digitos = entrada.replace(/\D/g, "");

    if (digitos.length === 0) {
        alert("Error: El texto ingresado no contiene dígitos numéricos.");
    } else {
        let pares = 0;
        let impares = 0;

        // Bucle para recorrer cada carácter (dígito) del número
        for (let i = 0; i < digitos.length; i++) {
            // Obtener el dígito en la posición actual y convertirlo a entero
            let digito = parseInt(digitos.charAt(i));

            // Evaluar si es par o impar
            if (digito % 2 === 0) {
                pares++;
            } else {
                impares++;
            }
        }

        // Mostrar el resumen de los resultados
        alert("Análisis de Dígitos:\n" +
            "Número analizado: " + entrada + "\n" +
            "-----------------------------------\n" +
            "Cantidad total de dígitos: " + digitos.length + "\n" +
            "Dígitos PARES: " + pares + "\n" +
            "Dígitos IMPARES: " + impares);
    }
}
