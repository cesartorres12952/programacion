// Solicitar credenciales y rol al usuario
let usuario = prompt("Ingrese su usuario:");
let contrasena = prompt("Ingrese su contraseña:");
let rol = prompt("Ingrese su rol (admin, editor, visitante):");
// Normalizar la entrada del rol si no es nula
if (rol !== null) {
    rol = rol.toLowerCase().trim();
}
// Variables de estado
let credencialesValidas = false;
let permisos = "";
// Lógica anidada para validar credenciales y asignar permisos según el rol
if (rol === "admin") {
    // Validación para Administrador
    if (usuario === "admin" && contrasena === "admin123") {
        credencialesValidas = true;
        permisos = "Acceso Total: Crear, Leer, Modificar y Eliminar todo el contenido.";
    } else {
        alert("Error: Credenciales incorrectas para el rol Admin.");
    }
} else if (rol === "editor") {
    // Validación para Editor
    if (usuario === "editor" && contrasena === "editor123") {
        credencialesValidas = true;
        permisos = "Acceso de Edición: Crear, Leer y Modificar contenido.";
    } else {
        alert("Error: Credenciales incorrectas para el rol Editor.");
    }
} else if (rol === "visitante") {
    // Validación para Visitante
    if (usuario === "visitante" && contrasena === "visitante123") {
        credencialesValidas = true;
        permisos = "Acceso Limitado: Solo lectura de contenido.";
    } else {
        alert("Error: Credenciales incorrectas para el rol Visitante.");
    }
} else {
    alert("Error: Rol no válido. Intente con 'admin', 'editor' o 'visitante'.");
}
// Mostrar resultado final
if (credencialesValidas) {
    alert("¡Bienvenido, " + usuario + "!\nRol: " + rol.toUpperCase() + "\nPermisos: " + permisos);
} else {
    alert("Acceso denegado: Por favor verifique sus datos.");
}