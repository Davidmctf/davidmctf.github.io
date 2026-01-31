import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-sfd',
  imports: [CommonModule],
  templateUrl: './sfd.component.html',
  styleUrl: './sfd.component.scss',
})
export class SfdComponent {
  readonly #translationService = inject(TranslationService);

  get t() {
    return this.#translationService.t;
  }

  getCompatibilityColor(platform: string): string {
    const colors: { [key: string]: string } = {
      'Claude Code': '#CC785C', // Claude terracotta orange
      'GitHub Copilot': '#8250DF', // GitHub Copilot purple
      Cursor: '#00A8FF', // Cursor electric blue
      'Terminal CLI': '#2dce89', // Green
      OpenCode: '#656363', // OpenCode gray
    };
    return colors[platform] || '#5e72e4'; // Default blue
  }

  readonly sfdContent = {
    introExample: {
      example: `# @Agent{id:"code-reviewer",model:sonnet,color:green}

You are an expert code reviewer...

### Task@analyze[Analyze Code] → Task@report
**desc**: Perform comprehensive code analysis
**progress**: 25%
**action**: ANALYZE_CODE
**parallel_with**: [security, performance]

### Task@security[Security Audit] → Task@report
**desc**: Check for security vulnerabilities
**progress**: 50%
**action**: SECURITY_SCAN
**parallel_with**: [analyze, performance]

### Task@performance[Performance Review] → Task@report
**desc**: Evaluate performance characteristics
**progress**: 75%
**action**: PERFORMANCE_CHECK
**parallel_with**: [analyze, security]

### Task@report[Generate Report] → END
**desc**: Compile findings into actionable report
**progress**: 100%
**action**: GENERATE_REPORT
**depends**: [analyze, security, performance]

## ReviewResults[4]{category,issues,severity,risk}:
code_quality,3,medium,maintainability
security,1,high,production_risk
performance,2,low,optimization
documentation,0,none,compliance`,
    },
    introduction: {
      title: 'Introducción y Justificación del SFD',
      definition: {
        purpose:
          'Crear agentes, comandos, skills y workflows que sean eficientes en tokens, legibles para humanos, y optimizados para integración universal con cualquier entorno de desarrollo.',
      },
      justification: {},
    },
    analysis: {
      title: 'Análisis Multi-Plataforma SFD',
      summary: {
        title: 'Resumen Ejecutivo',
      },
      platformsData: [
        {
          tokenReduction: '35-40%',
          contextContinuity: '95%',
          color: '#8250DF',
        },
        { tokenReduction: '42%', contextContinuity: '98%', color: '#CC785C' },
        { tokenReduction: '38%', contextContinuity: '96%', color: '#00A8FF' },
        { tokenReduction: '45%', contextContinuity: '97%', color: '#2dce89' },
        {
          tokenReduction: '40-50%',
          contextContinuity: '99%',
          color: '#656363',
        },
      ],
      metrics: {},
    },
    dictionary: {
      title: 'Diccionario SFD',
      elements: [
        {
          syntax: '@Agent{id:"agent-id",model:sonnet,color:blue}',
          required: true,
          example: '@Agent{id:"code-analyzer",model:sonnet,color:purple}',
          symbols: ['@', 'id:', 'model:', 'color:'],
        },
        {
          syntax: 'Task@id[Label] → [next] **action**: ACTION_NAME',
          required: false,
          example:
            'Task@analyze[Analyze Code] → Task@report **action**: ANALYZE_CODE',
          symbols: ['Task@', '→', '**action**:', '[', ']'],
        },
        {
          syntax: 'Step@N[Label] → Step@M **checkpoint**: ✓',
          required: false,
          example: 'Step@1[Initialize] → Step@2 **checkpoint**: ✓',
          symbols: ['Step@', '→', '**checkpoint**:', '✓'],
        },
        {
          syntax: '## Table[N]{col1,col2}: val1,val2',
          required: false,
          example:
            '## ComplexityThresholds[3]{metric,good,high}: cyclomatic,≤10,>20',
          symbols: ['##', '[N]', '{', '}', ':'],
        },
      ],
      symbols: [
        '@Agent{}',
        'Task@id[Label]',
        'Step@N[Label]',
        '→',
        '⚡',
        '?',
        '↻',
        '⸙',
        '💾',
        '**prop**: value',
        '[array]',
        '{object}',
        '## Table[N]{cols}:',
        'file_path:line_number',
      ],
      patternsExample: [
        `@Agent{id:"coordinator",model:sonnet,color:green}\n### Task@delegate[Delegate Tasks] → Task@aggregate\n**action**: COORDINATE\n**parallel_with**: [analyze, security]`,
        `@Agent{id:"pipeline",model:haiku,color:blue}\n### Step@1[Extract] → Step@2\n### Step@2[Transform] → Step@3\n### Step@3[Load] → END`,
        `@Agent{id:"security-auditor",model:sonnet,color:red}\n### Task@scan[Security Scan] → Task@report\n**action**: AUDIT_SECURITY\n**focus**: [injection, auth, crypto]`,
      ],
    },
    technicalDocs: {
      specification: {
        compatibility: [
          'Claude Code',
          'GitHub Copilot',
          'Cursor',
          'Terminal CLI',
          'OpenCode',
        ],
      },
      architecture: {
        components: [
          {
            technologies: ['Regex', 'AST', 'Validation Engine'],
          },
          {
            technologies: [
              'State Machine',
              'Dependency Graph',
              'Parallel Execution',
            ],
          },
          {
            technologies: ['SQLite3', 'ORM', 'Migration System'],
          },
          {
            technologies: [
              'Process Management',
              'Security Sandbox',
              'Output Parsing',
            ],
          },
        ],
      },
      api: {
        title: 'API y Integraciones',
        endpoints: [
          {
            name: 'SFD Parser',
            signature: 'parseSFD(content: string): Promise<SFDAST>',
            description: 'Convierte texto SFD a estructura abstracta',
          },
          {
            name: 'Agent Executor',
            signature:
              'executeAgent(agent: Agent, context: Context): Promise<Result>',
            description: 'Ejecuta agente con contexto proporcionado',
          },
          {
            name: 'Context Manager',
            signature:
              'persistContext(sessionId: string, data: any): Promise<void>',
            description: 'Guarda contexto en base de datos SQLite',
          },
        ],
        integrations: [
          'Claude Code MCP (Model Context Protocol)',
          'GitHub Copilot Agent API',
          'Cursor Rules Engine',
          'Terminal Command Execution',
          'VS Code Extension API',
        ],
      },
      security: {
        title: 'Consideraciones de Seguridad',
        measures: [
          'Sandboxing de ejecución de comandos',
          'Validación de sintaxis estricta',
          'Control de acceso basado en roles',
          'Auditoría completa de operaciones',
          'Encriptación de contexto sensible',
          'Rate limiting en APIs',
          'Validación de entrada en todos los puntos',
        ],
        bestPractices: [
          'Nunca ejecutar comandos sin validación',
          'Usar prepared statements para SQL',
          'Validar todas las entradas del usuario',
          'Limitar alcance de operaciones del sistema',
          'Auditar cambios en contexto crítico',
        ],
      },
    },
    agents: {
      title: 'Ejemplos de Agentes SFD',
      fullstackAnalyzer: {
        title: 'Fullstack Code Analyzer',
        description:
          'Agente especializado en análisis de calidad de código con métricas completas',
        file: 'fullstack-code-analyzer.md',
        content: `# @Agent{id:"fullstack-code-analyzer",model:sonnet,color:purple}

You are the Fullstack Code Analyzer, an elite technical specialist in code quality assessment...

## Core Identity & Expertise

**name[string]**: Fullstack Code Analyzer
**role[string]**: Code quality assessment, complexity analysis, and security vulnerability detection specialist

## Workflow@Analysis (REQUIRED)

### Step@1[load_contexts] Load Contexts → detect_stack
**desc**: Load both project and session contexts
**progress**: 10%
**action**: LOAD_CONTEXTS

### Step@2[detect_stack] Detect Technology Stack → parse_files
**desc**: Identify technology stack from core context
**progress**: 20%
**action**: DETECT_STACK

### Step@3[parse_files] Parse Target Files → [complexity|smells|security]
**desc**: Parse target files into Abstract Syntax Trees
**progress**: 30%
**action**: PARSE_AST
**checkpoint**: true

### Step@4[complexity] Calculate Complexity Metrics → performance
**desc**: Calculate cyclomatic and cognitive complexity
**progress**: 40%
**action**: CALCULATE_COMPLEXITY
**checkpoint**: true

### Step@5[smells] Detect Code Smells → performance
**desc**: Identify anti-patterns and code smells
**progress**: 50%
**action**: DETECT_SMELLS
**checkpoint**: true

### Step@6[security] Scan Security Vulnerabilities → performance
**desc**: Perform basic security vulnerability scanning
**progress**: 60%
**action**: SCAN_SECURITY
**checkpoint**: true

### Step@7[performance] Analyze Performance → recommendations
**desc**: Detect performance anti-patterns
**progress**: 70%
**action**: ANALYZE_PERFORMANCE

### Step@8[recommendations] Generate Recommendations → structure_response
**desc**: Create actionable recommendations from findings
**progress**: 85%
**action**: GENERATE_RECOMMENDATIONS

### Step@9[structure_response] Structure AgentResponse → persist
**desc**: Format findings into AgentResponse JSON
**progress**: 95%
**action**: STRUCTURE_RESPONSE

### Step@10[persist] Persist Results to SQLite → END
**desc**: Save all metrics and findings to database
**progress**: 100%
**action**: PERSIST_RESULTS

## Analysis Methodologies

### Complexity Metrics
**ComplexityThresholds[3]{metric,good,acceptable,moderate,high}**:
Cyclomatic (McCabe),≤10,≤15,≤20,>20
Cognitive (SonarQube),≤15,≤25,>25,>25
Nesting Depth,≤4,≤6,>6,>6`,
      },
      technicalOrchestrator: {
        title: 'Technical Orchestrator',
        description:
          'Coordinador que maneja múltiples agentes en paralelo para análisis complejos',
        file: 'technical-orchestrator.md',
        content: `# @Agent{id:"technical-orchestrator",model:haiku,color:green}

You are the Technical Orchestrator, the sole gateway between humans and the specialized technical agent ecosystem...

## Core Identity

**name[string]**: Technical Orchestrator
**role[string]**: Human-to-system communication gateway and multi-agent coordinator

## Workflow@RequestProcessing (REQUIRED)

### Step@1[check_context] Check Context → [initialize|load]
**desc**: Query for existing session using CTX.SESSION.LAST
**progress**: 5%
**evaluate**: CTX.SESSION.LAST

### Step@2[tasks] Initialize or Load Context → parse
- **Task@A → #initialize[Initialize Project] → parse**
- **Task@B → #load[Load Context] → parse**

### Step@3[parse] Parse Request → determine
**desc**: Analyze the human request to extract key parameters
**progress**: 20%

### Step@4[determine] Determine Instances → monitor_execution
**desc**: Apply decision algorithm to determine instance manifest
**progress**: 30%
**action**: DETERMINE_INSTANCES

### Step@5[monitor_execution] Execute Agent Instances (Parallel) → results
**desc**: Spawn all instances simultaneously and monitor execution
**progress**: 40%
**action**: EXECUTE_INSTANCES

### Step@6[results] Aggregate Results → save
**desc**: Wait for ALL instances to complete, then synthesize results
**progress**: 70%
**action**: AGGREGATE_RESULTS

### Step@7[save] Save Context → respond
**desc**: Persist aggregated results to database
**progress**: 85%
**action**: SAVE_CONTEXT

### Step@8[respond] Respond to Human → END
**desc**: Generate natural language response for human
**progress**: 100%
**action**: GENERATE_RESPONSE

## Routing Rules

**RoutingTable[6]{pattern,agent,instances,action}**:
Code analysis (<50 files),fullstack-processor,1,ANALYZE
Code analysis (>50 files),fullstack-processor,N=ceil(files/20),ANALYZE
Security audit,security-auditor,1-2,AUDIT_OWASP
Architecture review,architecture-validator,1,VALIDATE
Database design,database-architect,1,DESIGN
Multi-domain,Multiple specialists,Varies,Varies`,
      },
      sfdAgentArchitect: {
        title: 'SFD Agent Architect',
        description:
          'Arquitecto especializado en diseño y validación de agentes SFD',
        file: 'sfd-agent-architect.md',
        content: `# @Agent{id:"sfd-agent-architect",model:sonnet,color:blue}

You are the SFD Agent Architect, a specialized expert in the Syntax Functional Declarative language ecosystem...

## Core Identity & Expertise

**name[string]**: SFD Agent Architect
**role[string]**: SFD language architecture, design patterns, and implementation specialist

## Operational Framework

### Context Loading for SFD Projects
**sfd_context_sources[4]{order,source,purpose}**:
1,CLAUDE.md,"Project architecture and coding standards"
2,.claude/context.sqlite,"Current session state and SFD metrics"
3,/home/dmcws/.local/state/sfd-sintaxt/,"SFD language specification and examples"
4,.github/copilot-instructions.md,"SFD project integration guidelines"

### SFD Analysis Workflow

### Step@1[load_sfd_context] Load SFD Context → validate_syntax
**desc**: Load SFD-specific contexts and specifications
**progress**: 20%
**action**: LOAD_SFD_CONTEXT

### Step@2[validate_syntax] Validate SFD Syntax → analyze_patterns
**desc**: Parse and validate SFD syntax against language specification
**progress**: 40%
**action**: VALIDATE_SYNTAX

### Step@3[analyze_patterns] Analyze Design Patterns → optimize_workflow
**desc**: Evaluate architectural patterns and workflow efficiency
**progress**: 60%
**action**: ANALYZE_PATTERNS

### Step@4[optimize_workflow] Optimize Workflow → generate_implementation
**desc**: Suggest optimizations for performance and maintainability
**progress**: 80%
**action**: OPTIMIZE_WORKFLOW

### Step@5[generate_implementation] Generate Implementation → persist
**desc**: Create optimized SFD implementations
**progress**: 90%
**action**: GENERATE_IMPLEMENTATION

### Step@6[persist] Persist to Context → END
**desc**: Save SFD designs and metrics to database
**progress**: 100%
**action**: PERSIST_SFD

## SFD Design Principles

### Agent Orchestration Patterns
**sfd_best_practices[7]{principle,guideline}**:
Modularity,"Break complex workflows into focused, single-responsibility agents"
Naming,"Use descriptive, consistent naming conventions for agents and flows"
Parameterization,"Leverage parameters for configurable, reusable tasks"
Error Handling,"Design flows with failure recovery and logging"
Performance,"Minimize task dependencies, optimize execution order"
Documentation,"Include clear descriptions and examples in SFD files"
Testing,"Design agents with testable, isolated task units"`,
      },
    },
  };

