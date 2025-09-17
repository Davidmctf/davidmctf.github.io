# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Primary Development Workflow

- **Development server**: `npm start` (serves on http://localhost:4200)
- **Build for production**: `npm run build`
- **Build for GitHub Pages**: `npm run build:github` (uses --base-href=/)
- **Deploy to GitHub Pages**: `npm run deploy` (builds and deploys using angular-cli-ghpages)
- **Tests**: `npm test` (Karma + Jasmine)
- **CI Tests**: `npm run test:ci` (headless Chrome with coverage)

### Code Quality & Formatting

- **Format code**: `npm run format` (Prettier)
- **Check formatting**: `npm run format:check`
- **Lint staged files**: `npm run lint-staged` (runs on pre-commit via Husky)

### Analysis & Performance

- **Bundle analysis**: `npm run analyze` (webpack-bundle-analyzer)
- **Lighthouse audit**: `npm run lighthouse`
- **Watch builds**: `npm run watch` (development mode with file watching)

### Dependency Management

- **Update Angular**: `npm run update:angular`
- **Update dependencies**: `npm run update:deps`

## Architecture Overview

### Technology Stack

- **Angular 20.1.6** with standalone components architecture
- **TypeScript 5.8** with strict mode enabled
- **NgRx 20** for state management (configured but not extensively used)
- **SCSS** with BLK Design System
- **FontAwesome** icon library
- **Chart.js** for data visualizations
- **NgBootstrap** for UI components

### Application Type

- **Client-Side Rendering (CSR)** application optimized for GitHub Pages
- **NO Server-Side Rendering** - deliberately disabled for static hosting compatibility
- **Hash routing** enabled for GitHub Pages compatibility
- **Standalone components** throughout the application

### Key Architectural Patterns

#### Signal-Based Translation System

The application uses a custom translation system built on Angular Signals:

```typescript
// Translation service pattern
@Injectable({ providedIn: "root" })
export class TranslationService {
  readonly t = computed(() => (key: string) => this.translate(key));
  // Reactive translations that update components automatically
}

// Component usage pattern
export class Component {
  private readonly translationService = inject(TranslationService);
  readonly t = this.translationService.t;
}
```

#### Language Management

- **Runtime language switching** without page reload
- **LocalStorage persistence** for language preference
- **Browser language detection** as fallback
- **Spanish (es-MX)** as default language
- **English (en)** as secondary language

#### Modern Angular Patterns

- **Standalone components** throughout the application
- **inject() function** instead of constructor injection
- **Angular Signals** for reactive state management
- **Computed properties** for derived state
- **Modern router configuration** with view transitions

## Project Structure

```
src/app/
├── portfolio/               # Main portfolio module
│   ├── pages/              # Home, Profile, Main pages
│   └── services/           # Portfolio-specific services
├── shared/                 # Shared code across application
│   ├── components/         # Reusable components
│   │   ├── timeline/       # Experience timeline component
│   │   ├── language-switcher/  # Language toggle component
│   │   ├── theme-switcher/ # Dark/light theme component
│   │   └── user-dialog/    # User information modal
│   ├── layout/            # Layout components
│   │   ├── navbar/        # Navigation bar
│   │   ├── header/        # Page header
│   │   ├── footer/        # Page footer
│   │   └── layout/        # Main layout wrapper
│   ├── services/          # Core application services
│   │   ├── translation.service.ts  # Signal-based translations
│   │   ├── language.service.ts     # Language state management
│   │   ├── theme.service.ts        # Theme switching
│   │   ├── utilities.service.ts    # Utility functions
│   │   └── validate.service.ts     # Form validation
│   ├── models/            # TypeScript interfaces
│   └── pipes/             # Custom Angular pipes
└── assets/                # Static assets, SCSS, images
```

## Development Rules & Conventions

### Code Style

- **Standalone Components**: All new components must be standalone
- **inject() Pattern**: Use `inject()` function instead of constructor injection
- **Signal-based Architecture**: Prefer Angular Signals for reactive state
- **TypeScript Strict Mode**: Enabled - all code must pass strict type checking
- **No Comments Policy**: Code should be self-documenting; avoid unnecessary comments
- **Prettier Formatting**: All code must be formatted with Prettier (enforced by Husky pre-commit)

### Translation System Rules

- **Namespace Pattern**: Use `'section.component.key'` for translation keys
- **Fallback Strategy**: Spanish (es-MX) as default, English (en) as secondary
- **No Hard-coded Text**: All visible text must use the translation system
- **Consistent Keys**: Same keys must exist in both language objects
- **Computed Translations**: Use the `t = computed(() => (key: string) => this.translate(key))` pattern

### Component Architecture

```typescript
// Standard component structure
@Component({
  selector: 'app-component',
  imports: [CommonModule, /* other imports */],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css', // Note: styleUrl (singular)
})
export class ComponentComponent {
  private readonly service = inject(SomeService);
  readonly someSignal = signal(initialValue);
  readonly computedValue = computed(() => /* derived state */);
}
```

### Build & Deploy Rules

- **GitHub Pages Only**: Application is designed exclusively for GitHub Pages deployment
- **Base Href**: Always use `/` for GitHub Pages compatibility
- **Static Build**: Only static files, no server-side components
- **Manual Dependency Updates**: Never use automated dependency updates - verify compatibility manually
- **No CI/CD**: Use `npm run deploy` for manual deployment

### Git Workflow

- **Main Branch**: All development happens on main, direct deployment from main
- **Commit Messages**: Use conventional commits (feat, fix, refactor, docs, etc.)
- **Pre-commit Hooks**: Husky enforces formatting and linting before commits
- **Manual Deploy**: Use `npm run deploy` command for GitHub Pages deployment

## Important Technical Notes

### Bundle Configuration

- **CommonJS Dependencies**: `chart.js` and `nouislider` are allowed as CommonJS dependencies
- **Bundle Size Limits**:
  - Initial bundle: 2MB warning, 5MB error
  - Component styles: 5KB warning, 6KB error
- **Optimization**: Production builds use full optimization including critical CSS inlining

### Environment Configuration

- **Development**: Source maps enabled, no optimization
- **Production**: Full optimization, no source maps, extract licenses enabled
- **Localization**: Configured for es-MX locale with @angular/localize support

### Dependencies to Verify Before Updates

When updating dependencies, manually verify compatibility for:

- **Angular Core & CLI**: Check official Angular update guide
- **NgRx**: Ensure version compatibility with Angular version
- **FontAwesome Angular**: Check Angular version compatibility
- **NgBootstrap**: Verify Angular version support
- **Chart.js**: Stable version, avoid beta releases

### Known Limitations

- **No SSR**: Application cannot use server-side rendering due to GitHub Pages static hosting
- **Hash Routing**: Required for GitHub Pages, affects SEO but necessary for proper routing
- **Manual Deployments**: No automated CI/CD - requires manual deployment process
