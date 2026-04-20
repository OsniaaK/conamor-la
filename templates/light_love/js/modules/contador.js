/**
 * MÓDULO DE CONTADOR REGRESIVO - XV AÑOS
 * Gestión del contador regresivo del evento
 */

// ========== VARIABLES DEL MÓDULO ==========
let contadorInterval = null;

/**
 * Inicializa el contador regresivo
 */
function inicializarContador() {
    actualizarContador();
    contadorInterval = setInterval(actualizarContador, 1000);
}

/**
 * Actualiza el contador regresivo
 */
function actualizarContador() {
    const fechaEvento = new Date(`${data.fechaEvento.fecha}T${data.fechaEvento.hora}:00`);
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;
    
    if (diferencia <= 0) {
        // El evento ya ocurrió
        detenerContador();
        document.getElementById('contadorDias').textContent = '00';
        document.getElementById('contadorHoras').textContent = '00';
        document.getElementById('contadorMinutos').textContent = '00';
        document.getElementById('contadorSegundos').textContent = '00';
        return;
    }
    
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    document.getElementById('contadorDias').textContent = formatearNumero(dias);
    document.getElementById('contadorHoras').textContent = formatearNumero(horas);
    document.getElementById('contadorMinutos').textContent = formatearNumero(minutos);
    document.getElementById('contadorSegundos').textContent = formatearNumero(segundos);
}

/**
 * Detiene el contador regresivo
 */
function detenerContador() {
    if (contadorInterval) {
        clearInterval(contadorInterval);
        contadorInterval = null;
    }
}
