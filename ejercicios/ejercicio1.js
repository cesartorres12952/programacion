let nota = parseFloat(prompt("Ingrese su nota (0-20):"));
let asistencia = parseFloat(prompt("Ingrese su porcentaje de asistencia (0-100%):"));
// Evaluar condiciones de aprobación
if (nota >= 11 && asistencia >= 70) {
    // Verificar si cumple con los requisitos para mención especial
    if (nota > 17 && asistencia === 100) {
        alert("Resultado: APROBADO\n¡Mención especial por excelente rendimiento!");
    } else {
        alert("Resultado: APROBADO");
    }
} else {
    alert("Resultado: DESAPROBADO");
}