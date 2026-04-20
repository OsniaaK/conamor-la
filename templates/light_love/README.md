# Landing Page XV Años

Una landing page moderna y elegante para invitaciones de 15 años, completamente editable desde archivos JavaScript.

## 🎯 Características

- **Sistema de validación de invitados**: Opcional, con control de acceso por número de invitado
- **Diseño mobile-first**: Responsive y optimizado para todos los dispositivos
- **Animaciones suaves**: Integración con ScrollReveal para animaciones al scroll
- **Galería dinámica**: Slider con Swiper, autoplay y soporte táctil
- **Contador regresivo**: Cuenta regresiva en tiempo real hasta el evento
- **Personalización completa**: Todo el contenido se configura desde `data.js`
- **Estética juvenil**: Tonos suaves, tipografías modernas y decoración floral
- **Arquitectura modular**: Código organizado en módulos reutilizables y escalables

## 📁 Estructura del Proyecto

```
.
├── index.html              # Estructura HTML principal
├── css/
│   └── styles.css          # Estilos CSS con diseño mobile-first
├── js/
│   ├── app.js              # Punto de entrada de la aplicación
│   ├── data.js             # Configuración editable (personalizar aquí)
│   ├── invitados.js        # Sistema de mesas y validación de invitados
│   └── modules/            # Módulos de funcionalidad
│       ├── utilidades.js   # Funciones utilitarias reutilizables
│       ├── validacion.js   # Sistema de validación de invitados
│       ├── contenido.js    # Carga de contenido dinámico
│       ├── galeria.js      # Gestión de la galería con Swiper
│       ├── contador.js     # Contador regresivo
│       └── animaciones.js  # Animaciones con ScrollReveal
├── assets/
│   └── images/             # Carpeta para imágenes locales
└── README.md               # Documentación
```

## 🚀 Cómo Usar

### 1. Personalizar la Invitación

Edita el archivo `data.js` para personalizar todos los datos:

```javascript
const data = {
    sistemaInvitadosActivo: true,  // true = requiere validación, false = acceso libre
    nombre: "María Sofía",
    subtitulo: "Mis 15 Años",
    fechaEvento: {
        fecha: "2025-06-14",
        hora: "20:00",
        horaFin: "03:00"
    },
    // ... más configuraciones
};
```

### 2. Configurar Invitados

Edita el archivo `invitados.js` para agregar mesas e invitados:

```javascript
const invitados = {
    mesas: [
        {
            numero: 1,
            nombre: "Mesa Principal",
            invitados: [
                { id: "1001", nombre: "María Sofía Pérez" },
                { id: "1002", nombre: "Carlos Pérez" }
            ]
        }
        // ... más mesas
    ]
};
```

### 3. Personalizar Colores

En `data.js`, modifica la paleta de colores:

```javascript
colores: {
    primario: "#E8B4B8",      // Rosa suave
    secundario: "#F5E6E8",    // Rosa muy claro
    acento: "#D4A5A5",        // Rosa medio
    texto: "#4A4A4A",         // Gris oscuro
    // ... más colores
}
```

### 4. Agregar Fotos a la Galería

En `data.js`, agrega las URLs de las imágenes:

```javascript
galeria: [
    "https://ejemplo.com/foto1.jpg",
    "https://ejemplo.com/foto2.jpg",
    // ... más fotos
]
```

## 🔧 Configuraciones Disponibles

### Sistema de Invitados

- `sistemaInvitadosActivo`: Activa/desactiva la validación de invitados
- Cada invitado tiene un ID único para acceso
- Muestra información de mesa y compañeros

### Secciones Configurables

- **Hero**: Nombre, subtítulo y mesa
- **Frase**: Texto personalizado
- **Evento**: Fecha, hora, lugar y botones de acción
- **Galería**: Slider de fotos con autoplay
- **Spotify**: Playlist embebida
- **Dress Code**: Colores sugeridos y notas
- **Regalos**: Datos bancarios y cuentas
- **Instagram**: Link y hashtag

### Animaciones

Configuración de animaciones en `data.js`:

```javascript
animaciones: {
    scrollReveal: true,
    duracion: 1000,
    delay: 200,
    distancia: 50
}
```

### Galería

Configuración del slider en `data.js`:

```javascript
galeriaConfig: {
    autoplay: { delay: 3000 },
    speed: 800,
    loop: true,
    grabCursor: true,
    effect: "slide"
}
```

## 📱 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Estilos con variables CSS y animaciones
- **JavaScript Vanilla**: Sin frameworks, código nativo
- **Swiper**: Slider de imágenes (vía CDN)
- **ScrollReveal**: Animaciones al scroll (vía CDN)
- **Google Fonts**: Playfair Display y Poppins

## 🌐 Despliegue

### Opción 1: GitHub Pages

1. Sube los archivos a un repositorio de GitHub
2. Activa GitHub Pages en la configuración
3. La página estará disponible en `https://usuario.github.io/repo`

### Opción 2: Netlify

1. Arrastra la carpeta con los archivos a Netlify Drop
2. La página estará disponible instantáneamente

### Opción 3: Hosting Tradicional

Sube los archivos a cualquier hosting que soporte sitios estáticos.

## 🎨 Personalización Avanzada

### Cambiar Tipografías

Edita los enlaces de Google Fonts en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins&display=swap" rel="stylesheet">
```

Luego actualiza las variables CSS en `styles.css`:

```css
:root {
    --font-titulo: 'Playfair Display', serif;
    --font-cuerpo: 'Poppins', sans-serif;
}
```

### Modificar Animaciones

Las animaciones están definidas en `styles.css` con `@keyframes`. Puedes modificar:

- `fadeIn`: Aparición suave
- `fadeInUp`: Aparición desde abajo
- `slideUp`: Deslizamiento hacia arriba
- `scaleIn`: Aparición con escala
- `float`: Flotación suave
- `pulse`: Efecto de pulso

## 📋 Checklist de Personalización

- [ ] Actualizar nombre y subtítulo en `data.js`
- [ ] Configurar fecha y hora del evento
- [ ] Agregar ubicación y enlace de Google Maps
- [ ] Configurar enlaces de WhatsApp y calendario
- [ ] Agregar fotos a la galería
- [ ] Personalizar colores del tema
- [ ] Configurar dress code si aplica
- [ ] Agregar cuentas bancarias si aceptas regalos
- [ ] Configurar enlace de Instagram
- [ ] Agregar playlist de Spotify
- [ ] Configurar mesas e invitados en `invitados.js`
- [ ] Probar el sistema de validación
- [ ] Verificar responsive en diferentes dispositivos

## 🐛 Solución de Problemas

### El contador no funciona

Verifica que la fecha en `data.js` esté en formato correcto: `YYYY-MM-DD`

### Las imágenes no cargan

Asegúrate de que las URLs en `galeria` sean accesibles públicamente.

### El sistema de invitados no valida

Verifica que los IDs en `invitados.js` sean únicos y coincidan con los que entregas a los invitados.

### Las animaciones no se ven

Verifica que `scrollReveal: true` esté configurado en `data.js` y que la librería CDN esté cargada.

## 📄 Licencia

Este proyecto es de código abierto y puede ser utilizado libremente para eventos personales.

## ❤️ Créditos

Desarrollado con HTML5, CSS3 y JavaScript vanilla.
Librerías externas: Swiper y ScrollReveal.