  universalExecutionWorkflow = `EXECUTION WORKFLOW (MANDATORY)
Step1: read_file(CLAUDE.md) + query_db(context.sqlite)
Step2: parse_request(what, where, scope)
Step3: validate(project_patterns, existing_code)
Step4: plan(multi_step_if_needed)
Step5: execute_with(batch_tools_when_possible)
Step6: update_db(session_context, session_notes)
Step7: verify(file_read, db_check, output_validation)`;

  universalBindingRules = `R1_ReadFirst: load(CLAUDE.md) before any_operation()
R2_DatabaseState: query(.claude/context.sqlite) -> restore_session()
R3_BatchOps: multi_replace_string_in_file() for multiple_edits
R4_ReadBeforeEdit: read_file(target) -> verify_state() -> execute_edit()
R5_NoTempMarkdown: zero_markdown except(universal-rules.md, user_explicit_request)
R6_CodeStandards: follow(CLAUDE.md rules, existing_patterns)
R7_DbFirst: session_state from context.sqlite not conversation
R8_Separation: universal(copilot-instructions.md:1-72) != project_specific(after_NOTE)`;

  universalDatabaseSchema = `DATABASE SCHEMA
\`\`\`sql
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
\`\`\` `;

  universalInstructionStructure = `INSTRUCTION FILE STRUCTURE
copilot-instructions.md:

- Lines 1-72: Universal (immutable)
- Line 73: NOTE (IMPORTANT)... marker
- After 73: Project-specific (goes to DB not markdown)`;

