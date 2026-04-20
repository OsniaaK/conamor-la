/**
 * MÓDULO DE VALIDACIÓN DE INVITADOS - XV AÑOS
 * Sistema de validación y gestión de invitados
 */

// ========== VARIABLES DEL MÓDULO ==========
let invitadoActual = null;
const STORAGE_KEY = 'xv_invitado_id';

/**
 * Obtiene el invitado actual
 * @returns {Object|null} - Datos del invitado actual
 */
function getInvitadoActual() {
    return invitadoActual;
}

/**
 * Establece el invitado actual
 * @param {Object} invitado - Datos del invitado
 */
function setInvitadoActual(invitado) {
    invitadoActual = invitado;
}

/**
 * Muestra la pantalla de validación de invitados
 */
function mostrarPantallaValidacion() {
    const pantalla = document.getElementById('pantallaValidacion');
    const titulo = document.getElementById('validacionTitulo');
    const subtitulo = document.getElementById('validacionSubtitulo');
    const input = document.getElementById('inputInvitado');
    const btnValidar = document.getElementById('btnValidar');
    
    // Configurar textos
    titulo.textContent = data.nombre;
    subtitulo.textContent = data.subtitulo;
    
    // Mostrar pantalla
    pantalla.classList.remove('hidden');
    
    // Event listeners
    btnValidar.addEventListener('click', validarInvitado);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            validarInvitado();
        }
    });
    
    // Enfocar input
    setTimeout(() => input.focus(), 500);
}

/**
 * Valida el número de invitado ingresado
 */
function validarInvitado() {
    const input = document.getElementById('inputInvitado');
    const mensajeError = document.getElementById('mensajeError');
    const id = input.value.trim();
    
    // Validar que no esté vacío
    if (!id) {
        mostrarError('Por favor, ingresa tu número de invitado');
        return;
    }
    
    // Buscar invitado
    const invitado = invitados.buscarInvitado(id);
    
    if (invitado) {
        // Invitado válido - guardar en localStorage
        setInvitadoActual(invitado);
        localStorage.setItem(STORAGE_KEY, id);
        mensajeError.classList.add('hidden');
        mostrarBienvenida();
    } else {
        // Invitado no encontrado
        mostrarError(data.mensajes.invitadoNoEncontrado);
        input.value = '';
        input.focus();
    }
}

/**
 * Muestra mensaje de error en la validación
 * @param {string} mensaje - Mensaje de error
 */
function mostrarError(mensaje) {
    const mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = mensaje;
    mensajeError.classList.remove('hidden');
    
    // Reiniciar animación
    mensajeError.style.animation = 'none';
    setTimeout(() => {
        mensajeError.style.animation = 'shake 0.5s ease';
    }, 10);
}

/**
 * Muestra la pantalla de bienvenida con animación
 */
function mostrarBienvenida() {
    const pantallaValidacion = document.getElementById('pantallaValidacion');
    const pantallaBienvenida = document.getElementById('pantallaBienvenida');
    const nombre = document.getElementById('bienvenidaNombre');
    const mesa = document.getElementById('bienvenidaMesa');
    
    // Configurar textos - solo nombre, sin mesa
    nombre.textContent = `${data.mensajes.bienvenida}, ${invitadoActual.nombre}!`;
    mesa.classList.add('hidden'); // Ocultar información de mesa en bienvenida
    
    // Ocultar validación y mostrar bienvenida
    pantallaValidacion.classList.add('hidden');
    pantallaBienvenida.classList.remove('hidden');
    
    // Después de la animación, cargar la landing
    setTimeout(() => {
        pantallaBienvenida.classList.add('hidden');
        cargarLanding();
    }, 2500);
}

/**
 * Verifica si hay un invitado guardado en localStorage
 * @returns {Object|null} - Invitado guardado o null
 */
function verificarInvitadoGuardado() {
    const invitadoGuardado = localStorage.getItem(STORAGE_KEY);
    
    if (invitadoGuardado) {
        const invitado = invitados.buscarInvitado(invitadoGuardado);
        if (invitado) {
            setInvitadoActual(invitado);
            return invitado;
        } else {
            // Invitado guardado no válido
            localStorage.removeItem(STORAGE_KEY);
        }
    }
    
    return null;
}

/**
 * Cambia el número de invitado (borra localStorage y recarga)
 */
function cambiarInvitado() {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
}

/**
 * Inicializa el botón de cambio de invitado
 */
function inicializarBotonCambiar() {
    const btnCambiarInvitado = document.getElementById('btnCambiarInvitado');
    if (btnCambiarInvitado) {
        btnCambiarInvitado.addEventListener('click', cambiarInvitado);
        
        // Mostrar botón si hay invitado actual
        if (invitadoActual) {
            btnCambiarInvitado.classList.remove('hidden');
        }
    }
}
