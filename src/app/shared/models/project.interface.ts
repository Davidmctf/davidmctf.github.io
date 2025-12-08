export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  stackCategory: StackCategory;
  techStack: TechStack[];
  objectives: string[];
  achievements: string[];
  screenshots: Screenshot[];
  links: ProjectLink[];
  featured: boolean;
  status: 'active' | 'archived' | 'in-progress';
}

export type StackCategory =
  | 'angular-dotnet'
  | 'dotnet-csharp'
  | 'laravel-php'
  | 'react-nextjs'
  | 'langgraph-python'
  | 'nestjs-typescript'
  | 'springboot-java'
  | 'rust'
  | 'kotlin-jetpack';

export interface TechStack {
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'ai' | 'mobile';
  name: string;
  icon?: string;
}

export interface ProjectLink {
  type: 'github' | 'demo' | 'docs';
  url: string;
  label?: string;
}

export interface Screenshot {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProjectFilter {
  stackCategory?: StackCategory;
  searchTerm?: string;
  status?: Project['status'];
}