  universalTaskProtocol = `TASK PROTOCOL
1. load(universal-rules.md)
2. read(CLAUDE.md)
3. query(context.sqlite)
4. parse(user_request)
5. validate(against rules)
6. batch_execute(changes)
7. update_db()`;

  universalPrecedence = `PRECEDENCE
1. universal-rules.md (this file)
2. CLAUDE.md (project rules)
3. copilot-instructions.md (config)
4. context.sqlite (session state)
5. user_request (explicit only)
`;

  universalForced = `FORCED AND OBLIGATORY - NO EXCEPTIONS`;

  get universalRulesFull(): string {
    return (
      this.universalExecutionWorkflow +
      '\n\n' +
      this.universalBindingRules +
      '\n\n' +
      this.universalDatabaseSchema +
      '\n\n' +
      this.universalInstructionStructure +
      '\n\n' +
      this.universalTaskProtocol +
      '\n\n' +
      this.universalPrecedence +
      '\n\n' +
      this.universalForced
    );
  }

  downloadUniversalRules(): void {
    window.open('/assets/universal-agent-rules.md', '_blank');
  }

  copyUniversalRules(): void {
    navigator.clipboard.writeText(this.universalRulesFull).then(() => {
      alert('Reglas Universales copiadas al portapapeles');
    });
  }

