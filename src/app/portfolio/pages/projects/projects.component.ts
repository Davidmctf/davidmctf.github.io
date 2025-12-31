import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../shared/services/project.service';
import { TranslationService } from '../../../shared/services/translation.service';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component';
import { ProjectFilterComponent } from '../../../shared/components/project-filter/project-filter.component';
import { ProjectDetailModalComponent } from '../../../shared/components/project-detail-modal/project-detail-modal.component';
import type { ProjectFilter, Project } from '../../../shared/models';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    ProjectCardComponent,
    ProjectFilterComponent,
    ProjectDetailModalComponent,
  ],
  template: `
    <section class="projects-section">
      <div class="squares square-mobiik"></div>
      <div class="squares square-rocket"></div>
      <div class="squares square-blife"></div>
      <div class="squares square-midoconline"></div>
      <div class="squares square-skytex"></div>
      <div class="container">
        <div class="section-header">
          <h1 class="section-title">{{ t()('projects.title') }}</h1>
          <p class="section-subtitle">{{ t()('projects.subtitle') }}</p>
        </div>

        <div class="featured-projects" *ngIf="featuredProjects().length > 0">
          <h2 class="subsection-title">{{ t()('projects.featured') }}</h2>
          <div class="featured-grid">
            <app-project-card
              *ngFor="let project of featuredProjects()"
              [project]="project"
              (onViewDetails)="onViewDetails($event)"
            />
          </div>
        </div>

        <app-project-filter
          (filterChange)="onFilterChange($event)"
          (clearFilters)="onClearFilters()"
        />

        <div class="projects-grid">
          <app-project-card
            *ngFor="let project of filteredProjects()"
            [project]="project"
            (onViewDetails)="onViewDetails($event)"
          />
        </div>

        <div class="no-results" *ngIf="filteredProjects().length === 0">
          <i class="fa-solid fa-search"></i>
          <p>{{ t()('projects.noResults') }}</p>
        </div>

        <app-project-detail-modal
          [project]="selectedProject()"
          (onClose)="selectedProject.set(null)"
        />
      </div>
    </section>
  `,
  styles: [
    `
      .projects-section {
        padding: 2rem 1rem;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .section-header {
        text-align: center;
        margin-bottom: 2rem;
      }

      .section-title {
        margin: 0;
        font-size: clamp(1.75rem, 5vw, 3rem);
        font-weight: 800;
        background: linear-gradient(135deg, white 0%, #f96332 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .section-subtitle {
        margin: 1rem 0 0;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.6;
      }

      .featured-projects {
        margin-bottom: 2rem;
      }

      .subsection-title {
        margin: 0 0 1.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
        display: flex;
        align-items: center;
        gap: 0.75rem;

        &:before {
          content: '⭐';
          font-size: 1.25rem;
        }
      }

      .featured-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .no-results {
        text-align: center;
        padding: 3rem;
        color: rgba(255, 255, 255, 0.6);
      }

      .no-results i {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.5;
      }

      @media (min-width: 768px) {
        .projects-section {
          padding: 4rem 1rem;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .featured-grid {
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .projects-grid {
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
        }

        .featured-projects {
          margin-bottom: 3rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private readonly projectService = inject(ProjectService);
  private readonly translationService = inject(TranslationService);

  readonly t = this.translationService.t;
  readonly selectedProject = signal<Project | null>(null);

  readonly filteredProjects = this.projectService.filteredProjects;
  readonly featuredProjects = this.projectService.featuredProjects;

  onFilterChange(filter: ProjectFilter): void {
    this.projectService.setFilter(filter);
  }

  onClearFilters(): void {
    this.projectService.clearFilter();
  }

  onViewDetails(projectId: string): void {
    const project = this.projectService.getProjectById(projectId);
    if (project) {
      this.selectedProject.set(project);
    }
  }
}
