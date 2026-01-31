#!/usr/bin/env python3
"""
Sanitize and dump the context SQLite database.
- Reads /.vscode/context.sqlite
- Redacts potential credentials in values based on column names or value patterns
- Exports a JSON structure with all tables and rows (credentials redacted)
- Output: context_dump_redacted.json in the project root
"""

import sqlite3
import json
import re
import os

DB_PATH = (
    ".vscode/context.sqlite"
)
REDACTED = "[REDACTED]"
CRED_KEYWORDS = {
    "password",
    "passwd",
    "pwd",
    "secret",
    "token",
    "apikey",
    "api_key",
    "credential",
    "access_key",
    "secret_key",
}
PATTERNS = [
    re.compile(r"Bearer\s+[A-Za-z0-9\-_.]+", re.I),
    re.compile(r"ApiKey\s*[:=]\s*[A-Za-z0-9\-_.]+", re.I),
    re.compile(r"API\s*KEY\s*[:=]\s*[A-Za-z0-9\-_.]+", re.I),
    re.compile(r"sk-[A-Za-z0-9\-_.]+"),
    re.compile(r"ghp_[A-Za-z0-9]+"),
    re.compile(r"AIza[A-Za-z0-9\-_]+"),
]


def redact_value(key: str, val):
    # Non-string types: numbers, nulls, etc.
    if val is None:
        return val
    if isinstance(val, (int, float)):
        return val
    # If the column name hints at sensitive data, redact
    if any(k in key.lower() for k in CRED_KEYWORDS):
        return REDACTED
    if isinstance(val, str):
        # Quick keyword-based redaction
        if any(k in key.lower() for k in CRED_KEYWORDS):
            return REDACTED
        # Pattern-based redaction for inline tokens within strings
        for pat in PATTERNS:
            if pat.search(val):
                return REDACTED
        return val
    # Fallback for other types
    return val


def main():
    if not os.path.exists(DB_PATH):
        print(f"DB not found: {DB_PATH}")
        return 2
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    data = {}
    redactions = {}

    tables = [
        row[0]
        for row in cur.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';"
        )
    ]
    for t in tables:
        cols = [row[1] for row in cur.execute(f'PRAGMA table_info("{t}");')]
        rows = cur.execute(f'SELECT * FROM "{t}"').fetchall()
        tbl_rows = []
        for r in rows:
            row_dict = {}
            for i, val in enumerate(r):
                col = cols[i] if i < len(cols) else f"col_{i}"
                row_dict[col] = redact_value(col, val)
            tbl_rows.append(row_dict)
        data[t] = tbl_rows
        redacted_count = sum(
            1 for row in tbl_rows for v in row.values() if v == REDACTED
        )
        redactions[t] = redacted_count

    out_path = os.path.join(os.path.dirname(DB_PATH), "context_dump_redacted.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, default=str)

    print(f"Dump redacted generado: {out_path}")
    print("Resúmen de redacciones por tabla:")
    for t in tables:
        print(f" - {t}: {redactions.get(t, 0)} redacciones")

    conn.close()


if __name__ == "__main__":
    main()
