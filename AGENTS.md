# AGENTS.md

This file contains guidelines for agentic coding agents working in this repository.

## Build/Lint/Test Commands

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

### Testing Commands

#### Running a Single Test File

```bash
pnpm test --include="**/component-name.component.spec.ts"
ng test --include="**/component-name.component.spec.ts"
```

## Code Style Guidelines

### TypeScript Configuration

- **Strict Mode**: Enabled - all code must pass strict type checking
- **Target**: ES2022, **Module**: ES2022

### Import Organization

```typescript
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { TranslationService } from "../services/translation.service";
```

### Naming Conventions

- **Components**: `app-user-profile` selector, `UserProfileComponent` class
- **Services**: `UserDataService` with Service suffix
- **Files**: `user-profile.component.ts`

### Angular Signals Architecture

```typescript
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

### Component Architecture (Standalone Required)

```typescript
@Component({
  selector: "app-user-profile",
  imports: [CommonModule, FormsModule],
  templateUrl: "./user-profile.component.html",
  styleUrl: "./user-profile.component.scss",
})
export class UserProfileComponent {
  private readonly userService = inject(UserService);
  readonly currentUser = signal<User | null>(null);
  readonly isLoading = signal(false);
}
```

### Translation System

```typescript
@Injectable({ providedIn: "root" })
export class TranslationService {
  readonly t = computed(() => (key: string) => this.translate(key));
}
```

### Error Handling

```typescript
@Injectable({ providedIn: "root" })
export class ApiService {
  getData(): Observable<Data> {
    return this.http.get<Data>("/api/data").pipe(catchError((error) => throwError(() => new Error("Failed to fetch data"))));
  }
}
```

### Type Safety

```typescript
interface User {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly createdAt: Date;
}
```

### Formatting and Linting

```
[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single
```

### Testing Guidelines

```typescript
describe("UserProfileComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileComponent],
    }).compileComponents();
  });
});
```

### Bundle and Performance

- **Size Limits**: Initial 2MB warning, 5MB error
- **Optimization**: Signal-based change detection, lazy loading

## Cursor Rules

_No Cursor rules found in this repository._

## Copilot Rules

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
- Implement proper input validation</content>
  <parameter name="filePath">AGENTS.md
