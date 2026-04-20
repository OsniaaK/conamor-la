/**
 * MÓDULO DE CONTENIDO DINÁMICO - XV AÑOS
 * Carga de contenido dinámico desde data.js
 */

/**
 * Carga todo el contenido dinámico desde data.js
 */
function cargarContenidoDinamico() {
    cargarHero();
    cargarFrase();
    cargarContadorLabels();
    cargarEvento();
    cargarInfoMesa();
    cargarGaleriaTitulo();
    cargarSpotify();
    cargarDressCode();
    cargarRegalos();
    cargarInstagram();
}

/**
 * Carga el contenido del hero
 */
function cargarHero() {
    document.getElementById('heroNombre').textContent = data.nombre;
    document.getElementById('heroSubtitulo').textContent = data.subtitulo;
    
    // Mostrar mesa si hay invitado validado
    const invitadoActual = getInvitadoActual();
    if (invitadoActual) {
        const heroMesa = document.getElementById('heroMesa');
        heroMesa.classList.remove('hidden');
        heroMesa.querySelector('.mesa-label').textContent = data.mensajes.mesa;
        heroMesa.querySelector('.mesa-numero').textContent = invitadoActual.mesa;
        
        // Mostrar botón de cambiar invitado
        const btnCambiarInvitado = document.getElementById('btnCambiarInvitado');
        btnCambiarInvitado.classList.remove('hidden');
    }
}

/**
 * Carga la frase
 */
function cargarFrase() {
    document.getElementById('fraseTexto').textContent = data.frase;
}

/**
 * Carga los labels del contador
 */
function cargarContadorLabels() {
    document.getElementById('labelDias').textContent = data.mensajes.dias;
    document.getElementById('labelHoras').textContent = data.mensajes.horas;
    document.getElementById('labelMinutos').textContent = data.mensajes.minutos;
    document.getElementById('labelSegundos').textContent = data.mensajes.segundos;
}

/**
 * Carga la información del evento
 */
function cargarEvento() {
    document.getElementById('eventoTitulo').textContent = data.secciones.evento;
    document.getElementById('eventoFecha').textContent = formatearFecha(data.fechaEvento.fecha);
    document.getElementById('eventoHora').textContent = `${data.fechaEvento.hora} - ${data.fechaEvento.horaFin}`;
    document.getElementById('eventoLugar').textContent = data.ubicacion.nombre;
    document.getElementById('eventoDireccion').textContent = data.ubicacion.direccion;
    
    // Botones de evento
    document.getElementById('btnGoogleMaps').href = data.ubicacion.googleMapsUrl;
    document.getElementById('btnGoogleMaps').querySelector('.btn-text').textContent = data.mensajes.comoLlegar;
    document.getElementById('btnCalendario').href = data.links.agendarCalendario;
    document.getElementById('btnCalendario').querySelector('.btn-text').textContent = data.mensajes.agendar;
    document.getElementById('btnConfirmar').href = data.links.confirmarAsistencia;
    document.getElementById('btnConfirmar').querySelector('.btn-text').textContent = data.mensajes.confirmar;
}

/**
 * Carga la información de la mesa
 */
function cargarInfoMesa() {
    const invitadoActual = getInvitadoActual();
    if (!invitadoActual) return;
    
    const infoMesa = document.getElementById('infoMesa');
    infoMesa.classList.remove('hidden');
    
    const mesaCard = document.querySelector('.mesa-card');
    mesaCard.querySelector('.mesa-card-numero').textContent = invitadoActual.mesa;
    mesaCard.querySelector('.mesa-card-nombre').textContent = invitadoActual.nombreMesa;
    
    // Cargar compañeros de mesa
    const listaCompaneros = document.getElementById('listaCompaneros');
    const companeros = invitados.obtenerInvitadosMesa(invitadoActual.mesa);
    
    listaCompaneros.innerHTML = companeros
        .filter(c => c.id !== invitadoActual.id)
        .map(c => `<li>${c.nombre}</li>`)
        .join('');
}

/**
 * Carga el título de la galería
 */
function cargarGaleriaTitulo() {
    document.getElementById('galeriaTitulo').textContent = data.secciones.galeria;
    cargarGaleria();
}

/**
 * Carga el contenido de Spotify
 */
function cargarSpotify() {
    if (data.spotify.activo) {
        const spotifySection = document.getElementById('spotify');
        spotifySection.classList.remove('hidden');
        document.getElementById('spotifyTitulo').textContent = data.spotify.titulo;
        document.getElementById('spotifyIframe').src = data.spotify.embedUrl;
    }
}

/**
 * Carga el contenido del dress code
 */
function cargarDressCode() {
    if (data.dressCode.activo) {
        const dresscodeSection = document.getElementById('dresscode');
        dresscodeSection.classList.remove('hidden');
        document.getElementById('dresscodeTitulo').textContent = data.dressCode.titulo;
        document.getElementById('dresscodeDescripcion').textContent = data.dressCode.descripcion;
        document.getElementById('dresscodeNota').textContent = data.dressCode.nota;
        cargarPaletaColores();
    }
}

/**
 * Carga la paleta de colores del dress code
 */
function cargarPaletaColores() {
    const paleta = document.getElementById('dresscodePaleta');
    paleta.innerHTML = data.dressCode.colores
        .map((color, index) => `<span style="background-color: ${color};" title="${color}" data-dresscode-color="${index}"></span>`)
        .join('');
}

/**
 * Carga el contenido de regalos
 */
function cargarRegalos() {
    if (data.regalos.activo) {
        const regalosSection = document.getElementById('regalos');
        regalosSection.classList.remove('hidden');
        document.getElementById('regalosTitulo').textContent = data.regalos.titulo;
        document.getElementById('regalosDescripcion').textContent = data.regalos.descripcion;
        document.getElementById('regalosMensajeFinal').textContent = data.regalos.mensajeFinal;
        cargarCuentasBancarias();
    }
}

/**
 * Carga las cuentas bancarias
 */
function cargarCuentasBancarias() {
    const container = document.getElementById('regalosCuentas');
    container.innerHTML = data.regalos.cuentas
        .map(cuenta => `
            <div class="cuenta-card">
                <h4>${cuenta.banco}</h4>
                <p>${cuenta.tipo}</p>
                <p><span class="cbu">${cuenta.cbu}</span></p>
                <p>Alias: <span class="alias">${cuenta.alias}</span></p>
                <p>Titular: ${cuenta.titular}</p>
            </div>
        `)
        .join('');
}

/**
 * Carga el contenido de Instagram
 */
function cargarInstagram() {
    if (data.instagram.activo) {
        const instagramSection = document.getElementById('instagram');
        if (instagramSection) {
            instagramSection.classList.remove('hidden');
            const instagramLink = document.getElementById('instagramLink');
            if (instagramLink) {
                instagramLink.href = data.instagram.url;
                const handle = instagramLink.querySelector('.instagram-handle');
                if (handle) {
                    handle.textContent = `@${data.instagram.usuario}`;
                }
            }
            const hashtagElement = document.getElementById('instagramHashtag');
            if (hashtagElement) {
                hashtagElement.textContent = data.instagram.hashtag;
            }
        }
    }
}
