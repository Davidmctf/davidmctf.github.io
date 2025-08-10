# CLAUDE.md - Análisis Completo del Proyecto

## RESUMEN DEL PROYECTO

**davidmctf.github.io** es un portfolio personal desarrollado como SPA (Single Page Application) en Angular 17 con Server-Side Rendering (SSR). Se trata de un sitio web profesional que presenta la información personal y profesional de David Muñoz Cruz, desarrollador Full Stack.

## ARQUITECTURA Y TECNOLOGÍAS

### Framework Principal

- **Angular 17** con arquitectura standalone components
- **Angular SSR** habilitado para SEO y performance
- **TypeScript 5.3.2** como lenguaje principal

### Dependencias Principales

- **@angular/core**: Framework base v17.2.0
- **@ngrx/store**: Gestión de estado v17.1.1
- **@fortawesome**: Iconografía (brands, regular, solid)
- **ngx-bootstrap**: Componentes UI v12.0.0
- **blk-design-system-angular**: Sistema de diseño v1.0.0
- **chart.js**: Visualización de datos v4.4.2
- **express**: Servidor SSR v4.18.2

### Arquitectura del Código

```
src/app/
├── portfolio/           # Módulo principal del portfolio
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas del portfolio (home, profile, main)
│   ├── services/       # Servicios de datos
│   ├── interfaces/     # Interfaces TypeScript
│   └── pipes/          # Pipes personalizados
├── shared/             # Código compartido
│   ├── components/     # Componentes globales (timeline, user-dialog)
│   ├── layout/         # Layout components (header, footer, navbar)
│   ├── models/         # Modelos e interfaces
│   ├── services/       # Servicios compartidos
│   └── pipes/          # Pipes compartidos
└── assets/             # Recursos estáticos (SCSS, imágenes, fuentes)
```

### Patrones de Desarrollo Identificados

1. **Standalone Components**: Uso de Angular standalone components
2. **Dependency Injection**: Uso de `inject()` function y constructor injection
3. **Signals**: Implementación de Angular signals para estado reactivo
4. **OnPush Change Detection**: Optimización de rendimiento
5. **Lazy Loading**: Carga perezosa de rutas
6. **Computed Properties**: Para derivar estado automáticamente
7. **RxJS**: Manejo de streams y observables
8. **TypeScript Strict**: Tipado estricto habilitado

## ESTADO ACTUAL DEL PROYECTO

### Testing

- **Framework**: Jasmine + Karma configurado
- **Cobertura Actual**: Tests básicos (solo `should be created`)
- **Estado**: Testing infraestructura presente pero tests funcionales limitados

### Comandos Disponibles

- `npm start` / `ng serve`: Servidor de desarrollo
- `npm run build` / `ng build`: Build de producción
- `npm test` / `ng test`: Ejecutar tests
- `npm run watch`: Build en modo watch
- `npm run serve:ssr:portafolio`: Servidor SSR

### Deployment

- Configurado para **GitHub Pages** via `angular-cli-ghpages`
- SSR habilitado para SEO optimization

## REGLAS DE DESARROLLO OBLIGATORIAS

### 1. TDD (Test-Driven Development)

- Escribir tests ANTES que el código de implementación
- Todo nuevo feature debe comenzar con sus tests correspondientes
- Usar Jasmine/Karma para unit tests

### 2. Clean Architecture

- Separación clara entre:
  - **Presentation Layer**: Components y UI
  - **Business Logic**: Services y state management
  - **Data Layer**: Interfaces y models
- Dependency injection apropiada
- Single Responsibility Principle

### 3. 100% Cobertura de Tests

- Todo código debe estar probado
- Tests unitarios para services, components y pipes
- Tests de integración para flujos críticos
- Coverage mínimo del 100%

### 4. Priorizar Soluciones Nativas

- **Angular nativo** sobre librerías externas
- **RxJS** para manejo de estado asíncrono
- **Angular Signals** para estado reactivo
- **Angular Router** para navegación
- **Angular Forms** para formularios

### 5. Justificación de Librerías Externas

Librerías actuales justificadas:

- **ngx-bootstrap**: Componentes UI consistentes y accesibles
- **@fortawesome**: Iconografía estándar de la industria
- **chart.js**: Visualización de datos sin alternativa nativa
- **blk-design-system-angular**: Sistema de diseño del proyecto

### 6. Estándares de Código

- **Standalone Components**: Obligatorio para nuevos components
- **Signals**: Preferir sobre BehaviorSubject para estado local
- **OnPush**: Change detection strategy por defecto
- **TypeScript Strict**: Tipado explícito obligatorio
- **Index Exports**: Usar barrel exports en carpetas

## COMANDOS DE REINICIALIZACIÓN

```bash
# Instalación de dependencias
npm install

# Desarrollo
npm start                    # Servidor desarrollo (puerto 4200)
npm run watch               # Build incremental

# Testing
npm test                    # Unit tests con Karma
npm run test:coverage       # Tests con coverage (agregar script)

# Build y Deploy
npm run build               # Build producción
npm run serve:ssr:portafolio # Servidor SSR

# Análisis
ng analytics off            # Analytics deshabilitado
```

## OBJETIVOS DEL PROYECTO

1. **Portfolio Personal**: Mostrar experiencia profesional de David Muñoz Cruz
2. **SEO Optimizado**: SSR para mejor indexación
3. **Performance**: Optimización de carga y UX
4. **Responsive Design**: Adaptación móvil y desktop
5. **Integración GitHub Pages**: Deploy automático

## ESTADO DE DESARROLLO ACTUAL

- ✅ Estructura base implementada
- ✅ Componentes principales creados
- ✅ SSR configurado
- ✅ Routing implementado
- ⚠️ Tests básicos presentes pero limitados
- ⚠️ Necesita expansión de cobertura de tests
- ⚠️ Potencial optimización de performance

## PRÓXIMOS PASOS RECOMENDADOS

1. Implementar tests comprehensivos para todos los componentes
2. Agregar tests de integración para flujos principales
3. Configurar coverage reporting
4. Implementar lazy loading optimizations
5. Agregar error handling robusto
6. Configurar CI/CD con tests automáticos

---

_Análisis completado: 2025-08-10_
_Framework: Angular 17.2.0_
_Arquitectura: Standalone Components + SSR_
