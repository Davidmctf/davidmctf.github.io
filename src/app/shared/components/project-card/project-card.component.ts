import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Project } from '../../models';
import { TechBadgeComponent } from '../tech-badge/tech-badge.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, TechBadgeComponent],
  template: `
    <div class="project-card" [class.featured]="project.featured">
      <div class="card-header">
        <img
          *ngIf="project.screenshots[0]"
          [src]="project.screenshots[0].url"
          [alt]="project.screenshots[0].alt"
          class="project-image"
        />
        <div *ngIf="project.featured" class="featured-badge">{{ t()('projects.featured') }}</div>
      </div>

      <div class="card-content">
        <h3 class="project-title">{{ project.name }}</h3>

        <p class="project-description">{{ project.shortDescription }}</p>

        <div class="tech-stack">
          <app-tech-badge
            *ngFor="let tech of project.techStack"
            [name]="tech.name"
            [category]="tech.category"
          />
        </div>

        <div class="card-footer">
          <div class="status-badge" [class]="'status-' + project.status">
            {{ t()('projects.status.' + project.status) }}
          </div>

          <div class="links">
            <a
              *ngFor="let link of project.links"
              [href]="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="link-btn"
              [title]="link.label || link.type"
            >
              <i [class]="'fa-brands fa-' + getLinkIcon(link.type)"></i>
            </a>
          </div>
        </div>
      </div>

      <button class="view-details-btn" (click)="onViewDetails.emit(project.id)">
        {{ t()('projects.viewDetails') }}
      </button>
    </div>
  `,
  styles: [
    `
      .project-card {
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: hidden;
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
        height: 100%;
      }

      .project-card:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
      }

      .project-card.featured {
        border-color: #f96332;
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      }

      .card-header {
        position: relative;
        overflow: hidden;
        height: 150px;
      }

      .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .project-card:hover .project-image {
        transform: scale(1.05);
      }

      .featured-badge {
        position: absolute;
        top: 12px;
        right: 12px;
        background-color: #f96332;
        color: white;
        padding: 0.5rem 0.75rem;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      .card-content {
        padding: 1rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

      .project-title {
        margin: 0 0 0.75rem;
        font-size: 1.125rem;
        font-weight: 700;
        color: white;
      }

      .project-description {
        margin: 0 0 1rem;
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.5;
        flex-grow: 1;
      }

      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 1rem;
      }

      .status-badge {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.25rem 0.75rem;
        border-radius: 6px;
        text-transform: uppercase;
      }

      .status-active {
        background-color: rgba(16, 185, 129, 0.2);
        color: #10b981;
      }

      .status-in-progress {
        background-color: rgba(59, 130, 246, 0.2);
        color: #3b82f6;
      }

      .status-archived {
        background-color: rgba(107, 114, 128, 0.2);
        color: #9ca3af;
      }

      .links {
        display: flex;
        gap: 0.5rem;
      }

      .link-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        text-decoration: none;
        font-size: 0.875rem;

        &:hover {
          background-color: #f96332;
          transform: scale(1.1);
        }
      }

      .view-details-btn {
        width: 100%;
        padding: 0.75rem 1rem;
        background-color: #f96332;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #e85a28;
          transform: translateY(-2px);
        }

        &:active {
          transform: translateY(0);
        }
      }

      @media (min-width: 768px) {
        .card-header {
          height: 200px;
        }

        .card-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Output() onViewDetails = new EventEmitter<string>();

  private readonly translationService = inject(TranslationService);
  readonly t = this.translationService.t;

  getLinkIcon(type: 'github' | 'demo' | 'docs'): string {
    const icons: Record<string, string> = {
      github: 'github',
      demo: 'link',
      docs: 'book',
    };
    return icons[type] || 'link';
  }
}
