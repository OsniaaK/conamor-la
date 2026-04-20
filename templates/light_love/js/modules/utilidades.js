/**
 * MÓDULO DE UTILIDADES - XV AÑOS
 * Funciones utilitarias reutilizables
 */

/**
 * Formatea una fecha en formato legible
 * @param {string} fecha - Fecha en formato YYYY-MM-DD
 * @returns {string} - Fecha formateada en español
 */
function formatearFecha(fecha) {
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const fechaObj = new Date(fecha + 'T00:00:00');
    return fechaObj.toLocaleDateString('es-ES', opciones);
}

/**
 * Formatea un número a dos dígitos
 * @param {number} numero - Número a formatear
 * @returns {string} - Número con dos dígitos
 */
function formatearNumero(numero) {
    return numero.toString().padStart(2, '0');
}

/**
 * Aplica los colores desde data.js a las variables CSS
 */
function aplicarColores() {
    const root = document.documentElement;
    root.style.setProperty('--color-primario', data.colores.primario);
    root.style.setProperty('--color-secundario', data.colores.secundario);
    root.style.setProperty('--color-acento', data.colores.acento);
    root.style.setProperty('--color-texto', data.colores.texto);
    root.style.setProperty('--color-texto-claro', data.colores.textoClaro);
    root.style.setProperty('--color-fondo', data.colores.fondo);
    root.style.setProperty('--color-blanco', data.colores.blanco);
}