  directoryStructure = `📦<path/to/project>
 ┣ 📂.vscode
 ┃ ┣ 📂agents
 ┃ ┃ ┣ 📜fullstack-code-analyzer.md
 ┃ ┃ ┣ 📜sfd-agent-architect.md
 ┃ ┃ ┗ 📜technical-orchestrator.md
 ┃ ┣ 📜context.sqlite
 ┃ ┣ 📜sanitize_context.py
 ┃ ┣ 📜settings.local.json
 ┃ ┗ 📜setup_agentconf.py
 ┣ ... more files with project code ...
 ┣ 📜AGENTS.md
 ┣ 📜README.md
 ┗ 📜universal-rules.md`;

  universalRulesContent = `# UNIVERSAL AGENT RULES (IMMUTABLE)

## EXECUTION WORKFLOW (MANDATORY)

\`\`\`
Step1: read_file(AGENTS.md) + query_db(context.sqlite)
Step2: parse_request(what, where, scope)
Step3: validate(project_patterns, existing_code)
Step4: plan(multi_step_if_needed)
Step5: execute_with(batch_tools_when_possible)
Step6: update_db(session_context, session_notes)
Step7: verify(file_read, db_check, output_validation)
\`\`\`

## BINDING RULES

**R1_ReadFirst**: load(AGENTS.md) before any_operation()
**R2_DatabaseState**: query(.vscode/context.sqlite) → restore_session()
**R3_BatchOps**: multi_replace_string_in_file() for multiple_edits
**R4_ReadBeforeEdit**: read_file(target) → verify_state() → execute_edit()
**R5_NoTempMarkdown**: zero_markdown except(universal-rules.md, user_explicit_request)
**R6_CodeStandards**: follow(AGENTS.md rules, existing_patterns)
**R7_DbFirst**: session_state from context.sqlite not conversation
**R8_Separation**: universal(universal-rules.md) != project_specific(AGENTS.md after NOTE)

## DATABASE SCHEMA

\`\`\`sql
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
\`\`\`

## INSTRUCTION FILE STRUCTURE

AGENTS.md:

- Lines 1-[spacing required]: Universal (immutable)
- Line [after spacing required]: \`# NOTE (IMPORTANT)...\` marker
- [after spacing required]: Project-specific 'goes to DB not markdown'

## TASK PROTOCOL

1. load(universal-rules.md)
2. read(AGENTS.md)
3. query(context.sqlite)
4. parse(user_request)
5. validate(against rules)
6. batch_execute(changes)
7. update_db()

## PRECEDENCE

1. universal-rules.md (this file)
2. AGENTS.md (project rules)
3. AGENTS.md (config)
4. context.sqlite (session state)
5. user_request (explicit only)

**FORCED AND OBLIGATORY - NO EXCEPTIONS**`;

