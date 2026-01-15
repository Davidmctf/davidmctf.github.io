import { Injectable, computed } from '@angular/core';
import { LanguageService } from './language.service';

interface Translations {
  'es-MX': { [key: string]: string };
  en: { [key: string]: string };
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly translations: Translations = {
    'es-MX': {
      // Navigation
      'nav.home': 'Inicio',
      'nav.aboutme': 'Acerca de mí',
      'nav.experience': 'Experiencia',
      'nav.example': 'Ejemplo de Solicitud',
      'nav.cv': 'CV',
      'nav.pdf': 'Formato PDF',
      'nav.html': 'Formato HTML',

      // Home page
      'home.greeting': 'Hola!',
      'home.intro':
        'Mi nombre es David Muñoz Cruz. Soy desarrollador Full stack',
      'home.aboutme.title': 'Acerca de mí',
      'home.aboutme.content': `Inicié mi carrera en 2021 como desarrollador freelance, aplicando mis conocimientos en proyectos pequeños y explorando tecnologías como
                        Angular, Laravel y Node.js. Con el tiempo, fui especializándome en desarrollo full stack y la administración de infraestructuras en Docker y servidores Linux.

                        Actualmente en mobiik como Full Stack Developer, trabajo con microservicios en .NET y Azure, desarrollo APIs REST con Azure Functions y App Services, integro soluciones de IA, y utilizo SQL Server con Entity Framework Core.

                        Anteriormente, trabajé en The Rocket Code, donde me especialicé en el desarrollo de aplicaciones web modernas, integraciones de herramientas de IA
                        (Claude AI, Gemini, LangGraph) y soluciones de e-commerce escalables con NestJS, NextJS, React, Angular v18/v19 y Shopify para el sector asegurador y fintech.

                        También trabajé en BLIFE como Backend Developer, donde desarrollé microservicios en NestJS con NATS y GraphQL, implementé soluciones de firma digital con Flask y Python,
                        y gestioné CI/CD con GitHub Actions y AWS.

                        En MIDOCONLINE, lideré la refactorización completa del backend, migrándolo de Laravel 8 a Laravel 11, optimizando su arquitectura y mejorando significativamente el rendimiento.

                        En SKYTEX MÉXICO, desarrollé soluciones empresariales como SkyFood, Skynet 2.0 y SkyInvoiceHub en Angular, y SkySecurityApp y SkyInspect en Laravel y Node.js,
                        además de liderar la dockerización del backend y la gestión de servidores Ubuntu.

                        Mi enfoque actual está en arquitecturas de microservicios, integración de IA y DevOps con .NET y Azure, mientras sigo perfeccionando mis habilidades en
                        tecnologías emergentes. En mi tiempo libre, me mantengo al día con las últimas tendencias tecnológicas y disfruto de mis pasatiempos, como jugar videojuegos y salir a pasear.`,
      'home.skills.title': 'Habilidades',
      'home.studies.title': 'Estudios',
      'home.experience.title': 'Experiencia',

      // Skills table
      'skills.technology': 'Tecnología',
      'skills.time': 'Tiempo',
      'skills.years': 'años',
      'skills.year': 'año',

      // Studies table
      'studies.degree':
        'Ingeniería en TI - Universidad Politécnica de Tlaxcala',
      'studies.period': '2018 - 2022',
      'studies.languages': 'Idiomas',
      'studies.spanish': 'Español',
      'studies.english': 'Inglés',
      'studies.native': 'Nativo',
      'studies.intermediate': 'Intermedio',

      // Footer
      'footer.follow': 'Síguenos:',
      'footer.download_cv': 'Descargar CV:',
      'footer.language': 'Idioma:',

      // Profile page
      'profile.title': 'PERFILES',
      'profile.information': 'Información:',
      'profile.more_info': 'Más información...',
      'profile.no_information': 'Sin Información',

      // Projects page
      'nav.projects': 'Proyectos',
      'projects.title': 'Mis Proyectos',
      'projects.subtitle':
        'Explora mis proyectos más destacados, desde desarrollo full stack hasta integración de inteligencia artificial',
      'projects.featured': 'Proyectos Destacados',
      'projects.search': 'Buscar',
      'projects.searchPlaceholder': 'Buscar por nombre o descripción...',
      'projects.stackCategory': 'Stack Tecnológico',
      'projects.allCategories': 'Todas las categorías',
      'projects.allStatuses': 'Todos los estados',
      'projects.status.label': 'Estado',
      'projects.status.active': 'Activo',
      'projects.status.in-progress': 'En Progreso',
      'projects.status.archived': 'Archivado',
      'projects.clearFilters': 'Limpiar Filtros',
      'projects.viewDetails': 'Ver Detalles',
      'projects.noResults':
        'No se encontraron proyectos que coincidan con tus criterios de búsqueda.',
      'projects.objectives': 'Objetivos',
      'projects.achievements': 'Logros',
      'projects.techStack': 'Stack Tecnológico',
      'projects.links': 'Enlaces',
      'projects.comingSoon': 'Próximamente',

      // Timeline - Experience
      'timeline.mobiik.title': 'Full Stack Developer - mobiik',
      'timeline.mobiik.description':
        'En mobiik, mi función principal es el desarrollo frontend con Angular, complementado con desarrollo full-stack utilizando arquitecturas de microservicios en .NET y Azure. Desarrollo APIs REST con Azure Functions y Azure App Services, integro agentes especializados con IA, e implemento soluciones con Azure SQL Server y Entity Framework Core. Desarrollo pruebas unitarias para componentes .NET y SQL Server, y trabajo colaborativamente con Azure DevOps y metodologías ágiles.',
      'timeline.mobiik.period': 'Septiembre 2025 - Actualidad',
      'timeline.mobiik.company':
        'Angular & .NET Full-Stack • Microservices & AI',

      'timeline.rocket.title': 'Full Stack Developer - The Rocket Code',
      'timeline.rocket.description':
        'En The Rocket Code, me especializo en el desarrollo de aplicaciones web modernas, integraciones de herramientas de IA y soluciones de e-commerce escalables. Trabajo en proyectos que requieren arquitecturas complejas y integración de múltiples servicios, implementando herramientas con Claude AI, Gemini y LangGraph, desarrollando APIs con NestJS y creando interfaces con NextJS, React y Angular v18/v19. También me especializo en desarrollo y administración de Shopify para aplicaciones del sector asegurador y fintech.',
      'timeline.rocket.period': 'Marzo 2025 - Septiembre 2025',
      'timeline.rocket.company': 'AI Software Development • Miami, USA',

      'timeline.blife.title': 'Backend Developer - BLIFE',
      'timeline.blife.description':
        'En BLIFE, fui Backend Developer especializado en el desarrollo de microservicios utilizando NestJS, GraphQL, y NATS para arquitectura distribuida. Desarrollé Blife-e-Signature con Flask y Python, implementé CI/CD con GitHub Actions y gestioné despliegues en AWS. Apliqué principios de Clean Code, SOLID y Clean Architecture para mantener aplicaciones escalables y eficientes.',
      'timeline.blife.period': 'Septiembre 2024 - Marzo 2025',
      'timeline.blife.company': 'Backend Development • Microservices',

      'timeline.midoc.title': 'Full Stack Developer - MIDOCONLINE',
      'timeline.midoc.description':
        'En MIDOCONLINE, lideré la refactorización completa del backend, migrándolo de Laravel 8 a Laravel 11, optimizando su arquitectura y mejorando significativamente el rendimiento. Trabajé con MySQL y PostgreSQL, desarrollé ERPs internos con Angular y interfaces públicas con React, utilizando Laravel Blade y gestionando la infraestructura con Docker en AWS.',
      'timeline.midoc.period': 'Abril 2024 - Septiembre 2024',
      'timeline.midoc.company': 'Telemedicine Platform • Laravel Migration',

      'timeline.skytex.title': 'Full Stack Developer - Skytex México',
      'timeline.skytex.description':
        'En SKYTEX, desarrollé aplicaciones web y móviles para optimización de procesos de producción textil, liderando proyectos de digitalización industrial. Desarrollé ERP interno (Skynet 2.0) y portal de facturación (SkyInvoiceHub), migré app de logística a Kotlin con Jetpack Compose y MVVM, e implementé control de accesos con WebSockets. También lideré la dockerización del backend y gestión de servidores Ubuntu con Apache y NGINX.',
      'timeline.skytex.period': 'Enero 2022 - Abril 2024',
      'timeline.skytex.company': 'Textile Industry • Digital Transformation',

      'timeline.veterinaria.title': 'Full Stack Developer - Veterinaria Contla',
      'timeline.veterinaria.description':
        'Experiencia como freelance en el desarrollo de un sistema integral de punto de venta e inventario, utilizando Laravel como framework principal y aprovechando servicios en la nube para garantizar la escalabilidad y disponibilidad del producto. Encargado de diseñar, desarrollar y desplegar soluciones personalizadas, adaptadas a las necesidades específicas del cliente, demostrando habilidades de trabajo autónomo, gestión de proyectos y cumplimiento de objetivos.',
      'timeline.veterinaria.period': 'Enero 2021 - Enero 2022',
      'timeline.veterinaria.company': 'Freelance • POS System Development',

      // SFD Page
      'sfd.page.title': 'Documentación SFD v3.1',
      'sfd.page.subtitle':
        'Syntax Functional Declarative - Lenguaje para agentes IA multi-plataforma',
      'sfd.introExample.title': 'Ejemplo Introductorio del SFD',
      'sfd.introExample.exampleTitle': 'Ejemplo Práctico',
      'sfd.introExample.description':
        'Un ejemplo práctico de cómo el SFD transforma el desarrollo con agentes',
      'sfd.introExample.benefits.title': 'Beneficios Inmediatos',
      'sfd.introExample.benefits.0':
        'Análisis paralelo: Las 3 tareas se ejecutan simultáneamente',
      'sfd.introExample.benefits.1':
        'Dependencias claras: Report solo se genera después de completar todas las tareas',
      'sfd.introExample.benefits.2':
        'Contexto persistente: Resultados se guardan en SQLite automáticamente',
      'sfd.introExample.benefits.3':
        'Eficiencia de tokens: 40% menos costo que prompts tradicionales',

      'sfd.introduction.title': 'Introducción y Justificación del SFD',
      'sfd.introduction.definition.title': '¿Qué es el SFD?',
      'sfd.introduction.definition.content.0':
        'El Syntax Functional Declarative (SFD) es un lenguaje de configuración markdown optimizado para el consumo de LLMs, específicamente diseñado para agentes Claude Code, comandos, skills y hooks. Es un estándar que combina la legibilidad del markdown con la eficiencia de token de formatos optimizados para IA.',
      'sfd.introduction.definition.content.1':
        '<b>Evolución del Sistema</b>: La historia de SFD comenzó con adaptaciones específicas para cada plataforma (p. ej., Copilot y Claude) para validar la portabilidad y el rendimiento de la sintaxis declarativa.',
      'sfd.introduction.definition.content.2':
        'Hoy, esas adaptaciones se entienden como etapas de transición hacia una estandarización más amplia. Aunque cada modelo puede requerir variaciones de sintaxis para optimizar APIs y runtimes, el núcleo SFD sigue siendo un contrato de alto nivel: definir agentes, sus roles, sus flujos y su estado de manera portable.',
      'sfd.introduction.definition.content.3':
        'En lugar de depender de una única configuración de plataforma, el desarrollo futuro apunta a una capa de abstracción más universal (LangGraph, MCP, etc.) que permita desplegar la misma definición SFD en diferentes entornos con transformaciones mínimas.',
      'sfd.introduction.definition.purpose':
        'Crear agentes, comandos, skills y workflows que sean eficientes en tokens, legibles para humanos, y optimizados para integración universal con cualquier entorno de desarrollo.',
      'sfd.introduction.justification.title': '¿Por qué el SFD es necesario?',
      'sfd.introduction.justification.problems.0':
        'Formatos tradicionales (JSON/XML) consumen demasiados tokens',
      'sfd.introduction.justification.problems.1':
        'Prompts manuales pierden contexto entre sesiones',
      'sfd.introduction.justification.problems.2':
        'Dificultad para coordinar múltiples agentes',
      'sfd.introduction.justification.problems.3':
        'Falta de estandarización en workflows de IA',
      'sfd.introduction.justification.problems.4':
        'Equipos mixtos no pueden trabajar eficientemente juntos',
      'sfd.introduction.justification.solutions.0':
        'Sintaxis declarativa reduce tokens en 35-45%',
      'sfd.introduction.justification.solutions.1':
        'Persistencia SQLite mantiene contexto perfecto',
      'sfd.introduction.justification.solutions.2':
        'Coordinación automática de agentes multi-paralelo',
      'sfd.introduction.justification.solutions.3':
        'Estándar universal para todos los entornos de desarrollo',
      'sfd.introduction.justification.solutions.4':
        'Equipos mixtos trabajan en perfecta sincronía',
      'sfd.introduction.advantages.0':
        'Reducción de 35% en costos de tokens vs formatos tradicionales',
      'sfd.introduction.advantages.1': '96% de precisión en parsing por LLMs',
      'sfd.introduction.advantages.2': 'Sintaxis clara y legible para humanos',
      'sfd.introduction.advantages.3':
        'Integración nativa con Claude Code, Copilot, Cursor, VS Code',
      'sfd.introduction.advantages.4':
        'Soporte completo para workflows complejos con dependencias y paralelismo',
      'sfd.introduction.advantages.5':
        'Framework agnóstico pero optimizado para entornos mixtos',
      'sfd.introduction.advantages.6':
        'Ejecución automática de comandos (bash, python, sqlite3) desde agentes',
      'sfd.introduction.advantages.7':
        'Persistencia de contexto en SQLite para continuidad entre sesiones',
      'sfd.introduction.advantages.8':
        'Capacidad multi-agente para equipos con diferentes niveles de acceso',

      'sfd.analysis.title': 'Análisis Multi-Plataforma SFD',
      'sfd.analysis.summary.title': 'Resumen Ejecutivo',
      'sfd.analysis.summary.keyFindings.0':
        '**40% reducción promedio de tokens** en todas las plataformas',
      'sfd.analysis.summary.keyFindings.1':
        '**96% continuidad de contexto** mantenida entre sesiones',
      'sfd.analysis.summary.keyFindings.2':
        '**Ecosistema multi-agente** implementado exitosamente',
      'sfd.analysis.summary.keyFindings.3':
        '**Portabilidad de sintaxis SFD** validada en diferentes arquitecturas',
      'sfd.analysis.summary.achievements.0':
        'Agentes GitHub Copilot personalizados con formato .agent.md',
      'sfd.analysis.summary.achievements.1':
        'Integración de sub-agentes Claude Code con herramientas MCP',
      'sfd.analysis.summary.achievements.2':
        'Modos agente basados en reglas Cursor',
      'sfd.analysis.summary.achievements.3':
        'Optimizaciones CLI terminal para Copilot y Claude Code',
      'sfd.analysis.summary.achievements.4':
        'Sistema de persistencia de contexto SQLite',
      'sfd.analysis.summary.achievements.5':
        'Optimización de referencias específicas de archivos (`file_path:line_number`)',
      'sfd.analysis.metrics.title': 'Métricas de Rendimiento',
      'sfd.analysis.metrics.technical.0':
        'Eficiencia de tokens: Reducción de costos API vs ingeniería de prompts tradicional',
      'sfd.analysis.metrics.technical.1':
        'Continuidad de contexto: Persistencia del estado de sesión entre interacciones',
      'sfd.analysis.metrics.technical.2':
        'Tiempo de respuesta: Análisis de latencia para diferentes tipos de operaciones',
      'sfd.analysis.metrics.technical.3':
        'Uso de memoria/CPU: Patrones de consumo de recursos',
      'sfd.analysis.metrics.implementation.0':
        'Compatibilidad multi-plataforma: Portabilidad de agentes entre plataformas',
      'sfd.analysis.metrics.implementation.1':
        'Tiempo de desarrollo: Horas requeridas para creación y adaptación de agentes',
      'sfd.analysis.metrics.implementation.2':
        'Sobrecarga de mantenimiento: Actualizaciones continuas y compatibilidad de versiones',
      'sfd.analysis.metrics.implementation.3':
        'Recuperación de errores: Tasas de éxito en manejo automático de fallos',
      'sfd.analysis.metrics.quality.0':
        'Validación de sintaxis: Precisión de adaptaciones específicas de plataforma',
      'sfd.analysis.metrics.quality.1':
        'Preservación de contexto: Integridad de datos entre sesiones',
      'sfd.analysis.metrics.quality.2':
        'Aceptación del usuario: Satisfacción y adopción de desarrolladores',
      'sfd.analysis.metrics.quality.3':
        'Capacidad de depuración: Visibilidad en toma de decisiones de agentes',
      'sfd.analysis.platforms.tokenReduction': 'Reducción de Tokens',
      'sfd.analysis.platforms.contextContinuity': 'Continuidad de Contexto',

      'sfd.dictionary.title': 'Diccionario SFD',
      'sfd.dictionary.elements.0.name': '@Agent',
      'sfd.dictionary.elements.0.category': 'Declaración Principal',
      'sfd.dictionary.elements.0.description':
        'Anotación de agente con configuración completa incluyendo ID único, modelo, color y metadatos',
      'sfd.dictionary.elements.1.name': 'Task@',
      'sfd.dictionary.elements.1.category': 'Definición de Tareas',
      'sfd.dictionary.elements.1.description':
        'Definición de tarea con dependencias, estado y configuración completa',
      'sfd.dictionary.elements.2.name': 'Step@',
      'sfd.dictionary.elements.2.category': 'Secuencias Lineales',
      'sfd.dictionary.elements.2.description':
        'Paso numerado en secuencias lineales con checkpoints',
      'sfd.dictionary.elements.3.name': 'TOON Tables',
      'sfd.dictionary.elements.3.category': 'Datos Estructurados',
      'sfd.dictionary.elements.3.description':
        'Tablas optimizadas para datos uniformes con sintaxis compacta',
      'sfd.dictionary.required': 'Requerido:',
      'sfd.dictionary.viewFullImplementation': 'Ver implementación completa',
      'sfd.dictionary.symbols': 'Símbolos:',
      'sfd.dictionary.symbols.title': 'Símbolos y Operadores',
      'sfd.dictionary.patterns.title': 'Patrones de Diseño',
      'sfd.dictionary.patterns.viewExample': 'Ver ejemplo',
      'sfd.dictionary.patterns.0.name': 'Coordinador',
      'sfd.dictionary.patterns.1.name': 'Pipeline',
      'sfd.dictionary.patterns.2.name': 'Especialista',
      'sfd.dictionary.symbols.0.meaning': 'Declaración de agente con metadatos',
      'sfd.dictionary.symbols.0.usage': 'Siempre al inicio',
      'sfd.dictionary.symbols.1.meaning': 'Tarea con ID y etiqueta humana',
      'sfd.dictionary.symbols.1.usage': 'Workflows complejos',
      'sfd.dictionary.symbols.2.meaning': 'Paso numerado en secuencia',
      'sfd.dictionary.symbols.2.usage': 'Procesos lineales',
      'sfd.dictionary.symbols.3.meaning': 'Transición o flujo hacia siguiente',
      'sfd.dictionary.symbols.3.usage': 'Conectar elementos',
      'sfd.dictionary.symbols.4.meaning': 'Ejecución paralela',
      'sfd.dictionary.symbols.4.usage': 'Tareas concurrentes',
      'sfd.dictionary.symbols.5.meaning': 'Decisión condicional',
      'sfd.dictionary.symbols.5.usage': 'Lógica de bifurcación',
      'sfd.dictionary.symbols.6.meaning': 'Bucle o repetición',
      'sfd.dictionary.symbols.6.usage': 'Iteraciones',
      'sfd.dictionary.symbols.7.meaning': 'Ejecución asíncrona',
      'sfd.dictionary.symbols.7.usage': 'Procesos en background',
      'sfd.dictionary.symbols.8.meaning': 'Persistencia a base de datos',
      'sfd.dictionary.symbols.8.usage': 'Guardar contexto',
      'sfd.dictionary.symbols.9.meaning': 'Propiedad con valor',
      'sfd.dictionary.symbols.9.usage': 'Configuración',
      'sfd.dictionary.symbols.10.meaning': 'Lista de valores',
      'sfd.dictionary.symbols.10.usage': 'Múltiples elementos',
      'sfd.dictionary.symbols.11.meaning': 'Objeto estructurado',
      'sfd.dictionary.symbols.11.usage': 'Datos complejos',
      'sfd.dictionary.symbols.12.meaning': 'Tabla TOON con N filas',
      'sfd.dictionary.symbols.12.usage': 'Datos tabulares',
      'sfd.dictionary.symbols.13.meaning': 'Referencia específica de archivo',
      'sfd.dictionary.symbols.13.usage': 'Navegación precisa',
      'sfd.dictionary.patterns.0.description':
        'Patrón para agentes que coordinan múltiples sub-agentes',
      'sfd.dictionary.patterns.1.description':
        'Patrón secuencial para procesamiento de datos',
      'sfd.dictionary.patterns.2.description':
        'Patrón para agentes especializados en dominio específico',

      'sfd.technicalDocs.title': 'Documentación Técnica SFD',
      'sfd.technicalDocs.specification.title': 'Especificación Técnica v3.1',
      'sfd.technicalDocs.architecture.components.0.description':
        'Analizador sintáctico que convierte SFD a estructuras ejecutables',
      'sfd.technicalDocs.architecture.components.1.description':
        'Sistema que maneja dependencias y ejecución paralela',
      'sfd.technicalDocs.architecture.components.2.description':
        'Capa de abstracción para SQLite con esquema optimizado',
      'sfd.technicalDocs.architecture.components.3.description':
        'Motor seguro para ejecución de comandos del sistema',
      'sfd.technicalDocs.architecture.dataFlow.0': '1. Analizar SFD → AST',
      'sfd.technicalDocs.architecture.dataFlow.1':
        '2. Validar sintaxis → Reporte de errores',
      'sfd.technicalDocs.architecture.dataFlow.2':
        '3. Construir grafo de dependencias → Plan de ejecución',
      'sfd.technicalDocs.architecture.dataFlow.3':
        '4. Ejecutar en paralelo → Agregación de resultados',
      'sfd.technicalDocs.architecture.dataFlow.4':
        '5. Persistir contexto → Base de datos SQLite',
      'sfd.technicalDocs.architecture.dataFlow.5':
        '6. Generar respuesta → Formato legible para humanos',
      'sfd.technicalDocs.specification.label.version': 'Versión',
      'sfd.technicalDocs.specification.label.releaseDate': 'Lanzamiento',
      'sfd.technicalDocs.specification.label.compatibility': 'Compatibilidad',
      'sfd.technicalDocs.specification.label.features':
        'Características Principales',
      'sfd.technicalDocs.specification.version': '3.1',
      'sfd.technicalDocs.specification.releaseDate': 'Enero 2026',
      'sfd.technicalDocs.specification.features.0':
        'Sintaxis declarativa markdown',
      'sfd.technicalDocs.specification.features.1':
        'Coordinación multi-agente automática',
      'sfd.technicalDocs.specification.features.2':
        'Persistencia SQLite nativa',
      'sfd.technicalDocs.specification.features.3':
        'Ejecución de comandos bash/python/sqlite3',
      'sfd.technicalDocs.specification.features.4':
        'Optimización de tokens del 35-45%',
      'sfd.technicalDocs.specification.features.5':
        'Continuidad de contexto del 95-98%',
      'sfd.technicalDocs.specification.features.6':
        'Soporte para equipos mixtos',
      'sfd.technicalDocs.specification.features.7':
        'Validación de sintaxis automática',
      'sfd.technicalDocs.architecture.title': 'Arquitectura del Sistema',
      'sfd.technicalDocs.architecture.label.technologies': 'Tecnologías:',
      'sfd.technicalDocs.architecture.label.dataFlow': 'Data Flow',
      'sfd.technicalDocs.architecture.components.0.name': 'Parser SFD',
      'sfd.technicalDocs.architecture.components.1.name':
        'Coordinador de Agentes',
      'sfd.technicalDocs.architecture.components.2.name':
        'Motor de Persistencia',
      'sfd.technicalDocs.architecture.components.3.name':
        'Ejecutor de Comandos',
      'sfd.technicalDocs.api.endpoints.0.description':
        'Convierte texto SFD a estructura abstracta',
      'sfd.technicalDocs.api.endpoints.1.description':
        'Ejecuta agente con contexto proporcionado',
      'sfd.technicalDocs.api.endpoints.2.description':
        'Guarda contexto en base de datos SQLite',

      'sfd.agents.title': 'Ejemplos de Agentes SFD',
      'sfd.agents.fullstackAnalyzer.title': 'Fullstack Code Analyzer',
      'sfd.agents.fullstackAnalyzer.description':
        'Agente especializado en análisis de calidad de código con métricas completas',
      'sfd.agents.technicalOrchestrator.title': 'Technical Orchestrator',
      'sfd.agents.technicalOrchestrator.description':
        'Coordinador que maneja múltiples agentes en paralelo para análisis complejos',
      'sfd.agents.sfdAgentArchitect.title': 'SFD Agent Architect',
      'sfd.agents.sfdAgentArchitect.description':
        'Arquitecto especializado en diseño y validación de agentes SFD',

      'sfd.title': 'Universal Agent Rules',
      'sfd.intro':
        'Las reglas universales definen el marco operativo obligatorio para todos los agentes en el sistema SFD, asegurando consistencia, trazabilidad y eficiencia en interacciones multi-plataforma.',
      'sfd.execution.title': '1. Execution Workflow (Mandatory)',
      'sfd.execution.desc':
        'Este flujo de ejecución establece los pasos obligatorios que todo agente debe seguir al procesar una solicitud. Incluye la carga de contextos, validación, planificación, ejecución paralela, actualización de base de datos y verificación final.',
      'sfd.execution.just':
        'Justificación: Garantiza que todas las operaciones sean rastreables y consistentes, reduciendo errores humanos y mejorando la calidad de las respuestas. La obligatoriedad asegura que ningún agente omita pasos críticos como la verificación de integridad.',
      'sfd.binding.title': '2. Binding Rules',
      'sfd.binding.desc':
        'Reglas que vinculan las acciones de los agentes a estándares fijos, como leer CLAUDE.md antes de operar, mantener el estado en SQLite y usar operaciones batch para ediciones múltiples.',
      'sfd.binding.just':
        'Justificación: Estas reglas previenen inconsistencias entre agentes y plataformas. Por ejemplo, R7 (DbFirst) asegura que el contexto de conversación nunca sobrepase el estado persistente, manteniendo la integridad del sistema.',
      'sfd.database.title': '3. Database Schema',
      'sfd.database.desc':
        'Esquema de base de datos SQLite con tablas para contexto de sesiones y notas, optimizado para trazabilidad y persistencia de agentes.',
      'sfd.database.just':
        'Justificación: Proporciona una estructura estandarizada para almacenar y recuperar información entre sesiones, facilitando la auditoría y la recuperación de estados. La inclusión de timestamps y claves primarias asegura integridad de datos.',
      'sfd.instruction.title': '4. Instruction File Structure',
      'sfd.instruction.desc':
        'Define la estructura de archivos de instrucciones como copilot-instructions.md, separando reglas universales (líneas 1-72) de configuraciones específicas de proyecto.',
      'sfd.instruction.just':
        "Justificación: Mantiene la claridad y evita conflictos entre reglas globales y locales. El marcador 'NOTE (IMPORTANT)' indica el límite, permitiendo evolución independiente de cada sección.",
      'sfd.task.title': '5. Task Protocol',
      'sfd.task.desc':
        'Protocolo de 7 pasos para ejecutar tareas: cargar reglas universales, leer CLAUDE.md, consultar SQLite, parsear solicitud, validar, ejecutar en batch y actualizar base de datos.',
      'sfd.task.just':
        'Justificación: Estandariza el ciclo de vida de cada tarea, asegurando que todas las decisiones se basen en datos actualizados y se registren para auditoría. Esto mejora la predictibilidad y reduce riesgos de operaciones incompletas.',
      'sfd.precedence.title': '6. Precedence',
      'sfd.precedence.desc':
        'Jerarquía de fuentes: universal-rules.md tiene prioridad máxima, seguido de CLAUDE.md, copilot-instructions.md, context.sqlite y finalmente la solicitud del usuario.',
      'sfd.precedence.just':
        'Justificación: Establece una cadena de autoridad clara para resolver conflictos. Las reglas universales son inmutables para garantizar consistencia global, mientras que fuentes locales permiten adaptaciones específicas.',
      'sfd.forced.title': '7. Forced and Obligatory',
      'sfd.forced.desc':
        'Todas las reglas anteriores son obligatorias sin excepciones, asegurando cumplimiento estricto en todos los contextos.',
      'sfd.forced.just':
        'Justificación: La obligatoriedad previene desviaciones que podrían comprometer la integridad del sistema SFD. Cualquier excepción requiere aprobación explícita y documentación detallada.',
      'sfd.full.title': 'Reglas Universales Completas',
      'sfd.full.desc':
        'A continuación se muestra el contenido completo del archivo universal-agent-rules.md.',
      'sfd.download': 'Descargar Universal Agent Rules (md)',
      'sfd.copy': 'Copiar al Portapapeles',
      'sfd.analysis.platforms.title.0': 'GitHub Copilot Agents',
      'sfd.analysis.platforms.title.1': 'Claude Code Agents',
      'sfd.analysis.platforms.title.2': 'Cursor Agent Modes',
      'sfd.analysis.platforms.title.3': 'Workflows Basados en Terminal',
      'sfd.analysis.platforms.title.4': 'OpenCode Platform',
      'sfd.analysis.platforms.format.0':
        'Archivo .agent.md con frontmatter YAML',
      'sfd.analysis.platforms.format.1':
        'Sub-agentes con invocación automática',
      'sfd.analysis.platforms.format.2': 'Personalidades AI especializadas',
      'sfd.analysis.platforms.format.3':
        'Interfaz directa de terminal GitHub Copilot',
      'sfd.analysis.platforms.format.4':
        'Integración nativa con herramientas CLI y Desktop',
      'sfd.analysis.platforms.integration.0': 'Ecosistema de extensión VS Code',
      'sfd.analysis.platforms.integration.1':
        'Agentes definidos por usuario con prompts del sistema',
      'sfd.analysis.platforms.integration.2':
        'Patrones de comportamiento personalizables',
      'sfd.analysis.platforms.integration.3':
        'Sesiones interactivas de terminal Claude Code',
      'sfd.analysis.platforms.integration.4':
        'SDK completo para desarrollo con IA',
      'sfd.analysis.platforms.tools.0':
        'APIs nativas VS Code, integración GitHub, comandos terminal',
      'sfd.analysis.platforms.tools.1':
        'Protocolo Model Context Protocol para descubrimiento de herramientas',
      'sfd.analysis.platforms.tools.2':
        'Integración de múltiples proveedores AI',
      'sfd.analysis.platforms.tools.3': 'Ejecución asíncrona de tareas',
      'sfd.analysis.platforms.tools.4':
        'Terminal commands, desktop app, IDE extensions',
      'sfd.analysis.platforms.architecture.0':
        'Orquestación de workflows basada en agentes',
      'sfd.analysis.platforms.architecture.1': 'Enfoque first-command-line',
      'sfd.analysis.platforms.architecture.2':
        'Personalización profunda VS Code',
      'sfd.analysis.platforms.architecture.3':
        'Preservación del estado de sesión',
      'sfd.analysis.platforms.architecture.4':
        'Arquitectura modular con agentes especializados',
      'sfd.analysis.platforms.label.format': 'Formato:',
      'sfd.analysis.platforms.label.integration': 'Integración:',
      'sfd.analysis.platforms.label.tools': 'Herramientas:',
      'sfd.analysis.platforms.label.architecture': 'Arquitectura:',
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.aboutme': 'About me',
      'nav.experience': 'Experience',
      'nav.example': 'Example Request',
      'nav.cv': 'CV',
      'nav.pdf': 'PDF Format',
      'nav.html': 'HTML Format',

      // Home page
      'home.greeting': 'Hello!',
      'home.intro': 'My name is David Muñoz Cruz. I am a Full stack developer',
      'home.aboutme.title': 'About me',
      'home.aboutme.content': `I started my career in 2021 as a freelance developer, applying my knowledge to small projects and exploring technologies such as
                        Angular, Laravel and Node.js. Over time, I specialized in full stack development and infrastructure administration in Docker and Linux servers.

                        Currently at mobiik as Full Stack Developer, I work with microservices in .NET and Azure, develop REST APIs with Azure Functions and App Services, integrate AI solutions, and use SQL Server with Entity Framework Core.

                        Previously, I worked at The Rocket Code, where I specialized in developing modern web applications, AI tool integrations
                        (Claude AI, Gemini, LangGraph) and scalable e-commerce solutions with NestJS, NextJS, React, Angular v18/v19 and Shopify for the insurance and fintech sector.

                        I also worked at BLIFE as a Backend Developer, where I developed microservices in NestJS with NATS and GraphQL, implemented digital signature solutions with Flask and Python,
                        and managed CI/CD with GitHub Actions and AWS.

                        At MIDOCONLINE, I led the complete backend refactoring, migrating it from Laravel 8 to Laravel 11, optimizing its architecture and significantly improving performance.

                        At SKYTEX MÉXICO, I developed business solutions such as SkyFood, Skynet 2.0 and SkyInvoiceHub in Angular, and SkySecurityApp and SkyInspect in Laravel and Node.js,
                        in addition to leading backend dockerization and Ubuntu server management.

                        My current focus is on microservice architectures, AI integration and DevOps with .NET and Azure, while I continue to hone my skills in
                        emerging technologies. In my free time, I keep up with the latest technology trends and enjoy my hobbies, such as playing video games and going for walks.`,
      'home.skills.title': 'Skills',
      'home.studies.title': 'Studies',
      'home.experience.title': 'Experience',

      // Skills table
      'skills.technology': 'Technology',
      'skills.time': 'Time',
      'skills.years': 'years',
      'skills.year': 'year',

      // Studies table
      'studies.degree': 'IT Engineering - Universidad Politécnica de Tlaxcala',
      'studies.period': '2018 - 2022',
      'studies.languages': 'Languages',
      'studies.spanish': 'Spanish',
      'studies.english': 'English',
      'studies.native': 'Native',
      'studies.intermediate': 'Intermediate',

      // Footer
      'footer.follow': 'Follow us:',
      'footer.download_cv': 'Download CV:',
      'footer.language': 'Language:',

      // Profile page
      'profile.title': 'PROFILES',
      'profile.information': 'Information:',
      'profile.more_info': 'More info...',
      'profile.no_information': 'No Information',

      // SFD Page
      'sfd.page.title': 'SFD Documentation v3.1',
      'sfd.page.subtitle':
        'Syntax Functional Declarative - Language for multi-platform AI agents',
      'sfd.introExample.title': 'SFD Getting Started Example',
      'sfd.introExample.exampleTitle': 'Basic Example',
      'sfd.introExample.description':
        'A practical example of how SFD transforms development with agents',
      'sfd.introExample.benefits.title': 'Immediate Benefits',
      'sfd.introExample.benefits.0':
        'Parallel analysis: The 3 tasks are executed simultaneously',
      'sfd.introExample.benefits.1':
        'Clear dependencies: Report is only generated after completing all tasks',
      'sfd.introExample.benefits.2':
        'Persistent context: Results are automatically saved to SQLite',
      'sfd.introExample.benefits.3':
        'Token efficiency: 40% less cost than traditional prompts',

      'sfd.introduction.title': 'Introduction and Justification of SFD',
      'sfd.introduction.definition.title': 'What is SFD?',
      'sfd.introduction.definition.content.0':
        'The Syntax Functional Declarative (SFD) is a markdown configuration language optimized for LLM consumption, specifically designed for Claude Code agents, commands, skills, and hooks. It is a standard that combines markdown readability with token efficiency of AI-optimized formats.',
      'sfd.introduction.definition.content.1':
        '<b>System Evolution</b>: The history of SFD began with specific adaptations for each platform (e.g., Copilot and Claude) to validate portability and syntax performance.',
      'sfd.introduction.definition.content.2':
        'Today, these adaptations are understood as transition stages towards broader standardization. Although each model may require syntax variations to optimize APIs and runtimes, the SFD core remains a high-level contract: defining agents, their roles, flows, and state in a portable manner.',
      'sfd.introduction.definition.content.3':
        'Instead of depending on a single platform configuration, future development points to a more universal abstraction layer (LangGraph, MCP, etc.) that allows deploying the same SFD definition in different environments with minimal transformations.',
      'sfd.introduction.definition.purpose':
        'Create agents, commands, skills and workflows that are efficient in tokens, readable by humans, and optimized for universal integration with any development environment.',
      'sfd.introduction.justification.title': 'Why is SFD necessary?',
      'sfd.introduction.justification.problems.0':
        'Traditional formats (JSON/XML) consume too many tokens',
      'sfd.introduction.justification.problems.1':
        'Manual prompts lose context between sessions',
      'sfd.introduction.justification.problems.2':
        'Difficulty coordinating multiple agents',
      'sfd.introduction.justification.problems.3':
        'Lack of standardization in AI workflows',
      'sfd.introduction.justification.problems.4':
        'Mixed teams cannot work efficiently together',
      'sfd.introduction.justification.solutions.0':
        'Declarative syntax reduces tokens by 35-45%',
      'sfd.introduction.justification.solutions.1':
        'SQLite persistence maintains perfect context',
      'sfd.introduction.justification.solutions.2':
        'Automatic multi-parallel agent coordination',
      'sfd.introduction.justification.solutions.3':
        'Universal standard for all development environments',
      'sfd.introduction.justification.solutions.4':
        'Mixed teams work in perfect synchronization',
      'sfd.introduction.advantages.0':
        '35% reduction in token costs vs traditional formats',
      'sfd.introduction.advantages.1': '96% parsing accuracy by LLMs',
      'sfd.introduction.advantages.2': 'Clear and human-readable syntax',
      'sfd.introduction.advantages.3':
        'Native integration with Claude Code, Copilot, Cursor, VS Code',
      'sfd.introduction.advantages.4':
        'Full support for complex workflows with dependencies and parallelism',
      'sfd.introduction.advantages.5':
        'Framework agnostic but optimized for mixed environments',
      'sfd.introduction.advantages.6':
        'Automatic execution of commands (bash, python, sqlite3) from agents',
      'sfd.introduction.advantages.7':
        'SQLite context persistence for session continuity',
      'sfd.introduction.advantages.8':
        'Multi-agent capacity for teams with different access levels',

      'sfd.analysis.title': 'SFD Multi-Platform Analysis',
      'sfd.analysis.summary.title': 'Executive Summary',
      'sfd.analysis.summary.keyFindings.0':
        '**40% average token reduction** across all platforms',
      'sfd.analysis.summary.keyFindings.1':
        '**96% context continuity** maintained between sessions',
      'sfd.analysis.summary.keyFindings.2':
        '**Multi-agent ecosystem** successfully implemented',
      'sfd.analysis.summary.keyFindings.3':
        '**SFD syntax portability** validated across different architectures',
      'sfd.analysis.summary.achievements.0':
        'Custom GitHub Copilot agents with .agent.md format',
      'sfd.analysis.summary.achievements.1':
        'Claude Code sub-agent integration with MCP tools',
      'sfd.analysis.summary.achievements.2':
        'Cursor agent modes based on rules',
      'sfd.analysis.summary.achievements.3':
        'CLI terminal optimizations for Copilot and Claude Code',
      'sfd.analysis.summary.achievements.4':
        'SQLite context persistence system',
      'sfd.analysis.summary.achievements.5':
        'Optimization of specific file references (`file_path:line_number`)',
      'sfd.analysis.metrics.title': 'Performance Metrics',
      'sfd.analysis.metrics.technical.0':
        'Token Efficiency: API cost reduction vs traditional prompt engineering',
      'sfd.analysis.metrics.technical.1':
        'Context Continuity: Session state persistence between interactions',
      'sfd.analysis.metrics.technical.2':
        'Response Time: Latency analysis for different operation types',
      'sfd.analysis.metrics.technical.3':
        'Memory/CPU Usage: Resource consumption patterns',
      'sfd.analysis.metrics.implementation.0':
        'Multi-platform Compatibility: Agent portability between platforms',
      'sfd.analysis.metrics.implementation.1':
        'Development Time: Hours required for agent creation and adaptation',
      'sfd.analysis.metrics.implementation.2':
        'Maintenance Overhead: Continuous updates and version compatibility',
      'sfd.analysis.metrics.implementation.3':
        'Error Recovery: Success rates in automatic failure handling',
      'sfd.analysis.metrics.quality.0':
        'Syntax Validation: Accuracy of platform-specific adaptations',
      'sfd.analysis.metrics.quality.1':
        'Context Preservation: Data integrity between sessions',
      'sfd.analysis.metrics.quality.2':
        'User Acceptance: Developer satisfaction and adoption',
      'sfd.analysis.metrics.quality.3':
        'Debugging Capability: Visibility into agent decision-making',
      'sfd.analysis.platforms.title': 'Platform Comparison',
      'sfd.analysis.platforms.title.0': 'GitHub Copilot Agents',
      'sfd.analysis.platforms.title.1': 'Claude Code Agents',
      'sfd.analysis.platforms.title.2': 'Cursor Agent Modes',
      'sfd.analysis.platforms.title.3': 'Terminal-Based Workflows',
      'sfd.analysis.platforms.title.4': 'OpenCode Platform',
      'sfd.analysis.platforms.format.0': '.agent.md file with YAML frontmatter',
      'sfd.analysis.platforms.format.1': 'Sub-agents with automatic invocation',
      'sfd.analysis.platforms.format.2': 'Specialized AI personalities',
      'sfd.analysis.platforms.format.3':
        'Direct GitHub Copilot terminal interface',
      'sfd.analysis.platforms.format.4':
        'Native CLI and Desktop tool integration',
      'sfd.analysis.platforms.integration.0': 'VS Code extension ecosystem',
      'sfd.analysis.platforms.integration.1':
        'User-defined agents with system prompts',
      'sfd.analysis.platforms.integration.2': 'Customizable behavior patterns',
      'sfd.analysis.platforms.integration.3':
        'Interactive Claude Code terminal sessions',
      'sfd.analysis.platforms.integration.4': 'Complete SDK for AI development',
      'sfd.analysis.platforms.tools.0':
        'Native VS Code APIs, GitHub integration, terminal commands',
      'sfd.analysis.platforms.tools.1':
        'Model Context Protocol for tool discovery',
      'sfd.analysis.platforms.tools.2': 'Multi-provider AI integration',
      'sfd.analysis.platforms.tools.3': 'Asynchronous task execution',
      'sfd.analysis.platforms.tools.4':
        'Terminal commands, desktop app, IDE extensions',
      'sfd.analysis.platforms.architecture.0':
        'Agent-based workflow orchestration',
      'sfd.analysis.platforms.architecture.1': 'First-command-line approach',
      'sfd.analysis.platforms.architecture.2': 'Deep VS Code customization',
      'sfd.analysis.platforms.architecture.3': 'Session state preservation',
      'sfd.analysis.platforms.architecture.4':
        'Modular architecture with specialized agents',
      'sfd.analysis.platforms.label.format': 'Format:',
      'sfd.analysis.platforms.label.integration': 'Integration:',
      'sfd.analysis.platforms.label.tools': 'Tools:',
      'sfd.analysis.platforms.label.architecture': 'Architecture:',
      'sfd.analysis.platforms.tokenReduction': 'Token Reduction',
      'sfd.analysis.platforms.contextContinuity': 'Context Continuity',

      'sfd.dictionary.title': 'SFD Dictionary',
      'sfd.dictionary.elements.0.name': '@Agent',
      'sfd.dictionary.elements.0.category': 'Main Declaration',
      'sfd.dictionary.elements.0.description':
        'Agent annotation with complete configuration including unique ID, model, color and metadata',
      'sfd.dictionary.elements.1.name': 'Task@',
      'sfd.dictionary.elements.1.category': 'Task Definition',
      'sfd.dictionary.elements.1.description':
        'Task definition with dependencies, status and complete configuration',
      'sfd.dictionary.elements.2.name': 'Step@',
      'sfd.dictionary.elements.2.category': 'Linear Sequences',
      'sfd.dictionary.elements.2.description':
        'Numbered step in linear sequences with checkpoints',
      'sfd.dictionary.elements.3.name': 'TOON Tables',
      'sfd.dictionary.elements.3.category': 'Structured Data',
      'sfd.dictionary.elements.3.description':
        'Optimized tables for uniform data with compact syntax',
      'sfd.dictionary.required': 'Required:',
      'sfd.dictionary.viewFullImplementation': 'View full implementation',
      'sfd.dictionary.symbols': 'Symbols:',
      'sfd.dictionary.symbols.title': 'Symbols and Operators',
      'sfd.dictionary.patterns.title': 'Design Patterns',
      'sfd.dictionary.patterns.viewExample': 'View example',
      'sfd.dictionary.patterns.0.name': 'Coordinator',
      'sfd.dictionary.patterns.1.name': 'Pipeline',
      'sfd.dictionary.patterns.2.name': 'Specialist',
      'sfd.dictionary.symbols.0.meaning': 'Agent declaration with metadata',
      'sfd.dictionary.symbols.0.usage': 'Always at the beginning',
      'sfd.dictionary.symbols.1.meaning': 'Task with ID and human label',
      'sfd.dictionary.symbols.1.usage': 'Complex workflows',
      'sfd.dictionary.symbols.2.meaning': 'Numbered step in sequence',
      'sfd.dictionary.symbols.2.usage': 'Linear processes',
      'sfd.dictionary.symbols.3.meaning': 'Transition or flow to next',
      'sfd.dictionary.symbols.3.usage': 'Connect elements',
      'sfd.dictionary.symbols.4.meaning': 'Parallel execution',
      'sfd.dictionary.symbols.4.usage': 'Concurrent tasks',
      'sfd.dictionary.symbols.5.meaning': 'Conditional decision',
      'sfd.dictionary.symbols.5.usage': 'Branching logic',
      'sfd.dictionary.symbols.6.meaning': 'Loop or repetition',
      'sfd.dictionary.symbols.6.usage': 'Iterations',
      'sfd.dictionary.symbols.7.meaning': 'Asynchronous execution',
      'sfd.dictionary.symbols.7.usage': 'Background processes',
      'sfd.dictionary.symbols.8.meaning': 'Database persistence',
      'sfd.dictionary.symbols.8.usage': 'Save context',
      'sfd.dictionary.symbols.9.meaning': 'Property with value',
      'sfd.dictionary.symbols.9.usage': 'Configuration',
      'sfd.dictionary.symbols.10.meaning': 'List of values',
      'sfd.dictionary.symbols.10.usage': 'Multiple elements',
      'sfd.dictionary.symbols.11.meaning': 'Structured object',
      'sfd.dictionary.symbols.11.usage': 'Complex data',
      'sfd.dictionary.symbols.12.meaning': 'TOON table with N rows',
      'sfd.dictionary.symbols.12.usage': 'Tabular data',
      'sfd.dictionary.symbols.13.meaning': 'Specific file reference',
      'sfd.dictionary.symbols.13.usage': 'Precise navigation',
      'sfd.dictionary.patterns.0.description':
        'Pattern for agents that coordinate multiple sub-agents',
      'sfd.dictionary.patterns.1.description':
        'Sequential pattern for data processing',
      'sfd.dictionary.patterns.2.description':
        'Pattern for agents specialized in specific domain',

      'sfd.technicalDocs.title': 'SFD Technical Documentation',
      'sfd.technicalDocs.specification.title': 'Technical Specification v3.1',
      'sfd.technicalDocs.architecture.components.0.description':
        'Syntactic analyzer that converts SFD to executable structures',
      'sfd.technicalDocs.architecture.components.1.description':
        'System that handles dependencies and parallel execution',
      'sfd.technicalDocs.architecture.components.2.description':
        'Abstraction layer for SQLite with optimized schema',
      'sfd.technicalDocs.architecture.components.3.description':
        'Secure engine for executing system commands',
      'sfd.technicalDocs.specification.label.version': 'Version',
      'sfd.technicalDocs.specification.label.releaseDate': 'Release',
      'sfd.technicalDocs.specification.label.compatibility': 'Compatibility',
      'sfd.technicalDocs.specification.label.features': 'Key Features',
      'sfd.technicalDocs.specification.version': '3.1',
      'sfd.technicalDocs.specification.releaseDate': 'January 2026',
      'sfd.technicalDocs.specification.features.0':
        'Declarative markdown syntax',
      'sfd.technicalDocs.specification.features.1':
        'Automatic multi-agent coordination',
      'sfd.technicalDocs.specification.features.2': 'Native SQLite persistence',
      'sfd.technicalDocs.specification.features.3':
        'Bash/python/sqlite3 command execution',
      'sfd.technicalDocs.specification.features.4': '35-45% token optimization',
      'sfd.technicalDocs.specification.features.5': '95-98% context continuity',
      'sfd.technicalDocs.specification.features.6': 'Mixed team support',
      'sfd.technicalDocs.specification.features.7':
        'Automatic syntax validation',
      'sfd.technicalDocs.architecture.title': 'System Architecture',
      'sfd.technicalDocs.architecture.label.technologies': 'Technologies:',
      'sfd.technicalDocs.architecture.label.dataFlow': 'Data Flow',
      'sfd.technicalDocs.architecture.components.0.name': 'SFD Parser',
      'sfd.technicalDocs.architecture.components.1.name': 'Agent Coordinator',
      'sfd.technicalDocs.architecture.components.2.name': 'Persistence Engine',
      'sfd.technicalDocs.architecture.components.3.name': 'Command Executor',
      'sfd.technicalDocs.architecture.dataFlow.0': '1. Parse SFD → AST',
      'sfd.technicalDocs.architecture.dataFlow.1':
        '2. Validate syntax → Error reporting',
      'sfd.technicalDocs.architecture.dataFlow.2':
        '3. Build dependency graph → Execution plan',
      'sfd.technicalDocs.architecture.dataFlow.3':
        '4. Execute in parallel → Results aggregation',
      'sfd.technicalDocs.architecture.dataFlow.4':
        '5. Persist context → SQLite database',
      'sfd.technicalDocs.architecture.dataFlow.5':
        '6. Generate response → Human-readable format',
      'sfd.technicalDocs.api.endpoints.0.description':
        'Converts SFD text to abstract structure',
      'sfd.technicalDocs.api.endpoints.1.description':
        'Executes agent with provided context',
      'sfd.technicalDocs.api.endpoints.2.description':
        'Saves context to SQLite database',

      'sfd.agents.title': 'SFD Agent Examples',
      'sfd.agents.fullstackAnalyzer.title': 'Fullstack Code Analyzer',
      'sfd.agents.fullstackAnalyzer.description':
        'Agent specialized in code quality analysis with complete metrics',
      'sfd.agents.technicalOrchestrator.title': 'Technical Orchestrator',
      'sfd.agents.technicalOrchestrator.description':
        'Coordinator that handles multiple agents in parallel for complex analysis',
      'sfd.agents.sfdAgentArchitect.title': 'SFD Agent Architect',
      'sfd.agents.sfdAgentArchitect.description':
        'Architect specialized in SFD agent design and validation',

      // Projects page
      'nav.projects': 'Projects',
      'projects.title': 'My Projects',
      'projects.subtitle':
        'Explore my most outstanding projects, from full stack development to artificial intelligence integration',
      'projects.featured': 'Featured Projects',
      'projects.search': 'Search',
      'projects.searchPlaceholder': 'Search by name or description...',
      'projects.stackCategory': 'Tech Stack',
      'projects.allCategories': 'All categories',
      'projects.allStatuses': 'All statuses',
      'projects.status.label': 'Status',
      'projects.status.active': 'Active',
      'projects.status.in-progress': 'In Progress',
      'projects.status.archived': 'Archived',
      'projects.clearFilters': 'Clear Filters',
      'projects.viewDetails': 'View Details',
      'projects.noResults': 'No projects found matching your search criteria.',
      'projects.objectives': 'Objectives',
      'projects.achievements': 'Achievements',
      'projects.techStack': 'Tech Stack',
      'projects.links': 'Links',
      'projects.comingSoon': 'Coming Soon',

      // Timeline - Experience
      'timeline.mobiik.title': 'Full Stack Developer - mobiik',
      'timeline.mobiik.description':
        'At mobiik, my primary role is frontend development with Angular, complemented with full-stack development using microservices architectures in .NET and Azure. I develop REST APIs with Azure Functions and Azure App Services, integrate specialized AI agents, and implement solutions with Azure SQL Server and Entity Framework Core. I develop unit tests for .NET components and SQL Server, and work collaboratively with Azure DevOps and agile methodologies.',
      'timeline.mobiik.period': 'September 2025 - Present',
      'timeline.mobiik.company':
        'Angular & .NET Full-Stack • Microservices & AI',

      'timeline.rocket.title': 'Full Stack Developer - The Rocket Code',
      'timeline.rocket.description':
        'At The Rocket Code, I specialized in developing modern web applications, AI tool integrations and scalable e-commerce solutions. I worked on projects that require complex architectures and integration of multiple services, implementing tools with Claude AI, Gemini and LangGraph, developing APIs with NestJS and creating interfaces with NextJS, React and Angular v18/v19. I also specialized in Shopify development and administration for insurance and fintech sector applications.',
      'timeline.rocket.period': 'March 2025 - September 2025',
      'timeline.rocket.company': 'AI Software Development • Mexico City, CDMX',

      'timeline.blife.title': 'Backend Developer - BLIFE',
      'timeline.blife.description':
        'At BLIFE, I was a Backend Developer specialized in developing microservices using NestJS, GraphQL, and NATS for distributed architecture. I developed Blife-e-Signature with Flask and Python, implemented CI/CD with GitHub Actions and managed deployments on AWS. I applied Clean Code, SOLID and Clean Architecture principles to maintain scalable and efficient applications.',
      'timeline.blife.period': 'September 2024 - March 2025',
      'timeline.blife.company': 'Backend Development • Microservices',

      'timeline.midoc.title': 'Full Stack Developer - MIDOCONLINE',
      'timeline.midoc.description':
        'At MIDOCONLINE, I led the complete backend refactoring, migrating it from Laravel 8 to Laravel 11, optimizing its architecture and significantly improving performance. I worked with MySQL and PostgreSQL, developed internal ERPs with Angular and public interfaces with React, using Laravel Blade and managing infrastructure with Docker on AWS.',
      'timeline.midoc.period': 'April 2024 - September 2024',
      'timeline.midoc.company': 'Telemedicine Platform • Laravel Migration',

      'timeline.skytex.title': 'Full Stack Developer - Skytex México',
      'timeline.skytex.description':
        'At SKYTEX, I developed web and mobile applications for textile production process optimization, leading industrial digitalization projects. I developed internal ERP (Skynet 2.0) and billing portal (SkyInvoiceHub), migrated logistics app to Kotlin with Jetpack Compose and MVVM, and implemented access control with WebSockets. I also led backend dockerization and Ubuntu server management with Apache and NGINX.',
      'timeline.skytex.period': 'January 2022 - April 2024',
      'timeline.skytex.company': 'Textile Industry • Digital Transformation',

      'timeline.veterinaria.title': 'Full Stack Developer - Veterinaria Contla',
      'timeline.veterinaria.description':
        'Freelance experience in developing a comprehensive point of sale and inventory system, using Laravel as the main framework and leveraging cloud services to ensure product scalability and availability. Responsible for designing, developing and deploying customized solutions, adapted to the specific needs of the client, demonstrating autonomous work skills, project management and objective fulfillment.',
      'timeline.veterinaria.period': 'January 2021 - January 2022',
      'timeline.veterinaria.company': 'Freelance • POS System Development',

      // SFD Page
      'sfd.title': 'Universal Agent Rules',
      'sfd.intro':
        'The universal rules define the mandatory operational framework for all agents in the SFD system, ensuring consistency, traceability and efficiency in multi-platform interactions.',
      'sfd.execution.title': '1. Execution Workflow (Mandatory)',
      'sfd.execution.desc':
        'This execution flow establishes the mandatory steps that every agent must follow when processing a request. Includes loading contexts, validation, planning, parallel execution, database updates and final verification.',
      'sfd.execution.just':
        'Justification: Ensures that all operations are traceable and consistent, reducing human errors and improving response quality. The obligation ensures that no agent omits critical steps such as integrity verification.',
      'sfd.binding.title': '2. Binding Rules',
      'sfd.binding.desc':
        'Rules that bind agent actions to fixed standards, such as reading CLAUDE.md before operating, maintaining state in SQLite and using batch operations for multiple edits.',
      'sfd.binding.just':
        'Justification: These rules prevent inconsistencies between agents and platforms. For example, R7 (DbFirst) ensures that conversation context never exceeds persistent state, maintaining system integrity.',
      'sfd.database.title': '3. Database Schema',
      'sfd.database.desc':
        'SQLite database schema with tables for session context and notes, optimized for traceability and agent persistence.',
      'sfd.database.just':
        'Justification: Provides a standardized structure to store and retrieve information between sessions, facilitating auditing and state recovery. Including timestamps and primary keys ensures data integrity.',
      'sfd.instruction.title': '4. Instruction File Structure',
      'sfd.instruction.desc':
        'Defines the structure of instruction files such as copilot-instructions.md, separating universal rules (lines 1-72) from project-specific configurations.',
      'sfd.instruction.just':
        "Justification: Maintains clarity and avoids conflicts between global and local rules. The 'NOTE (IMPORTANT)' marker indicates the limit, allowing independent evolution of each section.",
      'sfd.task.title': '5. Task Protocol',
      'sfd.task.desc':
        '7-step protocol for executing tasks: load universal rules, read CLAUDE.md, query SQLite, parse request, validate, execute in batch and update database.',
      'sfd.task.just':
        'Justification: Standardizes the life cycle of each task, ensuring all decisions are based on updated data and recorded for auditing. This improves predictability and reduces risks of incomplete operations.',
      'sfd.precedence.title': '6. Precedence',
      'sfd.precedence.desc':
        'Source hierarchy: universal-rules.md has maximum priority, followed by CLAUDE.md, copilot-instructions.md, context.sqlite and finally the user request.',
      'sfd.precedence.just':
        'Justification: Establishes a clear chain of authority to resolve conflicts. Universal rules are immutable to guarantee global consistency, while local sources allow specific adaptations.',
      'sfd.forced.title': '7. Forced and Obligatory',
      'sfd.forced.desc':
        'All the above rules are obligatory without exceptions, ensuring strict compliance in all contexts.',
      'sfd.forced.just':
        'Justification: Obligation prevents deviations that could compromise SFD system integrity. Any exception requires explicit approval and detailed documentation.',
      'sfd.full.title': 'Complete Universal Rules',
      'sfd.full.desc':
        'Below is the complete content of the universal-agent-rules.md file.',
      'sfd.download': 'Download Universal Agent Rules (md)',
      'sfd.copy': 'Copy to Clipboard',
    },
  };

  constructor(private languageService: LanguageService) {}

  readonly currentLanguage = this.languageService.currentLanguage;

  translate(key: string): string {
    const currentLang = this.currentLanguage();
    return (
      this.translations[currentLang]?.[key] ||
      this.translations['es-MX'][key] ||
      key
    );
  }

  // Computed property for reactive translations
  t = computed(() => (key: string) => this.translate(key));
}
