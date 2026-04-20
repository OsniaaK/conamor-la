/**
 * MÓDULO DE ANIMACIONES - XV AÑOS
 * Gestión de animaciones con ScrollReveal
 */

// ========== VARIABLES DEL MÓDULO ==========
let scrollRevealInstance = null;

/**
 * Inicializa las animaciones con ScrollReveal
 */
function inicializarAnimaciones() {
    if (!data.animaciones.scrollReveal) return;
    
    scrollRevealInstance = ScrollReveal({
        duration: data.animaciones.duracion,
        delay: data.animaciones.delay,
        distance: data.animaciones.distancia + 'px',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false
    });
    
    // Animar secciones
    scrollRevealInstance.reveal('.section-titulo', { origin: 'top' });
    scrollRevealInstance.reveal('.evento-item', { interval: 200 });
    scrollRevealInstance.reveal('.evento-botones .btn-primary, .evento-botones .btn-secondary', { interval: 100 });
    scrollRevealInstance.reveal('.mesa-card', { origin: 'bottom' });
    scrollRevealInstance.reveal('.companeros-lista li', { interval: 100 });
    scrollRevealInstance.reveal('.galeria-swiper', { origin: 'bottom' });
    scrollRevealInstance.reveal('.spotify-embed', { origin: 'bottom' });
    scrollRevealInstance.reveal('.dresscode-content', { origin: 'top' });
    scrollRevealInstance.reveal('.colores-paleta span', { interval: 100 });
    scrollRevealInstance.reveal('.cuenta-card', { interval: 200 });
    scrollRevealInstance.reveal('.instagram-link', { origin: 'bottom' });
}
