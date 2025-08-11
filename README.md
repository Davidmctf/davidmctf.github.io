# Portfolio Personal - David Muñoz Cruz

Portfolio profesional desarrollado en Angular 20 con Server-Side Rendering, presentando experiencia y proyectos como Full Stack Developer.

## Tecnologías

- **Angular 20** con Standalone Components
- **Angular SSR** para SEO optimization
- **TypeScript 5.8** con strict mode
- **NgRx 20** para state management
- **NgBootstrap** + BLK Design System
- **FontAwesome** icons
- **Chart.js** para visualizaciones

## Requisitos del Sistema

- **Node.js**: 20.11.1+ (mínimo requerido, 22.x LTS recomendado)
- **pnpm**: 10.x+ (package manager)
- **nvm**: Para gestión de versiones Node.js

## Instalación y Desarrollo

```bash
# Instalar pnpm globalmente (si no lo tienes)
npm install -g pnpm

# Usar Node.js 20.11.1+ (mínimo) o 22.x LTS (recomendado)
nvm use 22

# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm start
# Navigate to http://localhost:4200/

# Build de producción
pnpm run build

# Tests
pnpm test

# Servidor SSR
pnpm run serve:ssr:portafolio
```

## Estructura del Proyecto

```
src/app/
├── portfolio/           # Módulo principal
│   ├── pages/          # Home, Profile, Main pages
│   └── services/       # Portfolio services
├── shared/             # Código compartido
│   ├── components/     # Timeline, User-dialog
│   ├── layout/         # Header, Footer, Navbar
│   ├── services/       # User, Utilities, Validation
│   └── models/         # TypeScript interfaces
└── assets/             # SCSS, images, fonts
```

## Scripts Disponibles

- `pnpm start` - Desarrollo (puerto 4200)
- `pnpm run build` - Build producción
- `pnpm test` - Unit tests con Karma
- `pnpm run watch` - Build incremental
- `pnpm run serve:ssr:portafolio` - Servidor SSR

## Deploy

El proyecto está configurado para deployment automático en GitHub Pages usando `angular-cli-ghpages`.

## Desarrollo

Este proyecto sigue estrictas prácticas de desarrollo:

- **TDD**: Tests antes que código
- **Clean Architecture**: Separación clara de responsabilidades
- **Standalone Components**: Arquitectura moderna de Angular
- **Signals**: Estado reactivo nativo de Angular
