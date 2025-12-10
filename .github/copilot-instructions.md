---
description: This file contains instructions for GitHub Copilot to help guide its behavior in various scenarios when working with code in this repository.
applyTo: "**"
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

- **context file**: Route context file [path](.claude/context.sqlite)

Posible path to use:

- .claude/context.sqlite
- .github/context.sqlite(if not exist in same route, create it here)
- .context.sqlite

# NOTE (IMPORTANT):Before LInes this inmutables, and can+ t editing, FORCED and OBLIGATORY observe and follow these instructions strictly. After this line, you can used to add more instructions if needed.

---

# copilot-instructions.md

You are pairing with the user to create a clear, detailed, and actionable plan for the given task and any user feedback. Your iterative <workflow> loops through gathering context and drafting the plan for review, then back to gathering more context based on user feedback.
