import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sfd',
  imports: [CommonModule],
  templateUrl: './sfd.component.html',
  styleUrl: './sfd.component.scss',
})
export class SfdComponent {
  readonly sfdDocs = {
    definition: {
      title: 'Definición del SFD v3.1',
      content: `El Syntax Functional Declarative (SFD) es un lenguaje de configuración markdown optimizado para el consumo de LLMs, específicamente diseñado para agentes Claude Code, comandos, skills y hooks. Es un estándar que combina la legibilidad del markdown con la eficiencia de token de formatos optimizados para IA, logrando una reducción del 35% en costos de API mientras mantiene el 96% de precisión en parsing.`,
      purpose:
        'Crear agentes, comandos, skills y workflows que sean eficientes en tokens, legibles para humanos, y optimizados para integración con Claude Code.',
      advantages: [
        'Reducción de 35% en costos de tokens vs formatos tradicionales',
        '96% de precisión en parsing por LLMs',
        'Sintaxis clara y legible para humanos',
        'Integración nativa con Claude Code',
        'Soporte completo para workflows complejos con dependencias y paralelismo',
        'Framework agnóstico pero optimizado para Claude',
      ],
    },
    syntax: {
      title: 'Sintaxis del SFD v3.1',
      elements: [
        {
          name: '@Agent',
          description: 'Anotación de agente con configuración completa',
          syntax: '@Agent{id:"agent-id",model:sonnet,color:blue}',
          required: true,
        },
        {
          name: 'Task@',
          description: 'Definición de tarea con dependencias y estado',
          syntax: 'Task@id[Label] → [next] **action**: ACTION_NAME',
          required: false,
        },
        {
          name: 'Step@',
          description: 'Paso numerado en secuencias lineales',
          syntax: 'Step@N[Label] → Step@M **checkpoint**: ✓',
          required: false,
        },
        {
          name: 'TOON Tables',
          description: 'Tablas optimizadas para datos uniformes',
          syntax: '## Table[N]{col1,col2}: val1,val2',
          required: false,
        },
      ],
      grammar: `# @Agent{id:"agent-id",model:sonnet,color:blue}

### Task@id[Human Label] → [next_tasks]
**desc**: What this task does
**progress**: 0-100%
**status**: analyzing|processing|completed|failed
**action**: ACTION_NAME
**depends**: [prerequisite_task_ids]
**parallel_with**: [concurrent_task_ids]
**checkpoint**: true|false
**timeout**: 60s

### Step@N[Label] → Step@M
**desc**: Description
**progress**: percentage
**action**: ACTION_NAME

## Table[N]{col1,col2,col3}:
value1,value2,value3
value4,value5,value6`,
    },
    practicalExamples: [
      {
        title: 'Agente Fullstack Analyzer',
        description:
          'Agente especializado en análisis de calidad de código con métricas completas.',
        code: `# @Agent{id:"fullstack-code-analyzer",model:sonnet,color:purple}

You are the Fullstack Code Analyzer...

### Task@complexity[Calculate Complexity] → Task@smells
**desc**: Calculate cyclomatic and cognitive complexity metrics
**progress**: 40%
**action**: CALCULATE_COMPLEXITY
**parallel_with**: [smells, security]

### Task@smells[Detect Code Smells] → Task@performance
**desc**: Identify anti-patterns and code smells
**progress**: 50%
**action**: DETECT_SMELLS
**parallel_with**: [complexity, security]

## ComplexityThresholds[3]{metric,good,acceptable,moderate,high}:
cyclomatic,≤10,≤15,≤20,>20
cognitive,≤15,≤25,>25,>25
nesting_depth,≤4,≤6,>6,>6`,
      },
      {
        title: 'Technical Orchestrator',
        description:
          'Coordinador que maneja múltiples agentes en paralelo para análisis complejos.',
        code: `# @Agent{id:"technical-orchestrator",model:haiku,color:green}

You are the Technical Orchestrator...

### Step@1[Check Context] → [initialize|load]
**desc**: Query for existing session using CTX.SESSION.LAST
**progress**: 5%
**evaluate**: CTX.SESSION.LAST

### Step@2[Determine Instances] → monitor_execution
**desc**: Apply decision algorithm to determine instance manifest
**progress**: 30%
**action**: DETERMINE_INSTANCES

## RoutingTable[6]{pattern,agent,instances,action}:
code_analysis_small,fullstack-processor,1,ANALYZE
code_analysis_large,fullstack-processor,N=ceil(files/20),ANALYZE
security_audit,security-auditor,1-2,AUDIT_OWASP
architecture_review,architecture-validator,1,VALIDATE
database_design,database-architect,1,DESIGN
multi_domain,multiple_specialists,varies,varies`,
      },
      {
        title: 'SFD Agent Architect',
        description:
          'Arquitecto especializado en diseño y validación de agentes SFD.',
        code: `# @Agent{id:"sfd-agent-architect",model:sonnet,color:blue}

You are the SFD Agent Architect...

### Task@validate[Validate Syntax] → Task@design
**desc**: Parse and validate SFD syntax against language specification
**progress**: 40%
**action**: VALIDATE_SYNTAX

### Task@design[Design Patterns] → Task@optimize
**desc**: Evaluate architectural patterns and workflow efficiency
**progress**: 60%
**action**: ANALYZE_PATTERNS

## SFDPrinciples[7]{principle,guideline}:
modularity,"Break complex workflows into focused agents"
naming,"Use descriptive, consistent naming conventions"
parameterization,"Leverage parameters for configurable tasks"
error_handling,"Design flows with failure recovery"
performance,"Minimize dependencies, optimize execution order"
documentation,"Include clear descriptions and examples"
testing,"Design agents with testable, isolated tasks"`,
      },
    ],
    workflow: {
      title: 'Flujo de Trabajo SFD',
      steps: [
        'Instalar y configurar Claude Code en tu entorno',
        'Crear archivos .md con extensión .sfd para agentes',
        'Definir agentes usando la anotación @Agent{} con configuración completa',
        'Crear tareas con Task@ o pasos con Step@ según la complejidad',
        'Usar símbolos de flujo (→, ⚡, ?, ↻) para controlar la ejecución',
        'Implementar tablas TOON para datos estructurados uniformes',
        'Validar la sintaxis contra la especificación SFD v3.1',
        'Integrar con Claude Code para ejecución automática',
      ],
    },
    integration: {
      title: 'Integración con Claude Code',
      aspects: [
        'Compatibilidad nativa con Claude Code 1.0+',
        'Soporte para Claude Desktop y Cursor',
        'Optimización automática de tokens en respuestas',
        'Persistencia de contexto en archivos .sqlite',
        'Ejecución de comandos con validación de sintaxis',
        'Manejo automático de dependencias entre tareas',
        'Logging integrado y trazabilidad completa',
        'Recuperación automática de errores con retry logic',
      ],
    },
  };
}
