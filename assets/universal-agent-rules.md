UNIVERSAL AGENT RULES (IMMUTABLE)

EXECUTION WORKFLOW (MANDATORY)
Step1: read_file(CLAUDE.md) + query_db(context.sqlite)
Step2: parse_request(what, where, scope)
Step3: validate(project_patterns, existing_code)
Step4: plan(multi_step_if_needed)
Step5: execute_with(batch_tools_when_possible)
Step6: update_db(session_context, session_notes)
Step7: verify(file_read, db_check, output_validation)

R1_ReadFirst: load(CLAUDE.md) before any_operation()
R2_DatabaseState: query(.claude/context.sqlite) -> restore_session()
R3_BatchOps: multi_replace_string_in_file() for multiple_edits
R4_ReadBeforeEdit: read_file(target) -> verify_state() -> execute_edit()
R5_NoTempMarkdown: zero_markdown except(universal-rules.md, user_explicit_request)
R6_CodeStandards: follow(CLAUDE.md rules, existing_patterns)
R7_DbFirst: session_state from context.sqlite not conversation
R8_Separation: universal(copilot-instructions.md:1-72) != project_specific(after_NOTE)

DATABASE SCHEMA

```sql
CREATE TABLE session_context (
  id INTEGER PRIMARY KEY,
  date TEXT NOT NULL,
  summary TEXT NOT NULL,
  tasks_completed TEXT,
  files_modified TEXT,
  pending_tasks TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE session_notes (
  id INTEGER PRIMARY KEY,
  timestamp TEXT,
  note TEXT
);
```

INSTRUCTION FILE STRUCTURE
copilot-instructions.md:

- Lines 1-72: Universal (immutable)
- Line 73: `NOTE (IMPORTANT)...` marker
- After 73: Project-specific (goes to DB not markdown)

## TASK PROTOCOL

1. load(universal-rules.md)
2. read(CLAUDE.md)
3. query(context.sqlite)
4. parse(user_request)
5. validate(against rules)
6. batch_execute(changes)
7. update_db()

## PRECEDENCE

1. universal-rules.md (this file)
2. CLAUDE.md (project rules)
3. copilot-instructions.md (config)
4. context.sqlite (session state)
5. user_request (explicit only)

## FORCED AND OBLIGATORY - NO EXCEPTIONS
