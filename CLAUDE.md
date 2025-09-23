# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Primary Development Workflow

- **Development server**: `pnpm start` (serves on http://localhost:4200)
- **Build for production**: `pnpm run build`
- **Build for GitHub Pages**: `pnpm run build:github` (uses --base-href=/)
- **Deploy to GitHub Pages**: `pnpm run deploy` (builds and deploys using angular-cli-ghpages)
- **Tests**: `pnpm test` (Karma + Jasmine)
- **CI Tests**: `pnpm run test:ci` (headless Chrome with coverage)

### Code Quality & Formatting

- **Format code**: `pnpm run format` (Prettier)
- **Check formatting**: `pnpm run format:check`
- **Lint staged files**: `pnpm run lint-staged` (runs on pre-commit via Husky)

### Analysis & Performance

- **Bundle analysis**: `pnpm run analyze` (webpack-bundle-analyzer)
- **Lighthouse audit**: `pnpm run lighthouse`
- **Watch builds**: `pnpm run watch` (development mode with file watching)

### Dependency Management

- **Update Angular**: `pnpm run update:angular`
- **Update dependencies**: `pnpm run update:deps`

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
- **No CI/CD**: Use `pnpm run deploy` for manual deployment

### Git Workflow

- **Main Branch**: All development happens on main, direct deployment from main
- **Commit Messages**: Use conventional commits (feat, fix, refactor, docs, etc.)
- **Pre-commit Hooks**: Husky enforces formatting and linting before commits
- **Manual Deploy**: Use `pnpm run deploy` command for GitHub Pages deployment

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

## MANDATORY DEVELOPMENT PRACTICES

### SOLID Principles (Applied to Current Structure)

- **Single Responsibility**: Each service, component, and model serves one clear purpose
- **Open/Closed**: Components open for extension, closed for modification
- **Liskov Substitution**: All implementations must be substitutable for their interfaces
- **Interface Segregation**: Create focused, specific interfaces over large monolithic ones
- **Dependency Inversion**: Depend on abstractions, not concrete implementations

### Angular Signals Architecture (Primary State Management)

- **Signal-First Approach**: Use `signal()` for all reactive state management
- **Computed Properties**: Use `computed()` for derived state instead of manual calculations
- **Effect Usage**: Use `effect()` for side effects and synchronization, not for state propagation
- **Signal Composition**: Build complex state from simple signal primitives
- **Immutable Updates**: Always use `.set()` and `.update()` methods for signal mutations
- **Template Integration**: Leverage automatic change detection with signal-based templates

#### Signal Implementation Patterns

```typescript
// Service pattern with signals
@Injectable({ providedIn: 'root' })
export class StateService {
  private readonly _count = signal(0);
  readonly count = this._count.asReadonly();
  readonly doubleCount = computed(() => this._count() * 2);

  increment() { this._count.update(c => c + 1); }
}

// Component pattern with signals
@Component({...})
export class MyComponent {
  private readonly service = inject(StateService);
  readonly displayValue = computed(() =>
    `Count: ${this.service.count()}`
  );
}
```

### Domain-Driven Design Principles

- **Rich Domain Models**: Create entities with behavior, not just data containers
- **Value Objects**: Use for complex types without identity (ContactInfo, SocialLinks)
- **Repository Pattern**: Abstract data access behind interfaces
- **Domain Services**: Extract complex business logic that spans multiple entities
- **Ubiquitous Language**: Maintain consistent domain terminology across all layers

### Clean Architecture Fundamentals

- **Dependency Rule**: Source code dependencies point inward toward business logic
- **Framework Independence**: Core business logic independent of Angular-specific code
- **Separation of Concerns**: Clear boundaries between presentation, business, and data layers
- **Interface Segregation**: Small, focused contracts over large monolithic interfaces
- **Mapper Pattern**: Transform data between layers using dedicated mapper utilities

### Testing Requirements

- **Business Logic Coverage**: Critical services and domain models must have comprehensive tests
- **Signal Testing**: Test signal behavior, computed values, and effect execution
- **Component Contracts**: Test component public API and behavior, not implementation
- **Integration Testing**: Verify service integration and data flow between layers
- **E2E Critical Paths**: Cover primary user journeys and cross-cutting concerns

### Code Quality Standards (Non-Negotiable)

- **TypeScript Strict Mode**: All code must pass strict type checking without exceptions
- **Static Analysis**: Prettier + ESLint + Husky enforcement via pre-commit hooks
- **No Any Types**: Explicit typing required, eliminate implicit `any` usage
- **Readonly by Default**: Use `readonly` properties and immutable patterns
- **Self-Documenting Code**: Clear naming conventions over extensive comments

### Package Management (PNPM Only)

- **PNPM Exclusive**: Use `pnpm` for all package management operations
- **Lock File Integrity**: Always commit `pnpm-lock.yaml` changes
- **Workspace Configuration**: Leverage PNPM workspace features when applicable
- **Dependency Deduplication**: Benefit from PNPM's efficient dependency sharing
- **Script Execution**: Use `pnpm run <script>` for all npm script execution

### External Dependency Policy

- **Justification First**: Every external library must provide explicit business value
- **Bundle Impact Analysis**: Mandatory `pnpm run analyze` before adding dependencies
- **Security Assessment**: Regular vulnerability scanning with `pnpm audit`
- **Framework Alignment**: Prefer libraries that integrate well with Angular ecosystem
- **Maintenance Burden**: Evaluate long-term support and community activity

### Performance and Optimization

- **Signal-Based Change Detection**: Leverage signals for granular UI updates
- **Lazy Loading**: Implement route-based code splitting for optimal loading
- **OnPush Strategy**: Use OnPush change detection strategy with signal-driven components
- **Bundle Optimization**: Regular analysis with `pnpm run analyze` and tree-shaking verification
- **Resource Management**: Proper cleanup of effects and subscriptions
