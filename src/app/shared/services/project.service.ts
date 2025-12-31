import { Injectable, computed, signal } from '@angular/core';
import type {
  Project,
  ProjectFilter,
  StackCategory,
  TechStack,
} from '../models';

const PROJECTS_DATA: Project[] = [
  {
    id: 'angular-dotnet-api',
    name: 'Portfolio Backend API',
    shortDescription:
      'RESTful API en .NET 8 para gestionar información del portafolio',
    fullDescription:
      'API backend completa desarrollada con .NET 8 y Entity Framework Core, implementando SOLID principles y Clean Architecture. Incluye autenticación JWT, validaciones robustas y documentación OpenAPI.',
    stackCategory: 'angular-dotnet',
    techStack: [
      { category: 'backend', name: '.NET 8' },
      { category: 'backend', name: 'Entity Framework Core' },
      { category: 'database', name: 'PostgreSQL' },
      { category: 'devops', name: 'Docker' },
    ],
    objectives: [
      'Crear API RESTful siguiendo SOLID principles',
      'Implementar Clean Architecture',
      'Documentar con OpenAPI/Swagger',
    ],
    achievements: [
      '90%+ code coverage con xUnit',
      'Response time < 100ms en 99% requests',
      'Zero downtime deployments',
    ],
    screenshots: [
      {
        url: 'assets/img/projects/placeholder.jpg',
        alt: 'API Documentation',
        caption: 'Swagger API Documentation',
      },
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/davidmctf/portfolio-api-dotnet',
      },
      { type: 'docs', url: 'https://portfolio-api.davidmctf.dev/swagger' },
    ],
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'laravel-cms-blog',
    name: 'Laravel CMS Blog Platform',
    shortDescription:
      'Sistema de gestión de contenidos full-stack con Laravel 11 y Vue.js para publicar artículos',
    fullDescription:
      'Plataforma de blog completa construida con Laravel 11 backend y Vue 3 frontend. Incluye editor WYSIWYG, sistema de comentarios, categorías, tags, SEO optimizado y panel administrativo completo.',
    stackCategory: 'laravel-php',
    techStack: [
      { category: 'backend', name: 'Laravel 11' },
      { category: 'frontend', name: 'Vue 3' },
      { category: 'database', name: 'MySQL' },
      { category: 'frontend', name: 'TailwindCSS' },
    ],
    objectives: [
      'Crear CMS escalable para contenido',
      'Implementar SEO best practices',
      'Optimizar performance de lectura',
    ],
    achievements: [
      'Lighthouse score 95+',
      'Full-text search con ElasticSearch',
      'Batch processing para exportación',
    ],
    screenshots: [
      {
        url: 'assets/img/projects/placeholder.jpg',
        alt: 'Blog Dashboard',
        caption: 'Admin Dashboard',
      },
    ],
    links: [
      { type: 'github', url: 'https://github.com/davidmctf/laravel-cms-blog' },
      { type: 'demo', url: 'https://blog.davidmctf.dev' },
    ],
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'nextjs-saas-dashboard',
    name: 'Next.js SaaS Analytics Dashboard',
    shortDescription:
      'Dashboard analítico SaaS con Next.js 14, autenticación OAuth y visualizaciones en tiempo real',
    fullDescription:
      'Plataforma SaaS completa para análisis de datos con Next.js 14, Chart.js para visualizaciones avanzadas y Supabase como backend. Incluye autenticación OAuth, suscripciones Stripe y exportación de reportes.',
    stackCategory: 'react-nextjs',
    techStack: [
      { category: 'frontend', name: 'Next.js 14' },
      { category: 'frontend', name: 'React 19' },
      { category: 'database', name: 'PostgreSQL' },
      { category: 'devops', name: 'Vercel' },
    ],
    objectives: [
      'Crear dashboard escalable para SaaS',
      'Implementar pagos con Stripe',
      'Real-time data visualization',
    ],
    achievements: [
      'Sub-second page load times',
      'Multi-tenant architecture',
      '99.9% uptime SLA',
    ],
    screenshots: [
      {
        url: 'assets/img/projects/placeholder.jpg',
        alt: 'Analytics Dashboard',
        caption: 'Main Dashboard View',
      },
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/davidmctf/nextjs-saas-dashboard',
      },
      { type: 'demo', url: 'https://dashboard.davidmctf.dev' },
    ],
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'nestjs-microservices',
    name: 'NestJS Microservices Architecture',
    shortDescription:
      'Arquitectura de microservicios con NestJS, GraphQL y AWS para e-commerce',
    fullDescription:
      'Sistema de microservicios escalable usando NestJS, GraphQL, message queues con RabbitMQ y deployed en AWS ECS. Incluye autenticación JWT, circuit breakers y comprehensive logging.',
    stackCategory: 'nestjs-typescript',
    techStack: [
      { category: 'backend', name: 'NestJS' },
      { category: 'backend', name: 'GraphQL' },
      { category: 'database', name: 'MongoDB' },
      { category: 'devops', name: 'AWS ECS' },
    ],
    objectives: [
      'Implementar microservicios escalables',
      'API GraphQL con resolver patterns',
      'Event-driven architecture',
    ],
    achievements: [
      'Horizontal scaling with K8s',
      'Sub-100ms GraphQL queries',
      'Automated testing with 85% coverage',
    ],
    screenshots: [
      {
        url: 'assets/img/projects/placeholder.jpg',
        alt: 'Architecture Diagram',
        caption: 'Microservices Architecture',
      },
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/davidmctf/nestjs-microservices',
      },
      { type: 'docs', url: 'https://api.davidmctf.dev/graphql' },
    ],
    featured: true,
    status: 'in-progress',
  },
  {
    id: 'langgraph-ai-agent',
    name: 'LangGraph AI Agentic System',
    shortDescription:
      'Sistema agentico con LangGraph, LangChain y Claude API para research automático',
    fullDescription:
      'Sistema de agentes IA construido con LangGraph y LangChain que automatiza investigación, genera reportes y responde consultas complejas usando Claude API. Incluye memory management, tool calling y streaming responses.',
    stackCategory: 'langgraph-python',
    techStack: [
      { category: 'ai', name: 'LangGraph' },
      { category: 'ai', name: 'LangChain' },
      { category: 'ai', name: 'Claude API' },
      { category: 'backend', name: 'FastAPI' },
    ],
    objectives: [
      'Implementar agentic workflows',
      'Tool calling y function composition',
      'Memory y context management',
    ],
    achievements: [
      'Multi-step reasoning chains',
      'Real-time streaming responses',
      'Production-ready error handling',
    ],
    screenshots: [
      {
        url: 'assets/img/projects/placeholder.jpg',
        alt: 'Agent Interface',
        caption: 'AI Agent Interface',
      },
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/davidmctf/langgraph-ai-agent',
      },
      { type: 'demo', url: 'https://ai-agent.davidmctf.dev' },
    ],
    featured: false,
    status: 'in-progress',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly _projects = signal<Project[]>(PROJECTS_DATA);
  private readonly _filter = signal<ProjectFilter>({});

  readonly projects = this._projects.asReadonly();

  readonly filteredProjects = computed(() => {
    const filter = this._filter();
    let result = this._projects();

    if (filter.stackCategory) {
      result = result.filter((p) => p.stackCategory === filter.stackCategory);
    }

    if (filter.searchTerm) {
      const term = filter.searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.shortDescription.toLowerCase().includes(term) ||
          p.techStack.some((t) => t.name.toLowerCase().includes(term)),
      );
    }

    if (filter.status) {
      result = result.filter((p) => p.status === filter.status);
    }

    return result;
  });

  readonly featuredProjects = computed(() =>
    this._projects().filter((p) => p.featured),
  );

  readonly stackCategories = computed(() => [
    ...new Set(this._projects().map((p) => p.stackCategory)),
  ]);

  readonly allTechnologies = computed(() => {
    const techs = new Map<string, TechStack>();
    this._projects().forEach((p) => {
      p.techStack.forEach((t) => {
        if (!techs.has(t.name)) {
          techs.set(t.name, t);
        }
      });
    });
    return Array.from(techs.values());
  });

  setFilter(filter: Partial<ProjectFilter>) {
    this._filter.update((current) => ({ ...current, ...filter }));
  }

  clearFilter() {
    this._filter.set({});
  }

  getProjectById(id: string): Project | undefined {
    return this._projects().find((p) => p.id === id);
  }

  getProjectsByStackCategory(category: StackCategory): Project[] {
    return this._projects().filter((p) => p.stackCategory === category);
  }

  searchProjects(term: string): Project[] {
    const lowerTerm = term.toLowerCase();
    return this._projects().filter(
      (p) =>
        p.name.toLowerCase().includes(lowerTerm) ||
        p.shortDescription.toLowerCase().includes(lowerTerm) ||
        p.fullDescription.toLowerCase().includes(lowerTerm),
    );
  }
}
