// Solicitar datos del producto al usuario
let nombre = prompt("Ingrese el nombre del producto:");
let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let categoria = prompt("Ingrese la categoría (tecnología, alimentos, ropa):");

// Normalizar la categoría
if (categoria !== null) {
    categoria = categoria.toLowerCase().trim();
}

// Validar que los datos ingresados sean válidos
if (!nombre || isNaN(precio) || precio < 0 || !categoria) {
    alert("Error: Por favor, ingrese datos válidos.");
} else {
    let impuestoPorcentaje = 0;
    let clasificacion = "";

    // Evaluar clasificación e impuestos según categoría y precio
    if (categoria === "tecnología") {
        if (precio > 500) {
            clasificacion = "Tecnología de Lujo";
            impuestoPorcentaje = 18; // 18% de impuesto
        } else {
            clasificacion = "Tecnología Estándar";
            impuestoPorcentaje = 12; // 12% de impuesto
        }
    } else if (categoria === "alimentos") {
        if (precio > 100) {
            clasificacion = "Alimentos Premium";
            impuestoPorcentaje = 5;  // 5% de impuesto
        } else {
            clasificacion = "Alimentos de Canasta Básica";
            impuestoPorcentaje = 0;  // Exento de impuesto (0%)
        }
    } else if (categoria === "ropa") {
        if (precio > 150) {
            clasificacion = "Ropa de Diseñador / Lujo";
            impuestoPorcentaje = 15; // 15% de impuesto
        } else {
            clasificacion = "Ropaje Básico";
            impuestoPorcentaje = 8;  // 8% de impuesto
        }
    } else {
        // En caso de ingresar otra categoría no listada
        clasificacion = "Genérico";
        impuestoPorcentaje = 10;     // 10% impuesto por defecto
    }

    // Calcular el monto de impuesto y el total final
    let impuestoMonto = precio * (impuestoPorcentaje / 100);
    let precioTotal = precio + impuestoMonto;

    // Mostrar el desglose de resultados al usuario
    alert("Resumen de Producto:\n" +
        "-----------------------------------\n" +
        "Producto: " + nombre + "\n" +
        "Categoría: " + categoria.toUpperCase() + "\n" +
        "Clasificación: " + clasificacion + "\n" +
        "Precio Base: $" + precio.toFixed(2) + "\n" +
        "Impuesto (" + impuestoPorcentaje + "%): $" + impuestoMonto.toFixed(2) + "\n" +
        "Precio Final: $" + precioTotal.toFixed(2));
}
