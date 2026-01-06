---
description: This file contains instructions for GitHub Copilot to help guide its behavior in various scenarios when working with code in this repository.
applyTo: "CLAUDE.md, RULES.md, Plan.agent.md, **/context.sqlite, universal-rules.md"
---

# UNIVERSAL AGENT RULES (IMMUTABLE)

## EXECUTION WORKFLOW (MANDATORY)

```
Step1: read_file(CLAUDE.md) + query_db(context.sqlite)
Step2: parse_request(what, where, scope)
Step3: validate(project_patterns, existing_code)
Step4: plan(multi_step_if_needed)
Step5: execute_with(batch_tools_when_possible)
Step6: update_db(session_context, session_notes)
Step7: verify(file_read, db_check, output_validation)
```

## BINDING RULES

**R1_ReadFirst**: load(CLAUDE.md) before any_operation()
**R2_DatabaseState**: query(.claude/context.sqlite) → restore_session()
**R3_BatchOps**: multi_replace_string_in_file() for multiple_edits
**R4_ReadBeforeEdit**: read_file(target) → verify_state() → execute_edit()
**R5_NoTempMarkdown**: zero_markdown except(universal-rules.md, user_explicit_request)
**R6_CodeStandards**: follow(CLAUDE.md rules, existing_patterns)
**R7_DbFirst**: session_state from context.sqlite not conversation
**R8_Separation**: universal(copilot-instructions.md:1-72) != project_specific(after_NOTE)

## DATABASE SCHEMA

```sql
CREATE TABLE session_context (id INTEGER PRIMARY KEY, date TEXT NOT NULL, summary TEXT NOT NULL, tasks_completed TEXT, files_modified TEXT, pending_tasks TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE session_notes (id INTEGER PRIMARY KEY, timestamp TEXT, note TEXT);
```

## TASK PROTOCOL

1. load(universal-rules.md) 2. read(CLAUDE.md) 3. query(context.sqlite) 4. parse(user_request) 5. validate(against rules) 6. batch_execute(changes) 7. update_db()

## PRECEDENCE

1. universal-rules.md 2. CLAUDE.md 3. copilot-instructions.md 4. context.sqlite 5. user_request

**FORCED AND OBLIGATORY - NO EXCEPTIONS**

# GitHub Copilot Instructions

**⚠️ CRITICAL: Read `universal-rules.md` FIRST before any other instruction**

All agents must follow the mandatory workflow and binding rules defined in [universal-rules.md](../../universal-rules.md).

## Repository Context

Read context files in order:

1. `universal-rules.md` - Mandatory workflow & binding rules (ALL projects)
2. `CLAUDE.md` - Development commands and architecture for THIS project
3. `.claude/context.sqlite` - Current session state

## Development Commands

### With pnpm (Recommended)

- **Development server**: `pnpm start` (http://localhost:4200)
- **Build for production**: `pnpm run build`
- **Build for GitHub Pages**: `pnpm run build:github`
- **Deploy to GitHub Pages**: `pnpm run deploy`
- **Tests**: `pnpm test` (Karma + Jasmine)
- **CI Tests**: `pnpm run test:ci`

### With bun (Alternative)

- **Development server**: `bun start`
- **Build for production**: `bun build`
- **Tests**: `bun test`

### Code Quality

- **Format code**: `pnpm run format` (Prettier)
- **Lint staged files**: `pnpm run lint-staged` (pre-commit)

## Architecture Overview

### Technology Stack

- **Angular 20.1.6** with standalone components
- **TypeScript 5.8** with strict mode enabled
- **SCSS** with BLK Design System

### Application Type

- **Client-Side Rendering (CSR)** for GitHub Pages
- **Standalone components** throughout
- **Angular Signals** for reactive state

### Key Patterns

#### Signal-Based Translation System

```typescript
@Injectable({ providedIn: "root" })
export class TranslationService {
  readonly t = computed(() => (key: string) => this.translate(key));
}
```

#### Component Architecture

```typescript
@Component({
  selector: "app-component",
  imports: [CommonModule],
  templateUrl: "./component.component.html",
  styleUrl: "./component.component.scss",
})
export class ComponentComponent {
  private readonly service = inject(SomeService);
  readonly someSignal = signal(initialValue);
}
```

## Project Structure

```
src/app/
├── portfolio/               # Main portfolio module
├── shared/                 # Shared components and services
│   ├── components/         # Reusable components
│   ├── layout/            # Layout components
│   ├── services/          # Core services
│   └── models/            # TypeScript interfaces
└── assets/                # Static assets
```

## Development Rules & Conventions

### Code Style

- **Standalone Components**: All new components must be standalone
- **inject() Pattern**: Use `inject()` instead of constructor injection
- **Signal-based Architecture**: Prefer Angular Signals
- **TypeScript Strict Mode**: Enabled - all code must pass checking
- **No Comments Policy**: Self-documenting code

### Translation System Rules

- **Namespace Pattern**: `'section.component.key'`
- **Fallback Strategy**: Spanish default, English secondary
- **Computed Translations**: `t = computed(() => (key: string) => this.translate(key))`

### Build & Deploy Rules

- **GitHub Pages Only**: Designed for GitHub Pages deployment
- **Base Href**: Always use `/`
- **Manual Deploy**: Use `pnpm run deploy`

## Important Technical Notes

### Bundle Configuration

- **Size Limits**: Initial 2MB warning, 5MB error
- **CommonJS Allowed**: `chart.js` and `nouislider`

### Environment Configuration

- **Development**: Source maps enabled
- **Production**: Full optimization

## SFD Project Context

**CRITICAL**: The SFD (Syntax Functional Declarative) project is a fully implemented Angular module.

- **Location**: `src/app/sfd-project/`
- **Route**: `/sfd` in portfolio application
- **Status**: Phase 1 Complete (6 tabs, 3 agents, responsive styling)

#### When Working on SFD

1. **Save all context** to `.claude/context.sqlite`
2. **Components must be interactive** (TypeScript + SCSS only)
3. **Services handle all logic** (parsing, validation, conversion)
4. **No markdown documentation** - everything is code

#### Key Files to Remember

- **Session context**: `.claude/context.sqlite`
- **SFD Component**: `src/app/portfolio/pages/sfd/sfd.component.ts:1`
- **Routes config**: `src/app/portfolio/pages/pages.routes.ts:1`

## Package Manager Support

### pnpm (Recommended)

- Primary package manager: `pnpm run <script>`
- Husky detects and uses pnpm automatically

### bun (Alternative)

- Alternative package manager: `bun start`, `bun build`, `bun test`
- Commands use `bun:` prefix for special operations

## Agent Mode Instructions

Use the following instructions when operating in AGENT MODE:

- Use technical-orchestrator-agent for orchestration tasks
- Use fullstack-code-analyzer for code analysis tasks
- Always refer to CLAUDE.md for specific guidelines

# Set and Get context instruction important rule

Save with conversation info required with persistent context needed in context.sqlite and use sqlite3 command in terminal allowed in background for this actions:

- **context file**: Route context file [path](.claude/context.sqlite)</content>
  <parameter name="filePath">.github/copilot-instructions.md
