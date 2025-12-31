---
description: This file contains instructions for GitHub Copilot to help guide its behavior in various scenarios when working with code in this repository.
applyTo: "CLAUDE.md, RULES.md, Plan.agent.md, **/context.sqlite"
---

# GitHub Copilot Instructions

These instructions are intended to guide GitHub Copilot's behavior when assisting with code in this repository. They provide context about the repository's purpose, coding standards, and specific guidelines for various scenarios.

## Repository Context

If existing AI context files specificts for CLAUDE.md, RULES.md, or Plan.agent.md are present, please refer to those files for detailed information about the repository's purpose and guidelines.
These files contain comprehensive instructions that help GitHub Copilot understand the repository's goals, coding standards, and best practices.

**Context AI markdowns files**:

- CLAUDE.md
- RULES.md
- Plan.agent.md

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

#### bun (Alternative)

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
