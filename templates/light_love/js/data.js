const data = {
    // ========== CONFIGURACIÓN GENERAL ==========
    sistemaInvitadosActivo: false, // true = requiere validación de invitado, false = acceso libre
    
    // ========== DATOS DE LA QUINCEAÑERA ==========
    nombre: "Ailín",
    subtitulo: "Mis 15 Años",
    
    // ========== FECHA Y HORA DEL EVENTO ==========
    fechaEvento: {
        fecha: "2028-05-17", // Formato: YYYY-MM-DD
        hora: "20:00", // Formato: HH:MM (24h)
        horaFin: "03:00" // Formato: HH:MM (24h)
    },
    
    // ========== FRASE PERSONAL ==========
    frase: "Un momento mágico que quiero compartir con las personas más especiales de mi vida",
    
    // ========== UBICACIÓN ==========
    ubicacion: {
        nombre: "Salón Los Arcos",
        direccion: "Av. Principal 123, Ciudad",
        googleMapsUrl: "https://maps.google.com/?q=Salon+Los+Arcos",
        coordenadas: {
            lat: -34.6037,
            lng: -58.3816
        }
    },
    
    // ========== LINKS DE ACCIÓN ==========
    links: {
        confirmarAsistencia: "https://wa.me/5491112345678?text=Hola,%20confirmo%20mi%20asistencia%20a%20los%2015%20años",
        agendarCalendario: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mis+15+Años&dates=20250614T200000Z/20250615T030000Z&details=Invitación%20a%20mis%2015%20años&location=Salón%20Los%20Arcos"
    },
    
    // ========== GALERÍA DE FOTOS ==========
    // URLs de imágenes (pueden ser locales o externas)
    galeria: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
        "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800",
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800"
    ],
    
    // ========== DRESS CODE ==========
    dressCode: {
        activo: true,
        titulo: "Dress Code",
        descripcion: "Elegante Sport",
        colores: ["#E8B4B8", "#F5E6E8", "#D4A5A5", "#C9A0A0"],
        nota: "Evitar color blanco"
    },
    
    // ========== DATOS BANCARIOS / REGALOS ==========
    regalos: {
        activo: true,
        titulo: "Regalos",
        descripcion: "Tu presencia es mi mayor regalo, pero si deseas hacerme un obsequio:",
        cuentas: [
            {
                banco: "Banco Galicia",
                tipo: "Caja de Ahorro",
                cbu: "0000003100000000000000",
                alias: "XV.AILIN",
                titular: "Ailín"
            },
            {
                banco: "Banco Nación",
                tipo: "Cuenta Corriente",
                cbu: "0000003100000000000001",
                alias: "MIS15.AILIN",
                titular: "Ailín"
            }
        ],
        mensajeFinal: "¡Gracias por ser parte de este momento especial!"
    },
    
    // ========== INSTAGRAM ==========
    instagram: {
        activo: true,
        usuario: "Tu Instagram",
        url: "https://instagram.com",
        hashtag: "#MariaSofia15"
    },
    
    // ========== SPOTIFY PLAYLIST ==========
    spotify: {
        activo: true,
        titulo: "Mi Playlist",
        embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
    },
    
    // ========== COLORES DEL TEMA ==========
    colores: {
        primario: "#E8B4B8",       // Rosa suave
        secundario: "#F5E6E8",     // Rosa muy claro
        acento: "#D4A5A5",         // Rosa medio
        texto: "#4A4A4A",          // Gris oscuro
        textoClaro: "#7A7A7A",     // Gris medio
        fondo: "#FFFEFE",         // Blanco casi puro
        blanco: "#FFFFFF"          // Blanco puro
    },
    
    // ========== CONFIGURACIÓN DE ANIMACIONES ==========
    animaciones: {
        scrollReveal: true,        // Activar animaciones al hacer scroll
        duracion: 1000,            // Duración en ms
        delay: 200,                // Delay entre elementos en ms
        distancia: 50              // Distancia de desplazamiento en px
    },
    
    // ========== CONFIGURACIÓN DE GALERÍA ==========
    galeriaConfig: {
        usarGrid: false,          // true = grid layout, false = swiper slider
        columnas: 3,              // Número de columnas en grid (móvil: 1, tablet: 2, desktop: 3)
        gap: 16,                  // Espacio entre fotos en px
        autoplay: {
            delay: 3000,           // Tiempo entre slides en ms (solo si usarGrid es false)
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        speed: 800,                // Velocidad de transición en ms (solo si usarGrid es false)
        loop: false,               // Loop infinito (solo si usarGrid es false)
        grabCursor: true,          // Cursor de agarre (solo si usarGrid es false)
        effect: "slide",           // slide, fade, cube, coverflow (solo si usarGrid es false)
        slidesPerView: 1,          // Slides visibles base (solo si usarGrid es false)
        spaceBetween: 20,          // Espacio entre slides (solo si usarGrid es false)
        breakpoints: {
            // Mobile: 2 slides
            0: {
                slidesPerView: 2,
                spaceBetween: 12
            },
            // Tablet: 2 slides
            768: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            // Desktop: 3 slides
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    },
    
    // ========== MENSAJES DEL SISTEMA ==========
    mensajes: {
        bienvenida: "¡Bienvenida!",
        invitadoNoEncontrado: "Número de invitado no encontrado. Por favor, verifica e intenta nuevamente.",
        errorGeneral: "Ha ocurrido un error. Por favor, intenta nuevamente.",
        mesa: "Mesa",
        confirmar: "Confirmar Asistencia",
        agendar: "Agendar en Calendario",
        comoLlegar: "Cómo llegar",
        dias: "Días",
        horas: "Horas",
        minutos: "Minutos",
        segundos: "Segundos"
    },
    
    // ========== TITULOS DE SECCIONES ==========
    secciones: {
        evento: "El Evento",
        galeria: "Galería",
        dressCode: "Dress Code",
        regalos: "Regalos",
        musica: "Música",
        contacto: "Contacto"
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = data;
}
