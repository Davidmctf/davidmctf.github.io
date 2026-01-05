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
    syntaxExamples: [
      `@Agent(name="AgenteEjemplo") {
  flow("UnFlujo") {
    task("Iniciar");
    task("Acción");
    task("Cerrar");
  }
}`,
      `@Agent(name="AgenteAvanzado") {
  flow("FlujoComplejo") {
    task("Conectar", param="server.example.com");
    task("Procesar", param="datos.json");
    task("Finalizar");
  }
}`,
    ],
    definition: {
      title: 'Definición del SFD',
      content:
        'El Syntax Functional Declarative (SFD) es un lenguaje diseñado para describir tareas funcionales de manera declarativa y ejecutable en terminal.',
      purpose:
        'Permite definir agentes, flujos y tareas reutilizables con sintaxis simple.',
      advantages: [
        'Sintaxis clara y legible',
        'Ejecución declarativa',
        'Reutilización de componentes',
        'Integración con sistemas existentes',
      ],
    },
    syntax: {
      title: 'Sintaxis del SFD',
      elements: [
        {
          name: '@Agent',
          description: 'Declara un agente con nombre único',
          syntax: '@Agent(name="Nombre") { ... }',
          required: true,
        },
        {
          name: 'flow',
          description: 'Define un flujo de trabajo dentro del agente',
          syntax: 'flow("NombreFlujo") { ... }',
          required: true,
        },
        {
          name: 'task',
          description: 'Especifica una tarea ejecutable',
          syntax: 'task("NombreTarea", param="valor")',
          required: true,
        },
      ],
      grammar: `@Agent(name="string") {
  flow("string") {
    task("string", param?="string")*
  }*
}`,
    },
    practicalExamples: [
      {
        title: 'Agente Básico',
        description: 'Ejemplo simple de un agente con un flujo básico.',
        code: `@Agent(name="AgenteBasico") {
  flow("FlujoPrincipal") {
    task("Iniciar");
    task("Procesar");
    task("Finalizar");
  }
}`,
      },
      {
        title: 'Agente con Parámetros',
        description: 'Agente que utiliza parámetros en las tareas.',
        code: `@Agent(name="AgenteAvanzado") {
  flow("FlujoComplejo") {
    task("Conectar", param="servidor.com");
    task("Procesar", param="datos.json");
    task("Cerrar");
  }
}`,
      },
    ],
    workflow: {
      title: 'Flujo de Trabajo',
      steps: [
        '1. Define tu agente y flujo en un archivo .sfd.',
        '2. Ejecuta en terminal: sfd run archivo.sfd',
        '3. Los flujos se procesan secuencialmente, permitiendo automatización declarativa.',
      ],
    },
    integration: {
      title: 'Integración',
      aspects: [
        'Compatible con sistemas de terminal existentes',
        'Soporte para parámetros dinámicos',
        'Logging integrado para seguimiento',
        'Manejo de errores automático',
      ],
    },
  };
}
