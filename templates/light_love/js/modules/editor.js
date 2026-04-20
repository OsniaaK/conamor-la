// ========== MÓDULO DE EDICIÓN EN TIEMPO REAL ==========

const Editor = {
    activo: false,
    cambios: {},
    datosOriginales: {},

    // Inicializar editor
    inicializar: function() {
        // Verificar si estamos en modo edición (desde el padre)
        window.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'activarEdicion') {
                this.activar();
            }
            if (event.data && event.data.type === 'desactivarEdicion') {
                this.desactivar();
            }
            if (event.data && event.data.type === 'limpiarCambios') {
                this.limpiarCambios();
            }
            if (event.data && event.data.type === 'limpiarColores') {
                this.limpiarColores();
            }
            if (event.data && event.data.type === 'toggleSeccion') {
                this.toggleSeccion(event.data.section, event.data.visible);
            }
            if (event.data && event.data.type === 'cambiarColor') {
                this.cambiarColor(event.data.color, event.data.value);
            }
            if (event.data && event.data.type === 'resetearColor') {
                this.resetearColor(event.data.color);
            }
        });

        // Cargar cambios guardados
        this.cargarCambios();

        // Aplicar cambios guardados a los elementos
        this.aplicarCambios();

        // Cargar colores guardados
        this.cargarColores();
    },

    // Activar modo edición
    activar: function() {
        this.activo = true;
        this.datosOriginales = JSON.parse(JSON.stringify(data)); // Copia profunda

        // Agregar estilos de edición
        document.body.classList.add('modo-edicion');

        // Hacer elementos editables
        const editables = document.querySelectorAll('[data-editable]');
        editables.forEach(elemento => {
            elemento.classList.add('editable');
            elemento.setAttribute('contenteditable', 'true');
            elemento.addEventListener('blur', () => this.guardarCambio(elemento));
            elemento.addEventListener('focus', () => this.mostrarIndicador(elemento));
        });

        // Notificar al padre que el editor está activo
        window.parent.postMessage({ type: 'editorActivo' }, '*');
    },

    // Desactivar modo edición
    desactivar: function() {
        this.activo = false;

        // Remover estilos de edición
        document.body.classList.remove('modo-edicion');

        // Quitar contenteditable
        const editables = document.querySelectorAll('[data-editable]');
        editables.forEach(elemento => {
            elemento.classList.remove('editable');
            elemento.removeAttribute('contenteditable');
            elemento.removeEventListener('blur', () => this.guardarCambio(elemento));
            elemento.removeEventListener('focus', () => this.mostrarIndicador(elemento));
        });

        // Notificar al padre que el editor está desactivado
        window.parent.postMessage({ type: 'editorDesactivado', cambios: this.cambios }, '*');
    },

    // Guardar cambio de un elemento
    guardarCambio: function(elemento) {
        if (!this.activo) return;

        const field = elemento.getAttribute('data-field');
        const valor = elemento.innerText.trim();
        const valorOriginal = this.obtenerValorOriginal(field);

        // Solo guardar si cambió
        if (valor !== valorOriginal) {
            this.cambios[field] = valor;
            this.guardarEnLocalStorage();
            
            // Notificar al padre del cambio
            window.parent.postMessage({ 
                type: 'cambioGuardado', 
                field: field, 
                valor: valor 
            }, '*');
        } else {
            // Si volvió al valor original, eliminar de cambios
            delete this.cambios[field];
            this.guardarEnLocalStorage();
        }
    },

    // Obtener valor original del campo
    obtenerValorOriginal: function(field) {
        const keys = field.split('.');
        let valor = this.datosOriginales;
        
        for (const key of keys) {
            valor = valor[key];
            if (valor === undefined) return '';
        }
        
        return String(valor);
    },

    // Mostrar indicador visual al hacer focus
    mostrarIndicador: function(elemento) {
        // Agregar clase temporal para indicar que se está editando
        elemento.classList.add('editando');
        setTimeout(() => {
            elemento.classList.remove('editando');
        }, 2000);
    },

    // Guardar cambios en localStorage
    guardarEnLocalStorage: function() {
        const pathParts = window.location.pathname.split('/');
        const templateName = pathParts[pathParts.length - 2] || 'light_love';
        const key = `template_${templateName}_cambios`;
        localStorage.setItem(key, JSON.stringify(this.cambios));
    },

    // Cargar cambios desde localStorage
    cargarCambios: function() {
        const pathParts = window.location.pathname.split('/');
        const templateName = pathParts[pathParts.length - 2] || 'light_love';
        const key = `template_${templateName}_cambios`;
        const guardados = localStorage.getItem(key);

        if (guardados) {
            try {
                this.cambios = JSON.parse(guardados);
                // Aplicar cambios al objeto data global
                this.aplicarCambiosAData();
            } catch (e) {
                this.cambios = {};
            }
        }
    },

    // Aplicar cambios guardados al objeto data
    aplicarCambiosAData: function() {
        Object.keys(this.cambios).forEach(field => {
            const valor = this.cambios[field];
            const keys = field.split('.');
            let obj = data;
            
            for (let i = 0; i < keys.length - 1; i++) {
                if (obj[keys[i]] !== undefined) {
                    obj = obj[keys[i]];
                }
            }
            
            if (keys.length > 0 && obj[keys[keys.length - 1]] !== undefined) {
                obj[keys[keys.length - 1]] = valor;
            }
        });
    },

    // Aplicar cambios guardados a los elementos DOM
    aplicarCambios: function() {
        Object.keys(this.cambios).forEach(field => {
            const valor = this.cambios[field];
            const elemento = document.querySelector(`[data-field="${field}"]`);

            if (elemento) {
                elemento.innerText = valor;
            }
        });
    },

    // Obtener todos los cambios
    obtenerCambios: function() {
        return this.cambios;
    },

    // Limpiar todos los cambios
    limpiarCambios: function() {
        this.cambios = {};
        const pathParts = window.location.pathname.split('/');
        const templateName = pathParts[pathParts.length - 2] || 'light_love';
        const key = `template_${templateName}_cambios`;
        localStorage.removeItem(key);

        // Recargar página para aplicar valores originales
        window.location.reload();
    },

    // Toggle visibilidad de sección
    toggleSeccion: function(section, visible) {
        const sectionMap = {
            dressCode: 'dresscode',
            regalos: 'regalos',
            instagram: 'instagram',
            spotify: 'spotify'
        };

        const sectionId = sectionMap[section];
        if (!sectionId) return;

        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            if (visible) {
                sectionElement.classList.remove('hidden');
            } else {
                sectionElement.classList.add('hidden');
            }
            // Enviar altura actualizada al padre
            setTimeout(() => {
                const height = document.body.scrollHeight;
                window.parent.postMessage({ type: 'resize', height }, '*');
            }, 100);
        }
    },

    // Toggle galería grid/slider
    toggleGaleriaGrid: function(usarGrid) {
        if (typeof data !== 'undefined' && data.galeriaConfig) {
            data.galeriaConfig.usarGrid = usarGrid;
            // Recargar la galería para aplicar el cambio
            if (typeof destruirGaleria === 'function') {
                destruirGaleria();
            }
            if (typeof cargarGaleria === 'function') {
                cargarGaleria();
            }
            if (typeof inicializarGaleria === 'function') {
                inicializarGaleria();
            }
            // Enviar altura actualizada al padre
            setTimeout(() => {
                const height = document.body.scrollHeight;
                window.parent.postMessage({ type: 'resize', height }, '*');
            }, 100);
        }
    },

    // Cambiar color del template
    cambiarColor: function(colorKey, value) {
        if (typeof data !== 'undefined' && data.colores) {
            data.colores[colorKey] = value;
            // Aplicar el color a la variable CSS correspondiente
            const colorVarMap = {
                primario: '--color-primario',
                secundario: '--color-secundario',
                acento: '--color-acento',
                texto: '--color-texto',
                textoClaro: '--color-texto-claro',
                fondo: '--color-fondo',
                blanco: '--color-blanco'
            };

            const cssVar = colorVarMap[colorKey];
            if (cssVar) {
                document.documentElement.style.setProperty(cssVar, value);
            }
            // Guardar colores en localStorage
            this.guardarColores();
        }

        // Manejar colores del dresscode
        if (colorKey.startsWith('dresscode')) {
            if (typeof data !== 'undefined' && data.dressCode && data.dressCode.colores) {
                const index = parseInt(colorKey.replace('dresscode', '')) - 1;
                if (index >= 0 && index < data.dressCode.colores.length) {
                    data.dressCode.colores[index] = value;
                    // Actualizar elementos del dresscode
                    this.actualizarColoresDresscode();
                    this.guardarColores();
                }
            }
        }
    },

    // Actualizar colores del dresscode en el DOM
    actualizarColoresDresscode: function() {
        if (typeof data !== 'undefined' && data.dressCode && data.dressCode.colores) {
            const colorElements = document.querySelectorAll('[data-dresscode-color]');
            colorElements.forEach((element, index) => {
                if (data.dressCode.colores[index]) {
                    element.style.backgroundColor = data.dressCode.colores[index];
                }
            });
        }
    },

    // Guardar colores en localStorage
    guardarColores: function() {
        const pathParts = window.location.pathname.split('/');
        const templateName = pathParts[pathParts.length - 2] || 'light_love';
        const key = `template_${templateName}_colores`;
        localStorage.setItem(key, JSON.stringify(data.colores));
    },

    // Cargar colores desde localStorage
    cargarColores: function() {
        const pathParts = window.location.pathname.split('/');
        const templateName = pathParts[pathParts.length - 2] || 'light_love';
        const key = `template_${templateName}_colores`;
        const guardados = localStorage.getItem(key);

        if (guardados) {
            try {
                const coloresGuardados = JSON.parse(guardados);
                // Aplicar colores guardados al objeto data
                if (typeof data !== 'undefined' && data.colores) {
                    Object.assign(data.colores, coloresGuardados);
                    // Aplicar colores a las variables CSS
                    const colorVarMap = {
                        primario: '--color-primario',
                        secundario: '--color-secundario',
                        acento: '--color-acento',
                        texto: '--color-texto',
                        textoClaro: '--color-texto-claro',
                        fondo: '--color-fondo',
                        blanco: '--color-blanco'
                    };

                    Object.keys(coloresGuardados).forEach(colorKey => {
                        const cssVar = colorVarMap[colorKey];
                        if (cssVar && coloresGuardados[colorKey]) {
                            document.documentElement.style.setProperty(cssVar, coloresGuardados[colorKey]);
                        }
                    });
                }

                // Cargar colores del dresscode
                if (typeof data !== 'undefined' && data.dressCode && data.dressCode.colores) {
                    const dresscodeColors = ['dresscode1', 'dresscode2', 'dresscode3', 'dresscode4'];
                    dresscodeColors.forEach((key, index) => {
                        if (coloresGuardados[key]) {
                            data.dressCode.colores[index] = coloresGuardados[key];
                        }
                    });
                    this.actualizarColoresDresscode();
                }
            } catch (e) {
                console.error('Error loading colors:', e);
            }
        }
    },

    // Resetear color individual
    resetearColor: function(colorKey) {
        const defaultColors = {
            primario: '#E8B4B8',
            secundario: '#F5E6E8',
            acento: '#D4A5A5',
            texto: '#4A4A4A',
            textoClaro: '#7A7A7A',
            fondo: '#FFFEFE',
            blanco: '#FFFFFF',
            dresscode1: '#E8B4B8',
            dresscode2: '#F5E6E8',
            dresscode3: '#D4A5A5',
            dresscode4: '#C9A0A0'
        };

        if (defaultColors[colorKey]) {
            this.cambiarColor(colorKey, defaultColors[colorKey]);
        }
    },

    // Limpiar todos los colores
    limpiarColores: function() {
        const defaultColors = {
            primario: '#E8B4B8',
            secundario: '#F5E6E8',
            acento: '#D4A5A5',
            texto: '#4A4A4A',
            textoClaro: '#7A7A7A',
            fondo: '#FFFEFE',
            blanco: '#FFFFFF',
            dresscode1: '#E8B4B8',
            dresscode2: '#F5E6E8',
            dresscode3: '#D4A5A5',
            dresscode4: '#C9A0A0'
        };

        // Resetear todos los colores a valores por defecto
        Object.keys(defaultColors).forEach(colorKey => {
            this.cambiarColor(colorKey, defaultColors[colorKey]);
        });

        // Eliminar colores del localStorage
        const pathParts = window.location.pathname.split('/');
        const templateName = pathParts[pathParts.length - 2] || 'light_love';
        const key = `template_${templateName}_colores`;
        localStorage.removeItem(key);
    }
};

// Inicializar cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    Editor.inicializar();
});

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Editor;
}