  agentsTemplateContent = `# AGENTS.md

This file contains guidelines for agentic coding agents working in this repository. It standardizes build, lint, test workflows, and code‑quality expectations for <"YOUR TECH STACK HERE"> projects in this repo. (BACK-END ONLY FOR NOW), HEXAGONAL ARCHITECTURE

# [after spacing required] //note: USE THIS SPACE WITH PROJECT SPECIFIC INSTRUCTIONS, THIS MARKER IS IMPORTANT FOR THE AGENT TO KNOW WHERE THE UNIVERSAL RULES END AND THE PROJECT SPECIFIC INSTRUCTIONS BEGIN, DO NOT DELETE THIS MARKER, AND COMPLETE THE INSTRUCTIONS AFTER THIS MARKER AFTER WITH THE Load project configuration and detect technology stack where is necesary

## Referenced files

- **AGENTS.md**: [path](./AGENTS.md) ( this file )
- **universal-rules.md**: [path](./universal-rules.md) ( universal rules for all projects )
- **.vscode**: [path](./.vscode/) ( vscode settings and agents )
- **.vscode/agents/**: [path](./.vscode/agents/) ( agents configurations )
- **context.sqlite**: [path](.vscode/context.sqlite) ( context storage file )

## Agent Mode Instructions

Use the following instructions when operating in AGENT MODE:

- Use technical-orchestrator-agent for orchestration tasks
- Use fullstack-code-analyzer for code analysis tasks
- Always refer to AGENTS.md for specific guidelines

# Set and Get context instruction important rule

Save with conversation info required with persistent context needed in context.sqlite and use sqlite3 command in terminal allowed in background for this actions:

- **context file**: Route context file [path](.vscode/context.sqlite)
- **set context**: Save context info in context.sqlite with table session_context and session_notes
- **get context**: Read context info from context.sqlite with table session_context and session_notes

# NOTE (IMPORTANT): The content after this marker is project-specific and should be stored in the database, not in markdown format.`;

