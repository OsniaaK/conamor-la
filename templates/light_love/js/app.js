document.addEventListener('DOMContentLoaded', () => {
    inicializarAplicacion();
});

function inicializarAplicacion() {
    aplicarColores();
    
    if (data.sistemaInvitadosActivo) {
        const invitadoGuardado = verificarInvitadoGuardado();
        
        if (invitadoGuardado) {
            mostrarBienvenida();
        } else {
            mostrarPantallaValidacion();
        }
    } else {
        cargarLandingDirectamente();
    }
    
    inicializarBotonCambiar();
}
function cargarLanding() {
    const landing = document.getElementById('landingPrincipal');
    landing.classList.remove('hidden');
    cargarContenidoDinamico();
    inicializarContador();
    inicializarGaleria();
    inicializarAnimaciones();
    window.scrollTo(0, 0);
}

function cargarLandingDirectamente() {
    const landing = document.getElementById('landingPrincipal');
    landing.classList.remove('hidden');
    cargarContenidoDinamico();
    inicializarContador();
    inicializarGaleria();
    inicializarAnimaciones();
}

window.addEventListener('beforeunload', () => {
    detenerContador();
    destruirGaleria();
});
