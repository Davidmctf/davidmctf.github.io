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
      'nav.home': 'Home',
      'nav.aboutme': 'About me',
      'nav.experience': 'Experience',
      'nav.example': 'Example Request',
      'nav.cv': 'CV',
      'nav.pdf': 'PDF Format',
      'nav.html': 'HTML Format',
      'home.greeting': 'Hola!',
      'home.intro':
        'Mi nombre es David Muñoz Cruz. Soy desarrollador Full stack',
      'home.aboutme.title': 'About me',
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
      'home.experience.title': 'Experience',
    },
    en: {
      'nav.home': 'Home',
      'nav.aboutme': 'About me',
      'nav.experience': 'Experience',
      'nav.example': 'Example Request',
      'nav.cv': 'CV',
      'nav.pdf': 'PDF Format',
      'nav.html': 'HTML Format',
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
