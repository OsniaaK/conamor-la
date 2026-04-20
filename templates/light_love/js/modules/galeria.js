/**
 * MÓDULO DE GALERÍA - XV AÑOS
 * Gestión de la galería de fotos con Swiper
 */

// ========== VARIABLES DEL MÓDULO ==========
let swiper = null;

/**
 * Carga las imágenes de la galería
 */
function cargarGaleria() {
    if (data.galeriaConfig.usarGrid) {
        // Usar grid layout con scroll horizontal
        const grid = document.getElementById('galeriaGrid');
        grid.innerHTML = data.galeria
            .map((url, index) => {
                // Alternar entre tamaños: cuadrada, rectangular-horizontal, normal
                let clase = '';
                if (index % 3 === 0) {
                    clase = 'cuadrada';
                } else if (index % 3 === 1) {
                    clase = 'rectangular-horizontal';
                }
                return `
                    <div class="galeria-item ${clase}">
                        <img src="${url}" alt="Foto galería" loading="lazy">
                    </div>
                `;
            })
            .join('');
    } else {
        // Usar swiper
        const wrapper = document.getElementById('galeriaWrapper');
        wrapper.innerHTML = data.galeria
            .map(url => `
                <div class="swiper-slide">
                    <img src="${url}" alt="Foto galería" loading="lazy">
                </div>
            `)
            .join('');
    }
}

/**
 * Inicializa la galería con Swiper (solo si no está en modo grid)
 */
function inicializarGaleria() {
    if (!data.galeriaConfig.usarGrid) {
        swiper = new Swiper('.galeria-swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: data.galeriaConfig.autoplay,
            speed: data.galeriaConfig.speed,
            loop: data.galeriaConfig.loop,
            grabCursor: data.galeriaConfig.grabCursor,
            effect: data.galeriaConfig.effect,
            slidesPerView: data.galeriaConfig.slidesPerView,
            spaceBetween: data.galeriaConfig.spaceBetween,
            breakpoints: data.galeriaConfig.breakpoints
        });
    }
}

/**
 * Destruye la instancia de Swiper
 */
function destruirGaleria() {
    if (swiper) {
        swiper.destroy();
        swiper = null;
    }
}