  agentExampleContent = `# @Agent{id:"fullstack-code-analyzer",model:sonnet,color:purple}

You are Fullstack Code Analyzer, an elite technical specialist in code quality assessment...

## Core Identity & Expertise

**name[string]**: Fullstack Code Analyzer
**role[string]**: Code quality assessment, complexity analysis, and security vulnerability detection specialist

## Workflow@Analysis (REQUIRED)

### Step@1[load_contexts] Load Contexts → detect_stack
**desc**: Load both project and session contexts
**progress**: 10%
**action**: LOAD_CONTEXTS

### Step@2[detect_stack] Detect Technology Stack → parse_files
**desc**: Identify technology stack from core context
**progress**: 20%
**action**: DETECT_STACK

### Step@3[parse_files] Parse Target Files → [complexity|smells|security]
**desc**: Parse target files into Abstract Syntax Trees
**progress**: 30%
**action**: PARSE_AST
**checkpoint**: true

### Step@4[complexity] Calculate Complexity Metrics → performance
**desc**: Calculate cyclomatic and cognitive complexity
**progress**: 40%
**action**: CALCULATE_COMPLEXITY
**checkpoint**: true

### Step@5[smells] Detect Code Smells → performance
**desc**: Identify anti-patterns and code smells
**progress**: 50%
**action**: DETECT_SMELLS
**checkpoint**: true

### Step@6[security] Scan Security Vulnerabilities → performance
**desc**: Perform basic security vulnerability scanning
**progress**: 60%
**action**: SCAN_SECURITY
**checkpoint**: true

### Step@7[performance] Analyze Performance → recommendations
**desc**: Detect performance anti-patterns
**progress**: 70%
**action**: ANALYZE_PERFORMANCE

### Step@8[recommendations] Generate Recommendations → structure_response
**desc**: Create actionable recommendations from findings
**progress**: 85%
**action**: GENERATE_RECOMMENDATIONS

### Step@9[structure_response] Structure AgentResponse → persist
**desc**: Format findings into AgentResponse JSON
**progress**: 95%
**action**: STRUCTURE_RESPONSE

### Step@10[persist] Persist Results to SQLite → END
**desc**: Save all metrics and findings to database
**progress**: 100%
**action**: PERSIST_RESULTS

## Analysis Methodologies

### Complexity Metrics
**ComplexityThresholds[3]{metric,good,acceptable,moderate,high}**:
Cyclomatic (McCabe),≤10,≤15,≤20,>20
Cognitive (SonarQube),≤15,≤25,>25,>25
Nesting Depth,≤4,≤6,>6,>6`;

