# AGENTS.md

This file contains guidelines for agentic coding agents working in this repository. It standardizes build, lint, test workflows, and code‑quality expectations for Angular/TypeScript projects in this repo.

## **Build / Lint / Test**

### Development Workflow

- **Development server**: `pnpm start` (http://localhost:4200)
- **Build for production**: `pnpm run build`
- **Build for GitHub Pages**: `pnpm run build:github`
- **Deploy to GitHub Pages**: `pnpm run deploy`
- **Tests**: `pnpm test` (Karma + Jasmine)
- **CI Tests**: `pnpm run test:ci`

### Code Quality

- **Format code**: `pnpm run format` (Prettier)
- **Check formatting**: `pnpm run format:check`
- **Lint staged files**: `pnpm run lint-staged` (pre-commit)
- **Basic lint** (if configured): `pnpm run lint`

### Testing Commands

#### Running a Single Test File

```
pnpm test --include="**/component-name.component.spec.ts"
```

or with Angular CLI:

```
ng test --include="**/component-name.component.spec.ts"
```

This pattern is recommended for isolating a specific test file during development.

### Full Test Suite

```
pnpm test
```

For CI:

```
pnpm run test:ci
```

## **Code Style Guidelines**

### TypeScript Configuration

- **Strict Mode**: Enabled — all code must pass strict type checking
- **Target**: ES2022, **Module**: ES2022
- **NoImplicitAny** and strictNullChecks are expected to be on in tsconfig.

### Import Organization

```ts
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { TranslationService } from "../services/translation.service";
```

Guidelines:

- Group by origin: Angular / RxJS / App/Labs, then relative imports
- Sort alphabetically within each group
- Use absolute paths for app structure; prefer barrel files where appropriate
- Separate with a blank line between groups

### Naming Conventions

- **Components**: selector `app-foo-bar`, class `FooBarComponent`, file `foo-bar.component.ts`
- **Services**: class `FooDataService`, file `foo-data.service.ts`
- **Modules**: class `FooModule`, file `foo.module.ts`
- **Pipes/Directives**: `FooPipe`, `FooDirective`, file names follow `kebab-case` with suffix
- **Tests**: `foo-bar.component.spec.ts` alongside implementation

### Angular Signals Architecture (where used)

```ts
@Injectable({ providedIn: "root" })
export class StateService {
  private readonly _count = signal(0);
  readonly count = this._count.asReadonly();
  readonly doubleCount = computed(() => this._count() * 2);
  increment() {
    this._count.update((c) => c + 1);
  }
}
```

### Error Handling

- Prefer observable-driven errors with catchError and throwError where appropriate
- In sync code, throw domain-specific errors with meaningful messages
- When exposing errors to UI, map to user-friendly messages and avoid leaking internals

Example:

```ts
import { catchError, map } from 'rxjs/operators';
getData(): Observable<Data> {
  return this.http.get<Data>(url).pipe(
    catchError((err) => {
      // log error
      console.error(err);
      // propagate user-friendly message
      return throwError(() => new Error('Failed to fetch data'));
    })
  );
}
```

### Type Safety

- Prefer interfaces for public data shapes; use readonly properties where possible
- Avoid `any`; prefer `unknown` with narrowing, or precise union types
- Use discriminated unions for complex state machines

### Formatting and Linting

- Ensure code follows Prettier and ESLint rules; use `pnpm run format` and `pnpm run format:check`
- Maintain consistent quote style (single quotes in TS files as per repo rules)
- Align line breaks and indentation with project-wide settings (2-space, UTF-8)

### Testing Guidelines

- Use Angular TestBed for component tests; keep tests isolated
- Name tests clearly: describe("<ComponentName>", ...) and it("should ...", ...)
- Mock HTTP and services with Angular testing utilities or jasmine spies
- Keep tests fast and deterministic; avoid real time delays

### Bundle and Performance

- Use lazy loading and code-splitting where feasible
- Prefer standalone components/modules to reduce module graph complexity
- Leverage signal-based state management where appropriate to reduce change-detection cost

## **Cursor Rules**

_No Cursor rules found in this repository._

## **Copilot Rules**

**⚠️ CRITICAL: Read `universal-rules.md` FIRST before any other instruction**

All agents must follow the mandatory workflow and binding rules defined in [universal-rules.md](../../universal-rules.md).

#### Repository Context

Read context files in order:

1. `universal-rules.md` - Mandatory workflow & binding rules (ALL projects)
2. `CLAUDE.md` - Development commands and architecture for THIS project
3. `.claude/context.sqlite` - Current session state

#### Package Manager Support

- **pnpm** (recommended): `pnpm run <script>`
- **bun** (alternative): `bun start`, `bun build`, `bun test`

#### Agent Mode Instructions

- Use technical-orchestrator-agent for orchestration tasks
- Use fullstack-code-analyzer for code analysis tasks
- Refer to CLAUDE.md, RULES.md, Plan.agent.md for guidelines

#### SFD Project Context

**CRITICAL**: SFD project is fully implemented Angular module.

- **Location**: `src/app/sfd-project/`
- **Route**: `/sfd` in portfolio application
- **Status**: Phase 1 Complete (6 tabs, 3 agents, responsive styling)

## Additional Agent Guidelines

### Commit Message Format

```
type(scope): description
```

Types: feat, fix, refactor, docs, style, test, chore

### File References

Pattern: `file_path:line_number`
Example: `src/app/shared/services/translation.service.ts:72`

### Key Project Files

- **Main App Component**: `src/app/app.component.ts:1`
- **App Routing**: `src/app/app.routes.ts:1`
- **Global Styles**: `src/styles.scss:1`
- **Environment Config**: `src/environments/environment.ts:1`
- **Translation Service**: `src/app/shared/services/translation.service.ts:1`
- **SFD Component**: `src/app/portfolio/pages/sfd/sfd.component.ts:1`

### Tool Usage Priority

1. Read files before editing
2. Use batch operations when possible
3. Verify changes with tests
4. Update context.sqlite for session persistence

### Security Best Practices

- Never expose secrets or API keys
- Use environment variables for configuration
- Implement proper input validation
