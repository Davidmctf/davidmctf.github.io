import { Injectable, computed, signal } from '@angular/core';
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
      'projects.noResults': 'No se encontraron proyectos que coincidan con tus criterios de búsqueda.',
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
      'timeline.mobiik.company': 'Angular & .NET Full-Stack • Microservices & AI',

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
      'timeline.mobiik.company': 'Angular & .NET Full-Stack • Microservices & AI',

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
