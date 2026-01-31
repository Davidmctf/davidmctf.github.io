#!/usr/bin/env python3
"""
Agent Configuration Setup Script
Generic setup for agentconf directory to be used in any project.
"""

import os
import sys
import sqlite3
from pathlib import Path
from datetime import datetime


def create_database_schema(db_path: Path) -> None:
    """
    Create the agent configuration database schema.
    """
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Sessions table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT UNIQUE NOT NULL,
            project_id TEXT,
            project_name TEXT,
            status TEXT DEFAULT 'active',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # Session context table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS session_context (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT NOT NULL,
            date TEXT NOT NULL,
            summary TEXT,
            tasks_completed TEXT,
            files_modified TEXT,
            pending_tasks TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES sessions(session_id) ON DELETE CASCADE
        )
    """)

    # Session notes table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS session_notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT NOT NULL,
            timestamp TEXT NOT NULL,
            note TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES sessions(session_id) ON DELETE CASCADE
        )
    """)

    # Tasks table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT NOT NULL,
            task_id TEXT UNIQUE NOT NULL,
            action TEXT,
            status TEXT DEFAULT 'pending',
            output TEXT,
            error_message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            completed_at TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES sessions(session_id) ON DELETE CASCADE
        )
    """)

    # Agent states table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS agent_states (
            id TEXT PRIMARY KEY,
            session_id TEXT NOT NULL,
            agent_name TEXT NOT NULL,
            agent_type TEXT,
            status TEXT DEFAULT 'idle',
            progress INTEGER DEFAULT 0,
            current_task TEXT,
            findings TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES sessions(session_id) ON DELETE CASCADE
        )
    """)

    # Metrics table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS metrics (
            id TEXT PRIMARY KEY,
            project_id TEXT,
            session_id TEXT,
            metric_name TEXT NOT NULL,
            metric_value REAL,
            recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (session_id) REFERENCES sessions(session_id) ON DELETE CASCADE
        )
    """)

    # Create indexes
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_sessions_session_id ON sessions(session_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_session_context_session_id ON session_context(session_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_session_notes_session_id ON session_notes(session_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_tasks_session_id ON tasks(session_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_agent_states_session_id ON agent_states(session_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_metrics_session_id ON metrics(session_id)")

    conn.commit()
    conn.close()


def initialize_project(project_path: Path, project_name: str = None) -> str:
    """
    Initialize a new project with agent configuration.

    Args:
        project_path: Path to the project root
        project_name: Name of the project (defaults to directory name)

    Returns:
        session_id: The newly created session ID
    """
    if project_name is None:
        project_name = project_path.name

    db_path = project_path / ".vscode" / "context.sqlite"

    # Create agentconf directory if it doesn't exist
    agentconf_dir = project_path / "path/to/project"
    agentconf_dir.mkdir(exist_ok=True)

    # Create database if it doesn't exist
    if not db_path.exists():
        print(f"📁 Creating agent configuration database at: {db_path}")
        create_database_schema(db_path)

    # Generate session ID
    import uuid

    session_id = f"sess-{uuid.uuid4().hex[:8]}"

    # Insert new session
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO sessions (session_id, project_id, project_name, status)
        VALUES (?, ?, ?, 'active')
    """,
        (session_id, str(project_path), project_name),
    )

    conn.commit()
    conn.close()

    return session_id


def main():
    """Main setup function."""
    import argparse

    parser = argparse.ArgumentParser(
        description="Setup agent configuration for a project",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python setup_agentconf.py                 # Setup in current directory
  python setup_agentconf.py -p /path/to/project  # Setup in specific directory
  python setup_agentconf.py -n "My Project"     # Set custom project name
        """,
    )

    parser.add_argument("-p", "--path", type=Path, default=Path.cwd(), help="Path to the project root (default: current directory)")

    parser.add_argument("-n", "--name", type=str, default=None, help="Project name (default: directory name)")

    parser.add_argument("-r", "--reinit", action="store_true", help="Reinitialize database (remove existing)")

    args = parser.parse_args()

    # Handle reinitialize
    db_path = args.path / "path/to/project" / "context.sqlite"
    if args.reinit and db_path.exists():
        print(f"🗑️  Removing existing database: {db_path}")
        db_path.unlink()

    # Initialize project
    try:
        session_id = initialize_project(args.path, args.name)
        print(f"✅ Project initialized successfully!")
        print(f"📋 Session ID: {session_id}")
        print(f"📂 Project Path: {args.path}")
        print(f"\n📚 Configuration files in path/to/project/:")
        print(f"   - AGENTS.md (project-specific rules)")
        print(f"   - universal-rules.md (universal agent rules)")
        print(f"   - agents/ (agent definitions)")
        print(f"   - context.sqlite (session database)")
        print(f"\n💡 Copy AGENTS.md to your project root for project-specific rules.")
    except Exception as e:
        print(f"❌ Error initializing project: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
