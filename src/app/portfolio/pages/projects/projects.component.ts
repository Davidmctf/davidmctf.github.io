import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component';
import { ProjectDetailModalComponent } from '../../../shared/components/project-detail-modal/project-detail-modal.component';
import { ProjectFilterComponent } from '../../../shared/components/project-filter/project-filter.component';
import type { Project, ProjectFilter } from '../../../shared/models';
import { ProjectService } from '../../../shared/services/project.service';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    ProjectCardComponent,
    ProjectFilterComponent,
    ProjectDetailModalComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
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