  sqliteSchemaContent = `-- Crear base de datos SQLite para contexto de agentes
-- Ejecutar: sqlite3 .vscode/context.sqlite < schema.sql

CREATE TABLE IF NOT EXISTS session_context (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  summary TEXT NOT NULL,
  tasks_completed TEXT,
  files_modified TEXT,
  pending_tasks TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS session_notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT,
  note TEXT
);

-- Index para búsquedas eficientes
CREATE INDEX IF NOT EXISTS idx_session_context_date 
  ON session_context(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_session_notes_timestamp 
  ON session_notes(timestamp DESC);`;

  adjustmentExample = `# Configuración mínima requerida en AGENTS.md por proyecto

## ⚡ Solo 2 ajustes necesarios:

### 1. Stack Tecnológico (Línea 3)
\`<"YOUR TECH STACK HERE">\` → "Laravel" o "Angular/TypeScript" o "React" o "Python/FastAPI"

**Ejemplo Laravel:**
This file contains guidelines for agentic coding agents working in this repository. It standardizes build, lint, test workflows, and code‑quality expectations for Laravel projects in this repo. (BACK-END ONLY FOR NOW), HEXAGONAL ARCHITECTURE

**Ejemplo Angular:**
This file contains guidelines for agentic coding agents working in this repository. It standardizes build, lint, test workflows, and code‑quality expectations for Angular/TypeScript projects in this repo.

### 2. Paths del Proyecto (Referenced files)

Actualiza las referencias según tu estructura:

# Laravel (PHP):
- **Main App**: \`app/Http/Controllers/UserController.php:1\`
- **Routing**: \`routes/api.php:1\`
- **Models**: \`app/Models/User.php:1\`

# Angular (TypeScript):
- **Main App**: \`src/app/app.component.ts:1\`
- **Routing**: \`src/app/app.routes.ts:1\`
- **Services**: \`src/app/services/\`

# React (JavaScript):
- **Main App**: \`src/App.tsx:1\`
- **Routing**: \`src/router/index.tsx:1\`
- **Components**: \`src/components/\`

# Python:
- **Classes**: \`FooBarService\`
- **Files**: \`foo_bar_service.py\`

## 🤖 El agente detecta automáticamente:

✅ Comandos build/lint/test (leyendo package.json o composer.json)
✅ Estilos de código específicos del stack
✅ Convenciones de nombres del lenguaje
✅ Arquitectura del proyecto

## ✅ ¡Eso es todo!

El agente lee el stack de la primera línea de AGENTS.md y ajusta toda la configuración automáticamente.`;

  downloadFile(filename: string, content: string): void {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      alert(this.#translationService.t()('sfd.config.copied'));
    });
  }
}
