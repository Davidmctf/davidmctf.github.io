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
                        
                        Actualmente, formo parte de The Rocket Code como Full Stack Developer, donde me especializo en el desarrollo de aplicaciones web modernas, 
                        integraciones de herramientas de IA (Claude AI, Gemini, LangGraph) y soluciones de e-commerce escalables. Trabajo en proyectos que requieren arquitecturas complejas con 
                        NestJS, NextJS, React, Angular v18/v19 y especialización en Shopify para el sector asegurador y fintech.
                        
                        Anteriormente, trabajé en BLIFE como Backend Developer, donde desarrollé microservicios en 
                        NestJS con NATS y GraphQL, implementé soluciones de firma digital con Flask y Python, y gestioné CI/CD con GitHub Actions y AWS.
                        
                        También trabajé en MIDOCONLINE, donde lideré la refactorización completa del backend, migrándolo de Laravel 8 a Laravel 11, 
                        optimizando su arquitectura y mejorando significativamente el rendimiento.
                        
                        En SKYTEX MÉXICO, desarrollé soluciones empresariales como SkyFood, Skynet 2.0 y SkyInvoiceHub en
                        Angular, y SkySecurityApp y SkyInspect en Laravel y Node.js, además de liderar la
                        dockerización del backend y la gestión de servidores Ubuntu.
                        
                        Mi enfoque actual está en arquitecturas de microservicios, integración de IA y DevOps, mientras sigo perfeccionando mis habilidades en
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

      // Timeline - Experience
      'timeline.rocket.title': 'Full Stack Developer - The Rocket Code',
      'timeline.rocket.description':
        'En The Rocket Code, me especializo en el desarrollo de aplicaciones web modernas, integraciones de herramientas de IA y soluciones de e-commerce escalables. Trabajo en proyectos que requieren arquitecturas complejas y integración de múltiples servicios, implementando herramientas con Claude AI, Gemini y LangGraph, desarrollando APIs con NestJS y creando interfaces con NextJS, React y Angular v18/v19. También me especializo en desarrollo y administración de Shopify para aplicaciones del sector asegurador y fintech.',
      'timeline.rocket.period': 'Marzo 2025 - Actualidad',
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
                        
                        Currently, I am part of The Rocket Code as a Full Stack Developer, where I specialize in developing modern web applications, 
                        AI tool integrations (Claude AI, Gemini, LangGraph) and scalable e-commerce solutions. I work on projects that require complex architectures with 
                        NestJS, NextJS, React, Angular v18/v19 and specialization in Shopify for the insurance and fintech sector.
                        
                        Previously, I worked at BLIFE as a Backend Developer, where I developed microservices in 
                        NestJS with NATS and GraphQL, implemented digital signature solutions with Flask and Python, and managed CI/CD with GitHub Actions and AWS.
                        
                        I also worked at MIDOCONLINE, where I led the complete backend refactoring, migrating it from Laravel 8 to Laravel 11, 
                        optimizing its architecture and significantly improving performance.
                        
                        At SKYTEX MÉXICO, I developed business solutions such as SkyFood, Skynet 2.0 and SkyInvoiceHub in
                        Angular, and SkySecurityApp and SkyInspect in Laravel and Node.js, in addition to leading the
                        backend dockerization and Ubuntu server management.
                        
                        My current focus is on microservice architectures, AI integration and DevOps, while I continue to hone my skills in
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

      // Timeline - Experience
      'timeline.rocket.title': 'Full Stack Developer - The Rocket Code',
      'timeline.rocket.description':
        'At The Rocket Code, I specialize in developing modern web applications, AI tool integrations and scalable e-commerce solutions. I work on projects that require complex architectures and integration of multiple services, implementing tools with Claude AI, Gemini and LangGraph, developing APIs with NestJS and creating interfaces with NextJS, React and Angular v18/v19. I also specialize in Shopify development and administration for insurance and fintech sector applications.',
      'timeline.rocket.period': 'March 2025 - Present',
      'timeline.rocket.company': 'AI Software Development • Miami, USA',

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
