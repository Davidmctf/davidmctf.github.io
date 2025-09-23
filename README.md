# Portfolio Personal - David Muñoz Cruz

Portfolio profesional desarrollado en Angular 20.1.6 con arquitectura moderna, presentando experiencia y proyectos como Full Stack Developer.

## Tecnologías

- **Angular 20.1.6** con Standalone Components
- **TypeScript 5.8** con strict mode habilitado
- **Angular Signals** para state management reactivo
- **PNPM** como gestor de paquetes exclusivo
- **NgBootstrap** + BLK Design System
- **FontAwesome** icons
- **Chart.js** para visualizaciones
- **GitHub Pages** deployment

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

# Build para GitHub Pages
pnpm run build:github

# Tests
pnpm test

# Deploy a GitHub Pages
pnpm run deploy
```

## Arquitectura del Proyecto

```
src/app/
├── portfolio/              # Módulo principal del portfolio
│   ├── pages/             # Home, Profile, Main pages
│   └── services/          # Portfolio-specific services
├── shared/                # Código compartido transversal
│   ├── components/        # Timeline, Language-switcher, Theme-switcher
│   ├── layout/           # Header, Footer, Navbar, Layout
│   ├── services/         # Translation, Language, Theme, Utilities
│   ├── models/           # TypeScript interfaces y tipos
│   └── pipes/            # Custom Angular pipes
└── assets/               # SCSS, images, fonts, i18n
```

## Características Principales

### Sistema de Traducción con Signals

- **Cambio de idioma en tiempo real** sin recarga de página
- **Persistencia en LocalStorage** de preferencias
- **Detección automática** del idioma del navegador
- **Español (es-MX)** como idioma por defecto
- **Inglés (en)** como idioma secundario

### Arquitectura Moderna Angular

- **Standalone Components** en toda la aplicación
- **inject() function** en lugar de constructor injection
- **Angular Signals** para manejo de estado reactivo
- **Computed properties** para estado derivado
- **Hash routing** para compatibilidad con GitHub Pages

## Scripts Disponibles

### Desarrollo

- `pnpm start` - Servidor de desarrollo (puerto 4200)
- `pnpm run watch` - Build incremental con watch
- `pnpm test` - Unit tests con Karma
- `pnpm run test:ci` - Tests con coverage para CI

### Build y Deploy

- `pnpm run build` - Build de producción
- `pnpm run build:github` - Build para GitHub Pages
- `pnpm run deploy` - Deploy automático a GitHub Pages

### Calidad de Código

- `pnpm run format` - Formatear código con Prettier
- `pnpm run format:check` - Verificar formato
- `pnpm run lint-staged` - Lint archivos staged

### Análisis y Performance

- `pnpm run analyze` - Análisis de bundle con webpack-bundle-analyzer
- `pnpm run lighthouse` - Auditoría de rendimiento

## Estándares de Desarrollo

### Principios Aplicados

- **SOLID Principles** - Separación de responsabilidades clara
- **Domain-Driven Design** - Modelado centrado en el dominio
- **Clean Architecture** - Dependencias dirigidas hacia adentro
- **Signal-First Architecture** - Estado reactivo con Angular Signals

### Calidad de Código

- **TypeScript Strict Mode** - Tipado estricto obligatorio
- **ESLint + Prettier** - Análisis estático y formato automático
- **Husky Pre-commit Hooks** - Verificaciones automáticas
- **No Comments Policy** - Código auto-documentado

### Gestión de Dependencias

- **PNPM Exclusivo** - Gestión eficiente de paquetes
- **Justificación Obligatoria** - Para nuevas dependencias
- **Bundle Size Monitoring** - Análisis de impacto automático
- **Security Scanning** - Auditorías regulares de vulnerabilidades

## Deploy y CI/CD

El proyecto utiliza **despliegue manual** a GitHub Pages:

```bash
# Comando de deploy completo
pnpm run deploy
```

### Limitaciones Conocidas

- **No SSR** - Por restricciones de GitHub Pages (hosting estático)
- **Hash Routing** - Requerido para GitHub Pages
- **Deploy Manual** - Sin CI/CD automatizado

## Contribución

Para contribuir al proyecto, asegúrate de seguir los estándares establecidos en `CLAUDE.md` y ejecutar todas las verificaciones de calidad antes de crear commits.
