// Bucle externo: Iterar por los números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log("=================================");
    console.log("     TABLA DE MULTIPLICAR DEL " + i);
    console.log("=================================");

    // Bucle interno: Multiplicadores del 1 al 12
    for (let j = 1; j <= 12; j++) {
        let resultado = i * j;
        console.log(i + " x " + j + " = " + resultado);
    }

    // Imprimir un espacio en blanco para separar visualmente cada bloque de tabla
    console.log("\n");
}

// Nota: Puedes abrir la Consola del Desarrollador en tu navegador (F12) o ejecutar este script en Node.js para ver las tablas impresas en bloques.
