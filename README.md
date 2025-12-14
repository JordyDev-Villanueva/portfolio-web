# 💼 Portfolio Personal - Jordy Villanueva

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Portfolio web profesional de Jordy Villanueva, Full Stack Developer especializado en Python backend y React frontend.

## 🚀 Demo en Vivo

🌐 **[Ver Portfolio](https://portfolio-web-six-qqlas.vercel.app)** - ¡Portfolio en producción!

## ✨ Características

- **Diseño Moderno y Responsivo**: Interfaz profesional que se adapta a todos los dispositivos
- **Animaciones Suaves**: Implementadas con Framer Motion para una experiencia de usuario fluida
- **Dark Mode Ready**: Estilos preparados para modo oscuro (próximamente)
- **SEO Optimizado**: Meta tags completos para redes sociales y motores de búsqueda
- **Performance Optimizado**: Build optimizado con Vite para carga rápida

## 📋 Secciones

1. **Hero**: Presentación principal con estadísticas y CTAs
2. **Sobre Mí**: Biografía profesional con foto y métricas clave
3. **Proyectos**: Showcase de proyectos destacados (KATITA-POS featured)
4. **Habilidades**: Grid de tecnologías con filtros por categoría
5. **Contacto**: Formulario de contacto e información de redes sociales

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca de UI
- **Vite 7.2.7** - Build tool y dev server
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **Framer Motion** - Librería de animaciones
- **React Icons** - Iconos (FaGithub, FaLinkedin, etc.)

### Build & Development
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Prefijos CSS automáticos
- **ESLint** - Linting de código

## 📦 Instalación y Uso

### Prerrequisitos
- Node.js 16+ y npm instalados

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JordyDev-Villanueva/portfolio-web.git

# Navegar al directorio
cd portfolio-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El portfolio estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Genera el build de producción
npm run preview      # Preview del build de producción
npm run lint         # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
portfolio-web/
├── public/
│   ├── cv.pdf                  # CV descargable
│   ├── Jordy-Perfil.jpg        # Foto profesional
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Barra de navegación
│   │   │   └── Footer.jsx      # Pie de página
│   │   └── sections/
│   │       ├── Hero.jsx        # Sección hero
│   │       ├── About.jsx       # Sobre mí
│   │       ├── Projects.jsx    # Proyectos
│   │       ├── Skills.jsx      # Habilidades
│   │       └── Contact.jsx     # Contacto
│   ├── data/
│   │   ├── projects.js         # Datos de proyectos
│   │   └── skills.js           # Datos de habilidades
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── index.html                  # HTML con meta tags SEO
├── tailwind.config.js          # Configuración de Tailwind
├── postcss.config.cjs          # Configuración de PostCSS
├── vite.config.js              # Configuración de Vite
└── package.json
```

## 🎨 Personalización

### Colores
Los colores principales se definen en `tailwind.config.js`:

```javascript
colors: {
  primary: '#3b82f6',    // Azul principal
  secondary: '#1e40af',   // Azul oscuro
  accent: '#60a5fa',      // Azul claro
}
```

### Proyectos
Agrega o modifica proyectos en `src/data/projects.js`

### Habilidades
Agrega o modifica habilidades en `src/data/skills.js`

## 📱 Información de Contacto

- **Email**: jordy.2023.villmar@gmail.com
- **GitHub**: [@JordyDev-Villanueva](https://github.com/JordyDev-Villanueva)
- **LinkedIn**: [Jordy Frank Villanueva Martel](https://www.linkedin.com/in/jordy-frank-villanueva-martel-271430337/)

## 🚀 Deploy

Este proyecto está optimizado para deployment en **Vercel**:

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente la configuración de Vite
3. El deploy se ejecutará automáticamente

### Variables de Entorno
No se requieren variables de entorno para este proyecto.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Diseño inspirado en portfolios modernos de desarrolladores
- Iconos por [React Icons](https://react-icons.github.io/react-icons/)
- Animaciones por [Framer Motion](https://www.framer.com/motion/)

---

**Desarrollado con ❤️ por Jordy Villanueva**

🛒 **Proyecto Destacado**: [KATITA-POS](https://github.com/JordyDev-Villanueva/katita-pos) - Sistema POS production-ready con 300+ ventas diarias
