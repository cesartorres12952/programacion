// Solicitar el año de nacimiento
let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento (ej. 2005):"));

// Obtener el año actual dinámicamente
let añoActual = new Date().getFullYear();

// Validar que el año ingresado sea válido
if (isNaN(añoNacimiento) || añoNacimiento <= 0 || añoNacimiento > añoActual) {
    alert("Error: Por favor, ingrese un año de nacimiento válido.");
} else {
    // 1. Determinar si el año es bisiesto
    let añoBisiesto = false;

    // Un año es bisiesto si es divisible por 4 y no por 100, o si es divisible por 400
    if ((añoNacimiento % 4 === 0 && añoNacimiento % 100 !== 0) || (añoNacimiento % 400 === 0)) {
        añoBisiesto = true;
    }

    // 2. Calcular la edad del usuario
    let edad = añoActual - añoNacimiento;

    // 3. Verificar si es mayor de edad (18 años o más)
    let esMayor = edad >= 18;

    // Determinar mensajes finales
    let mensajeBisiesto = "";
    if (añoBisiesto) {
        mensajeBisiesto = "Naciste en un año bisiesto.";
    } else {
        mensajeBisiesto = "No naciste en un año bisiesto.";
    }

    let mensajeEdad = "";
    if (esMayor) {
        mensajeEdad = "Tienes " + edad + " años, por lo tanto eres MAYOR de edad.";
    } else {
        mensajeEdad = "Tienes " + edad + " años, por lo tanto eres MENOR de edad.";
    }

    // Mostrar los resultados al usuario
    alert("Resultados:\n- " + mensajeBisiesto + "\n- " + mensajeEdad);
}
