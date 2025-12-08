import { Component, Output, EventEmitter, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import type { ProjectFilter, StackCategory } from '../../models';
import { ProjectService } from '../../services/project.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-project-filter',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="filter-container">
      <div class="filter-group">
        <label for="search" class="filter-label">{{ t()('projects.search') }}</label>
        <input
          id="search"
          type="text"
          class="filter-input search-input"
          [(ngModel)]="searchTerm"
          (input)="onSearchChange()"
          [placeholder]="t()('projects.searchPlaceholder')"
        />
      </div>

      <div class="filter-group">
        <label for="category" class="filter-label">{{ t()('projects.stackCategory') }}</label>
        <select
          id="category"
          class="filter-input"
          [(ngModel)]="selectedCategory"
          (change)="onCategoryChange()"
        >
          <option value="">{{ t()('projects.allCategories') }}</option>
          <option *ngFor="let category of stackCategories()" [value]="category">
            {{ getCategoryLabel(category) }}
          </option>
        </select>
      </div>

      <div class="filter-group">
        <label for="status" class="filter-label">{{ t()('projects.status.label') }}</label>
        <select
          id="status"
          class="filter-input"
          [(ngModel)]="selectedStatus"
          (change)="onStatusChange()"
        >
          <option value="">{{ t()('projects.allStatuses') }}</option>
          <option value="active">{{ t()('projects.status.active') }}</option>
          <option value="in-progress">{{ t()('projects.status.in-progress') }}</option>
          <option value="archived">{{ t()('projects.status.archived') }}</option>
        </select>
      </div>

      <button class="clear-btn" (click)="onClearFilters()">{{ t()('projects.clearFilters') }}</button>
    </div>
  `,
  styles: [
    `
      .filter-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 2rem;
      }

      .filter-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .filter-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
        text-transform: uppercase;
      }

      .filter-input {
        padding: 0.75rem 1rem;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        color: white;
        font-size: 0.875rem;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          background-color: rgba(255, 255, 255, 0.1);
          border-color: #f96332;
          box-shadow: 0 0 0 3px rgba(249, 99, 50, 0.1);
        }

        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      }

      select.filter-input {
        cursor: pointer;

        option {
          background-color: #0f172a;
          color: white;
        }
      }

      .search-input {
        min-width: 100%;
      }

      .clear-btn {
        padding: 0.75rem 1.5rem;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        color: white;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        align-self: start;

        &:hover {
          background-color: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        &:active {
          transform: scale(0.98);
        }
      }

      @media (min-width: 768px) {
        .filter-container {
          grid-template-columns: 1fr 1fr;
          padding: 1.25rem;
        }

        .clear-btn {
          grid-column: 1 / -1;
        }
      }

      @media (min-width: 1200px) {
        .filter-container {
          grid-template-columns: 1fr 1fr 1fr auto;
          padding: 1.5rem;
        }

        .clear-btn {
          grid-column: auto;
          align-self: flex-end;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFilterComponent {
  @Output() filterChange = new EventEmitter<ProjectFilter>();
  @Output() clearFilters = new EventEmitter<void>();

  private readonly projectService = inject(ProjectService);
  private readonly translationService = inject(TranslationService);

  readonly t = this.translationService.t;
  readonly stackCategories = this.projectService.stackCategories;

  searchTerm: string = '';
  selectedCategory: string = '';
  selectedStatus: string = '';

  onSearchChange(): void {
    this.emitFilter();
  }

  onCategoryChange(): void {
    this.emitFilter();
  }

  onStatusChange(): void {
    this.emitFilter();
  }

  onClearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedStatus = '';
    this.clearFilters.emit();
  }

  private emitFilter(): void {
    const filter: ProjectFilter = {};

    if (this.searchTerm.trim()) {
      filter.searchTerm = this.searchTerm.trim();
    }

    if (this.selectedCategory) {
      filter.stackCategory = this.selectedCategory as StackCategory;
    }

    if (this.selectedStatus) {
      filter.status = this.selectedStatus as 'active' | 'archived' | 'in-progress';
    }

    this.filterChange.emit(filter);
  }

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'angular-dotnet': 'Angular + .NET',
      'dotnet-csharp': '.NET + C#',
      'laravel-php': 'Laravel + PHP',
      'react-nextjs': 'React + Next.js',
      'langgraph-python': 'LangGraph + Python',
      'nestjs-typescript': 'NestJS + TypeScript',
      'springboot-java': 'Spring Boot + Java',
      rust: 'Rust',
      'kotlin-jetpack': 'Kotlin + Jetpack',
    };
    return labels[category] || category;
  }
}
