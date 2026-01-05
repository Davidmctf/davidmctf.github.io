import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sfd',
  imports: [CommonModule],
  templateUrl: './sfd.component.html',
  styleUrl: './sfd.component.css',
})
export class SfdComponent {
  readonly sfdDocs = {
    definition: {
      title: 'Definición Completa',
      content: `El Syntax Functional Declarative (SFD) es un lenguaje de programación declarativo especializado en la definición y ejecución de tareas funcionales automatizadas en entornos de terminal. Diseñado para simplificar la automatización de procesos técnicos, permite a desarrolladores y operadores describir flujos de trabajo complejos de manera intuitiva y reutilizable. A diferencia de lenguajes imperativos tradicionales, SFD se centra en "qué" hacer en lugar de "cómo" hacerlo, abstrayendo la lógica de ejecución mientras mantiene la capacidad de integración con sistemas externos.`,
      purpose:
        'Su propósito principal es facilitar la creación de agentes inteligentes que pueden ejecutar tareas repetitivas, gestionar recursos y coordinar procesos en aplicaciones full-stack, análisis de código y orquestación técnica.',
      advantages: [
        'Sintaxis simple y legible para no-programadores',
        'Reutilización de componentes a través de agentes modulares',
        'Ejecución declarativa que reduce errores lógicos',
        'Integración nativa con herramientas de desarrollo',
        'Soporte para parámetros dinámicos y configuración flexible',
      ],
    },
    syntax: {
      title: 'Sintaxis Detallada',
      elements: [
        {
          name: '@Agent',
          description: 'Declara un agente con nombre y configuración base.',
          syntax: '@Agent(name="NombreAgente", version="1.0") { ... }',
          required: true,
        },
        {
          name: 'flow',
          description: 'Define un flujo de tareas dentro del agente.',
          syntax: 'flow("NombreFlujo") { ... }',
          required: true,
        },
        {
          name: 'task',
          description:
            'Especifica una tarea individual con parámetros opcionales.',
          syntax: 'task("NombreTarea", param="valor", timeout=30)',
          required: false,
        },
        {
          name: 'import',
          description: 'Importa agentes o flujos desde otros archivos.',
          syntax: 'import "ruta/al/archivo.sfd"',
          required: false,
        },
      ],
      grammar: `Archivo ::= Agente*
Agente ::= '@Agent' '(' Atributos ')' '{' Flujo* '}'
Flujo ::= 'flow' '(' Cadena ')' '{' Tarea* '}'
Tarea ::= 'task' '(' Cadena [',' Parámetros]* ')' ';'
Parámetros ::= Identificador '=' (Cadena | Número | Booleano)`,
    },
    practicalExamples: [
      {
        title: 'Agente Básico de Backup',
        code: `@Agent(name="BackupAgent") {
  flow("DatabaseBackup") {
    task("ConnectDB", host="localhost", port=5432);
    task("DumpData", output="backup.sql");
    task("Compress", algorithm="gzip");
    task("Upload", destination="cloud://backup/bucket");
  }
}`,
        description:
          'Ejemplo de un agente que automatiza el backup de una base de datos.',
      },
      {
        title: 'Orquestador de Despliegue',
        code: `@Agent(name="DeployOrchestrator") {
  flow("FullDeploy") {
    task("CheckoutCode", branch="main");
    task("RunTests", suite="integration");
    task("BuildImage", tag="latest");
    task("DeployService", replicas=3, env="production");
    task("HealthCheck", timeout=300);
  }
}`,
        description:
          'Agente que coordina un despliegue completo de aplicación.',
      },
      {
        title: 'Analizador de Código',
        code: `@Agent(name="CodeAnalyzer") {
  flow("AnalyzeProject") {
    task("CloneRepo", url="https://github.com/user/repo");
    task("InstallDeps", manager="pnpm");
    task("LintCode", config="strict");
    task("RunTests", coverage=true);
    task("GenerateReport", format="json");
  }
}`,
        description:
          'Agente especializado en análisis estático y dinámico de código.',
      },
    ],
    workflow: {
      title: 'Flujo de Trabajo Completo',
      steps: [
        'Instala el runtime de SFD en tu sistema.',
        'Crea un archivo con extensión .sfd.',
        'Define uno o más agentes usando la sintaxis @Agent.',
        'Dentro de cada agente, declara flujos con la función flow().',
        'Especifica tareas secuenciales usando task() con parámetros.',
        'Ejecuta el archivo con: sfd run tuarchivo.sfd',
        'Monitorea la ejecución en tiempo real.',
        'Reutiliza agentes importándolos en nuevos proyectos.',
      ],
    },
    integration: {
      title: 'Integración y Uso en Proyectos',
      aspects: [
        'Compatible con sistemas de CI/CD para automatización de pipelines.',
        'Soporte para variables de entorno y configuración externa.',
        'Logging integrado para trazabilidad de ejecuciones.',
        'Manejo de errores con recuperación automática.',
        'Extensible mediante plugins para tareas personalizadas.',
      ],
    },
  };
}
