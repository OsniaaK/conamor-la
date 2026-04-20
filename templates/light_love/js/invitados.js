const invitados = {
    // ========== CONFIGURACIÓN DE MESAS ==========
    mesas: [
        {
            numero: 1,
            nombre: "Mesa Principal",
            invitados: [
                { id: "1", nombre: "María Sofía Pérez" },
                { id: "2", nombre: "Carlos Pérez" },
                { id: "3", nombre: "Ana García" }
            ]
        },
        {
            numero: 2,
            nombre: "Familia Materna",
            invitados: [
                { id: "4", nombre: "Roberto García" },
                { id: "5", nombre: "Laura García" },
                { id: "6", nombre: "Diego García" },
                { id: "7", nombre: "Sofía García" },
                { id: "8", nombre: "Martín García" }
            ]
        },
        {
            numero: 3,
            nombre: "Familia Paterna",
            invitados: [
                { id: "9", nombre: "Juan Pérez" },
                { id: "10", nombre: "María Pérez" },
                { id: "11", nombre: "Lucía Pérez" },
                { id: "12", nombre: "Tomás Pérez" }
            ]
        },
        {
            numero: 4,
            nombre: "Amigos del Colegio",
            invitados: [
                { id: "13", nombre: "Valentina Rodríguez" },
                { id: "14", nombre: "Camila López" },
                { id: "15", nombre: "Florencia Martínez" },
                { id: "16", nombre: "Julieta Sánchez" },
                { id: "17", nombre: "Micaela Fernández" },
                { id: "18", nombre: "Bianca González" }
            ]
        },
        {
            numero: 5,
            nombre: "Amigos del Club",
            invitados: [
                { id: "19", nombre: "Lucas Ramírez" },
                { id: "20", nombre: "Matías Silva" },
                { id: "21", nombre: "Nicolás Torres" },
                { id: "22", nombre: "Facundo Molina" },
                { id: "23", nombre: "Joaquín Ruiz" }
            ]
        },
        {
            numero: 6,
            nombre: "Familia Extendida",
            invitados: [
                { id: "24", nombre: "Carmen López" },
                { id: "25", nombre: "José López" },
                { id: "26", nombre: "Rosa Díaz" },
                { id: "27", nombre: "Pedro Díaz" }
            ]
        },
        {
            numero: 7,
            nombre: "Compañeros de Trabajo (Padres)",
            invitados: [
                { id: "28", nombre: "Alejandro Moreno" },
                { id: "29", nombre: "Patricia Moreno" },
                { id: "30", nombre: "Gustavo Castro" },
                { id: "31", nombre: "Andrea Castro" }
            ]
        },
        {
            numero: 8,
            nombre: "Vecinos",
            invitados: [
                { id: "32", nombre: "Oscar Romero" },
                { id: "33", nombre: "Graciela Romero" },
                { id: "34", nombre: "Héctor Vargas" },
                { id: "35", nombre: "Elena Vargas" },
                { id: "36", nombre: "Claudio Ortega" }
            ]
        }
    ],
    
    // ========== FUNCIONES DE VALIDACIÓN ==========
    
    /**
     * Busca un invitado por su ID
     * @param {string} id - ID del invitado a buscar
     * @returns {Object|null} - Objeto con datos del invitado y su mesa, o null si no existe
     */
    buscarInvitado: function(id) {
        for (const mesa of this.mesas) {
            const invitado = mesa.invitados.find(inv => inv.id === id);
            if (invitado) {
                return {
                    ...invitado,
                    mesa: mesa.numero,
                    nombreMesa: mesa.nombre
                };
            }
        }
        return null;
    },
    
    /**
     * Obtiene todos los IDs de invitados
     * @returns {Array} - Array con todos los IDs
     */
    obtenerTodosIds: function() {
        const ids = [];
        for (const mesa of this.mesas) {
            for (const invitado of mesa.invitados) {
                ids.push(invitado.id);
            }
        }
        return ids;
    },
    
    /**
     * Obtiene información de una mesa por su número
     * @param {number} numeroMesa - Número de mesa
     * @returns {Object|null} - Información de la mesa o null
     */
    obtenerMesa: function(numeroMesa) {
        return this.mesas.find(mesa => mesa.numero === numeroMesa) || null;
    },
    
    /**
     * Cuenta total de invitados
     * @returns {number} - Total de invitados
     */
    contarTotalInvitados: function() {
        return this.mesas.reduce((total, mesa) => total + mesa.invitados.length, 0);
    },
    
    /**
     * Obtiene lista de invitados de una mesa
     * @param {number} numeroMesa - Número de mesa
     * @returns {Array} - Array de invitados de la mesa
     */
    obtenerInvitadosMesa: function(numeroMesa) {
        const mesa = this.obtenerMesa(numeroMesa);
        return mesa ? mesa.invitados : [];
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = invitados;
}
