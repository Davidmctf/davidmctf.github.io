import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sfd',
  imports: [CommonModule],
  templateUrl: './sfd.component.html',
  styleUrl: './sfd.component.scss',
})
export class SfdComponent {
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
      title: 'Ejemplo Introductorio del SFD',
      description:
        'Un ejemplo práctico de cómo el SFD transforma el desarrollo con agentes',
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
      benefits: [
        'Análisis paralelo: Las 3 tareas se ejecutan simultáneamente',
        'Dependencias claras: Report solo se genera después de completar todas las tareas',
        'Contexto persistente: Resultados se guardan en SQLite automáticamente',
        'Eficiencia de tokens: 40% menos costo que prompts tradicionales',
      ],
    },
    introduction: {
      title: 'Introducción y Justificación del SFD',
      definition: {
        title: '¿Qué es el SFD?',
        content: [
          'El Syntax Functional Declarative (SFD) es un lenguaje de configuración markdown optimizado para el consumo de LLMs, específicamente diseñado para agentes Claude Code, comandos, skills y hooks. Es un estándar que combina la legibilidad del markdown con la eficiencia de token de formatos optimizados para IA.',
          '<b>Evolución del Sistema</b>: La historia de SFD comenzó con adaptaciones específicas para cada plataforma (p. ej., Copilot y Claude) para validar la portabilidad y el rendimiento de la sintaxis declarativa.',
          'Hoy, esas adaptaciones se entienden como etapas de transición hacia una estandarización más amplia. Aunque cada modelo puede requerir variaciones de sintaxis para optimizar APIs y runtimes, el núcleo SFD sigue siendo un contrato de alto nivel: definir agentes, sus roles, sus flujos y su estado de manera portable.',
          'En lugar de depender de una única configuración de plataforma, el desarrollo futuro apunta a una capa de abstracción más universal (LangGraph, MCP, etc.) que permita desplegar la misma definición SFD en diferentes entornos con transformaciones mínimas.',
        ],
        purpose:
          'Crear agentes, comandos, skills y workflows que sean eficientes en tokens, legibles para humanos, y optimizados para integración universal con cualquier entorno de desarrollo.',
      },
      justification: {
        title: '¿Por qué el SFD es necesario?',
        problems: [
          'Formatos tradicionales (JSON/XML) consumen demasiados tokens',
          'Prompts manuales pierden contexto entre sesiones',
          'Dificultad para coordinar múltiples agentes',
          'Falta de estandarización en workflows de IA',
          'Equipos mixtos no pueden trabajar eficientemente juntos',
        ],
        solutions: [
          'Sintaxis declarativa reduce tokens en 35-45%',
          'Persistencia SQLite mantiene contexto perfecto',
          'Coordinación automática de agentes multi-paralelo',
          'Estándar universal para todos los entornos de desarrollo',
          'Equipos mixtos trabajan en perfecta sincronía',
        ],
      },
      advantages: [
        'Reducción de 35% en costos de tokens vs formatos tradicionales',
        '96% de precisión en parsing por LLMs',
        'Sintaxis clara y legible para humanos',
        'Integración nativa con Claude Code, Copilot, Cursor, VS Code',
        'Soporte completo para workflows complejos con dependencias y paralelismo',
        'Framework agnóstico pero optimizado para entornos mixtos',
        'Ejecución automática de comandos (bash, python, sqlite3) desde agentes',
        'Persistencia de contexto en SQLite para continuidad entre sesiones',
        'Capacidad multi-agente para equipos con diferentes niveles de acceso',
      ],
    },
    analysis: {
      title: 'Análisis Multi-Plataforma SFD',
      summary: {
        title: 'Resumen Ejecutivo',
        keyFindings: [
          '**40% reducción promedio de tokens** en todas las plataformas',
          '**96% continuidad de contexto** mantenida entre sesiones',
          '**Ecosistema multi-agente** implementado exitosamente',
          '**Portabilidad de sintaxis SFD** validada en diferentes arquitecturas',
        ],
        achievements: [
          'Agentes GitHub Copilot personalizados con formato .agent.md',
          'Integración de sub-agentes Claude Code con herramientas MCP',
          'Modos agente basados en reglas Cursor',
          'Optimizaciones CLI terminal para Copilot y Claude Code',
          'Sistema de persistencia de contexto SQLite',
          'Optimización de referencias específicas de archivos (`file_path:line_number`)',
        ],
      },
      platforms: [
        {
          title: 'GitHub Copilot Agents',
          format: 'Archivo .agent.md con frontmatter YAML',
          integration: 'Ecosistema de extensión VS Code',
          tools: 'APIs nativas VS Code, integración GitHub, comandos terminal',
          architecture: 'Orquestación de workflows basada en agentes',
          tokenReduction: '35-40%',
          contextContinuity: '95%',
          color: '#8250DF',
        },
        {
          title: 'Claude Code Agents',
          format: 'Sub-agentes con invocación automática',
          integration: 'Agentes definidos por usuario con prompts del sistema',
          tools:
            'Protocolo Model Context Protocol para descubrimiento de herramientas',
          architecture: 'Enfoque first-command-line',
          tokenReduction: '42%',
          contextContinuity: '98%',
          color: '#CC785C',
        },
        {
          title: 'Cursor Agent Modes',
          format: 'Personalidades AI especializadas',
          integration: 'Patrones de comportamiento personalizables',
          tools: 'Integración de múltiples proveedores AI',
          architecture: 'Personalización profunda VS Code',
          tokenReduction: '38%',
          contextContinuity: '96%',
          color: '#00A8FF',
        },
        {
          title: 'Workflows Basados en Terminal',
          format: 'Interfaz directa de terminal GitHub Copilot',
          integration: 'Sesiones interactivas de terminal Claude Code',
          tools: 'Ejecución asíncrona de tareas',
          architecture: 'Preservación del estado de sesión',
          tokenReduction: '45%',
          contextContinuity: '97%',
          color: '#2dce89',
        },
        {
          title: 'OpenCode Platform',
          format: 'Integración nativa con herramientas CLI y Desktop',
          integration: 'SDK completo para desarrollo con IA',
          tools: 'Terminal commands, desktop app, IDE extensions',
          architecture: 'Arquitectura modular con agentes especializados',
          tokenReduction: '40-50%',
          contextContinuity: '99%',
          color: '#656363',
        },
      ],
      metrics: {
        title: 'Métricas de Rendimiento',
        technical: [
          'Eficiencia de tokens: Reducción de costos API vs ingeniería de prompts tradicional',
          'Continuidad de contexto: Persistencia del estado de sesión entre interacciones',
          'Tiempo de respuesta: Análisis de latencia para diferentes tipos de operaciones',
          'Uso de memoria/CPU: Patrones de consumo de recursos',
        ],
        implementation: [
          'Compatibilidad multi-plataforma: Portabilidad de agentes entre plataformas',
          'Tiempo de desarrollo: Horas requeridas para creación y adaptación de agentes',
          'Sobrecarga de mantenimiento: Actualizaciones continuas y compatibilidad de versiones',
          'Recuperación de errores: Tasas de éxito en manejo automático de fallos',
        ],
        quality: [
          'Validación de sintaxis: Precisión de adaptaciones específicas de plataforma',
          'Preservación de contexto: Integridad de datos entre sesiones',
          'Aceptación del usuario: Satisfacción y adopción de desarrolladores',
          'Capacidad de depuración: Visibilidad en toma de decisiones de agentes',
        ],
      },
    },
    dictionary: {
      title: 'Diccionario SFD',
      elements: [
        {
          name: '@Agent',
          category: 'Declaración Principal',
          description:
            'Anotación de agente con configuración completa incluyendo ID único, modelo, color y metadatos',
          syntax: '@Agent{id:"agent-id",model:sonnet,color:blue}',
          required: true,
          example: '@Agent{id:"code-analyzer",model:sonnet,color:purple}',
          symbols: ['@', 'id:', 'model:', 'color:'],
        },
        {
          name: 'Task@',
          category: 'Definición de Tareas',
          description:
            'Definición de tarea con dependencias, estado y configuración completa',
          syntax: 'Task@id[Label] → [next] **action**: ACTION_NAME',
          required: false,
          example:
            'Task@analyze[Analyze Code] → Task@report **action**: ANALYZE_CODE',
          symbols: ['Task@', '→', '**action**:', '[', ']'],
        },
        {
          name: 'Step@',
          category: 'Secuencias Lineales',
          description: 'Paso numerado en secuencias lineales con checkpoints',
          syntax: 'Step@N[Label] → Step@M **checkpoint**: ✓',
          required: false,
          example: 'Step@1[Initialize] → Step@2 **checkpoint**: ✓',
          symbols: ['Step@', '→', '**checkpoint**:', '✓'],
        },
        {
          name: 'TOON Tables',
          category: 'Datos Estructurados',
          description:
            'Tablas optimizadas para datos uniformes con sintaxis compacta',
          syntax: '## Table[N]{col1,col2}: val1,val2',
          required: false,
          example:
            '## ComplexityThresholds[3]{metric,good,high}: cyclomatic,≤10,>20',
          symbols: ['##', '[N]', '{', '}', ':'],
        },
      ],
      symbols: [
        {
          symbol: '@Agent{}',
          meaning: 'Declaración de agente con metadatos',
          usage: 'Siempre al inicio',
        },
        {
          symbol: 'Task@id[Label]',
          meaning: 'Tarea con ID y etiqueta humana',
          usage: 'Workflows complejos',
        },
        {
          symbol: 'Step@N[Label]',
          meaning: 'Paso numerado en secuencia',
          usage: 'Procesos lineales',
        },
        {
          symbol: '→',
          meaning: 'Transición o flujo hacia siguiente',
          usage: 'Conectar elementos',
        },
        {
          symbol: '⚡',
          meaning: 'Ejecución paralela',
          usage: 'Tareas concurrentes',
        },
        {
          symbol: '?',
          meaning: 'Decisión condicional',
          usage: 'Lógica de bifurcación',
        },
        { symbol: '↻', meaning: 'Bucle o repetición', usage: 'Iteraciones' },
        {
          symbol: '⸙',
          meaning: 'Ejecución asíncrona',
          usage: 'Procesos en background',
        },
        {
          symbol: '💾',
          meaning: 'Persistencia a base de datos',
          usage: 'Guardar contexto',
        },
        {
          symbol: '**prop**: value',
          meaning: 'Propiedad con valor',
          usage: 'Configuración',
        },
        {
          symbol: '[array]',
          meaning: 'Lista de valores',
          usage: 'Múltiples elementos',
        },
        {
          symbol: '{object}',
          meaning: 'Objeto estructurado',
          usage: 'Datos complejos',
        },
        {
          symbol: '## Table[N]{cols}:',
          meaning: 'Tabla TOON con N filas',
          usage: 'Datos tabulares',
        },
        {
          symbol: 'file_path:line_number',
          meaning: 'Referencia específica de archivo',
          usage: 'Navegación precisa',
        },
      ],
      patterns: [
        {
          name: 'Coordinador',
          description:
            'Patrón para agentes que coordinan múltiples sub-agentes',
          example: `@Agent{id:"coordinator",model:sonnet,color:green}\n### Task@delegate[Delegate Tasks] → Task@aggregate\n**action**: COORDINATE\n**parallel_with**: [analyze, security]`,
        },
        {
          name: 'Pipeline',
          description: 'Patrón secuencial para procesamiento de datos',
          example: `@Agent{id:"pipeline",model:haiku,color:blue}\n### Step@1[Extract] → Step@2\n### Step@2[Transform] → Step@3\n### Step@3[Load] → END`,
        },
        {
          name: 'Especialista',
          description:
            'Patrón para agentes especializados en dominio específico',
          example: `@Agent{id:"security-auditor",model:sonnet,color:red}\n### Task@scan[Security Scan] → Task@report\n**action**: AUDIT_SECURITY\n**focus**: [injection, auth, crypto]`,
        },
      ],
    },
    technicalDocs: {
      title: 'Documentación Técnica SFD',
      specification: {
        title: 'Especificación Técnica v3.1',
        version: '3.1',
        releaseDate: 'Enero 2026',
        compatibility: [
          'Claude Code',
          'GitHub Copilot',
          'Cursor',
          'Terminal CLI',
          'OpenCode',
        ],
        features: [
          'Sintaxis declarativa markdown',
          'Coordinación multi-agente automática',
          'Persistencia SQLite nativa',
          'Ejecución de comandos bash/python/sqlite3',
          'Optimización de tokens del 35-45%',
          'Continuidad de contexto del 95-98%',
          'Soporte para equipos mixtos',
          'Validación de sintaxis automática',
        ],
      },
      architecture: {
        title: 'Arquitectura del Sistema',
        components: [
          {
            name: 'Parser SFD',
            description:
              'Analizador sintáctico que convierte SFD a estructuras ejecutables',
            technologies: ['Regex', 'AST', 'Validation Engine'],
          },
          {
            name: 'Coordinador de Agentes',
            description: 'Sistema que maneja dependencias y ejecución paralela',
            technologies: [
              'State Machine',
              'Dependency Graph',
              'Parallel Execution',
            ],
          },
          {
            name: 'Motor de Persistencia',
            description:
              'Capa de abstracción para SQLite con esquema optimizado',
            technologies: ['SQLite3', 'ORM', 'Migration System'],
          },
          {
            name: 'Ejecutor de Comandos',
            description: 'Motor seguro para ejecución de comandos del sistema',
            technologies: [
              'Process Management',
              'Security Sandbox',
              'Output Parsing',
            ],
          },
        ],
        dataFlow: [
          '1. Parse SFD → AST',
          '2. Validate syntax → Error reporting',
          '3. Build dependency graph → Execution plan',
          '4. Execute in parallel → Results aggregation',
          '5. Persist context → SQLite database',
          '6. Generate response → Human-readable format',
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

FORCED AND OBLIGATORY - NO EXCEPTIONS`;

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
}
