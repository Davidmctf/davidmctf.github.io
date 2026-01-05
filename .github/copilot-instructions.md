---
description: This file contains instructions for GitHub Copilot to help guide its behavior in various scenarios when working with code in this repository.
applyTo: "CLAUDE.md, RULES.md, Plan.agent.md, **/context.sqlite, universal-rules.md"
---

# GitHub Copilot Instructions

**⚠️ CRITICAL: Read `universal-rules.md` FIRST before any other instruction**

All agents must follow the mandatory workflow and binding rules defined in [universal-rules.md](../../universal-rules.md). These rules are immutable and apply to ALL projects and agents.

These instructions provide context about the repository's purpose, coding standards, and specific guidelines for various scenarios.

## Repository Context

Read context files in order:

1. `universal-rules.md` - Mandatory workflow & binding rules (ALL projects)
2. `CLAUDE.md` - Development commands and architecture for THIS project
3. `.claude/context.sqlite` - Current session state

**Project-specific files** (if exist): RULES.md, Plan.agent.md

# Set and Get context instrucction important rule

Save with conversacion info required with persistan contex needed in context.sqlite and use sqlite3 command in terminal allowed in backgroud for this actions:

- **context file**: Route context file [path](../.claude/context.sqlite)

## Package Manager Support

### Supported Package Managers

This repository supports both **pnpm** and **bun** as package managers:

#### pnpm (Recommended)

- Primary package manager
- All standard commands work with `pnpm run <script>`
- Husky hooks automatically detect and use pnpm
- Use for production deployments

#### bun (Alternative) in this case used obligatory

- Alternative package manager for faster installations
- Most commands work directly: `bun start`, `bun build`, `bun test`
- Special commands use `bun:` prefix: `bun run bun:deploy`, `bun run bun:analyze`
- Husky hooks automatically detect and use bunx for staged files
- Compatible with existing setup - no additional configuration needed

### Husky Compatibility

Husky hooks (pre-commit, commit-msg, pre-push) are configured to automatically detect which package manager is available and use the appropriate executor:

```bash
# pre-commit hook automatically:
if command -v bun &> /dev/null; then
  bunx lint-staged    # Uses bun if available
else
  pnpm run lint-staged # Falls back to pnpm
fi
```

No manual configuration needed - just use whichever package manager you prefer.

# AGENT MODE DEFAULT INSTRUCTIONS

Use the following instructions when operating in AGENT MODE:

- Use Orctechnical-orchestrator-agent as the base agent for orchestration tasks.
- Use fullstack-code-analyzer as the base agent for code analysis tasks.
- Always refer to the context files (CLAUDE.md, RULES.md, Plan.agent.md) for specific guidelines and instructions.
- Ensure that all actions taken align with the repository's goals and coding standards.
- Use process, logic, sintax, and reasoning smilar, equal with used in [orchestrator-agent](./agents/technical-orchestrator.agent.md) and [fullstack-code-analyzer](./agents/fullstack-code-analyzer.agent.md) agents apply in you core identity and funtionality. (FORCED AND OBLIGATORY).

# NOTE (IMPORTANT):Before LInes this inmutables, and can+ t editing, FORCED and OBLIGATORY observe and follow these instructions strictly. After this line, you can used to add more instructions if needed.

---

# copilot-instructions.md

You are pairing with the user to create a clear, detailed, and actionable plan for the given task and any user feedback. Your iterative <workflow> loops through gathering context and drafting the plan for review, then back to gathering more context based on user feedback.

# SFD Project Instructions (PERMANENT)

**CRITICAL**: The SFD (Syntax Functional Declarative) project is a fully implemented Angular module.

### Project Structure

- **Location**: `src/app/sfd-project/`
- **Route**: `/sfd` in the portfolio application (accessible from navbar)
- **Documentation Source**: `/home/dmcws/.local/state/sfd-sintaxt/`

### Current Implementation Status

✅ **COMPLETED** (Phase 1):

- Main page component with 6 tabs (Overview, Agents, Editor, Validator, Converter, Symbols)
- SFDService with 3 real production agents (Technical Orchestrator, Fullstack Code Analyzer, SFD Agent Architect)
- TypeScript models (sfd.models.ts) with 400+ lines of interfaces
- Module and route configuration
- Navbar integration
- Responsive SCSS styling (mobile-first)

### File Structure

```
src/app/sfd-project/
├── models/sfd.models.ts (400+ lines)
├── services/
│   ├── sfd.service.ts (core service)
│   ├── sfd-converter.service.ts
│   ├── sfd-validator.service.ts
│   ├── sfd-content.service.ts
│   └── index.ts
├── pages/
│   ├── sfd-project.component.ts
│   ├── sfd-project.component.html
│   ├── sfd-project.component.scss
│   └── sfd-project.component.spec.ts
├── sfd.module.ts
└── sfd.routes.ts
```

### When Working on SFD

1. **Save all context** to `.claude/context.sqlite` with session details
2. **Components must be interactive and reusable** (TypeScript + SCSS only)
3. **Services handle all logic** (parsing, validation, conversion)
4. **No markdown documentation** - everything is code
5. **Use real agent patterns** in definitions for consistency

### Next Phases (Future Sessions)

- Phase 2: Complete Editor, Validator, Converter components
- Phase 3: Live editing and interactive features
- Phase 4: SQLite database integration for persistence

### Key Files to Remember

- **Session context**: `.claude/context.sqlite`
- **Type definitions**: `src/app/sfd-project/models/sfd.models.ts`
- **Routes config**: `src/app/portfolio/pages/pages.routes.ts`
- **Navbar link**: `src/app/shared/layout/navbar/navbar.component.html`

### Active Session Context (Update this section before saving to DB)

**Last Updated**: 2026-01-02
**Current Phase**: Phase 1 Complete
**Database Location**: `.claude/context.sqlite`

**Completed Tasks**:

- ✅ SFDService created (3 real agents fully implemented)
- ✅ Main page component (6 interactive tabs)
- ✅ TypeScript models (400+ lines)
- ✅ Module and route configuration
- ✅ Navbar integration
- ✅ Responsive styling (mobile-first)

**Files Modified** (8 files):

- src/app/sfd-project/services/sfd.service.ts
- src/app/sfd-project/pages/sfd-project.component.ts
- src/app/sfd-project/pages/sfd-project.component.html
- src/app/sfd-project/pages/sfd-project.component.scss
- src/app/sfd-project/sfd.module.ts
- src/app/sfd-project/sfd.routes.ts
- src/app/portfolio/pages/pages.routes.ts
- src/app/shared/layout/navbar/navbar.component.html

**Pending Tasks**:

- Phase 2: Complete Editor, Validator, Converter components
- Phase 3: Live editing and interactive features
- Phase 4: SQLite database integration for persistence
