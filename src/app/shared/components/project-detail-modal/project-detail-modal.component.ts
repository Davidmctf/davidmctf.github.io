import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Project } from '../../models';
import { TechBadgeComponent } from '../tech-badge/tech-badge.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-project-detail-modal',
  imports: [CommonModule, TechBadgeComponent],
  template: `
    <div class="modal-overlay" (click)="onClose.emit()" *ngIf="project">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="onClose.emit()" aria-label="Close modal">
          <i class="fa-solid fa-times"></i>
        </button>

        <div class="modal-header">
          <img
            *ngIf="project.screenshots[0]"
            [src]="project.screenshots[0].url"
            [alt]="project.screenshots[0].alt"
            class="modal-image"
          />
        </div>

        <div class="modal-body">
          <div class="modal-title-section">
            <h2 class="modal-title">{{ project.name }}</h2>
            <div class="status-badge" [class]="'status-' + project.status">
              {{ t()('projects.status.' + project.status) }}
            </div>
          </div>

          <p class="modal-description">{{ project.fullDescription }}</p>

          <div class="objectives-section">
            <h3>{{ t()('projects.objectives') }}</h3>
            <ul class="objectives-list">
              <li *ngFor="let obj of project.objectives">{{ obj }}</li>
            </ul>
          </div>

          <div class="achievements-section">
            <h3>{{ t()('projects.achievements') }}</h3>
            <ul class="achievements-list">
              <li *ngFor="let achievement of project.achievements">{{ achievement }}</li>
            </ul>
          </div>

          <div class="tech-stack-section">
            <h3>{{ t()('projects.techStack') }}</h3>
            <div class="tech-stack">
              <app-tech-badge
                *ngFor="let tech of project.techStack"
                [name]="tech.name"
                [category]="tech.category"
              />
            </div>
          </div>

          <div class="links-section">
            <h3>{{ t()('projects.links') }}</h3>
            <div class="links">
              <a
                *ngFor="let link of project.links"
                [href]="link.type === 'demo' ? null : link.url"
                [target]="link.type === 'demo' ? null : '_blank'"
                [rel]="link.type === 'demo' ? null : 'noopener noreferrer'"
                [class.disabled]="link.type === 'demo'"
                class="link-btn"
              >
                <i [class]="'fa-solid fa-external-link-alt'"></i>
                {{ link.label || link.type | titlecase }}
                <span *ngIf="link.type === 'demo'" class="coming-soon">({{ t()('projects.comingSoon') }})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 0;
        animation: fadeIn 0.3s ease;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .modal-content {
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        border-radius: 0;
        max-width: 600px;
        width: 100%;
        max-height: 100vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: slideUp 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
      }

      @keyframes slideUp {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        border: none;
        color: white;
        font-size: 1.25rem;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;

        &:hover {
          background-color: #f96332;
        }
      }

      .modal-header {
        overflow: hidden;
        height: 200px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .modal-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .modal-body {
        padding: 1.5rem;
      }

      .modal-title-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .modal-title {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
        flex-grow: 1;
      }

      .status-badge {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        text-transform: uppercase;
        white-space: nowrap;
        align-self: flex-start;
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

      .modal-description {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      }

      h3 {
        color: white;
        font-size: 1.125rem;
        font-weight: 700;
        margin-bottom: 1rem;
        margin-top: 0;
      }

      .objectives-section,
      .achievements-section {
        margin-bottom: 2rem;
      }

      .objectives-list,
      .achievements-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .objectives-list li,
      .achievements-list li {
        padding-left: 1.5rem;
        margin-bottom: 0.75rem;
        color: rgba(255, 255, 255, 0.7);
        position: relative;

        &:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: 700;
        }
      }

      .tech-stack-section {
        margin-bottom: 2rem;
      }

      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .links-section {
        margin-bottom: 1rem;
      }

      .links {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .link-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.25rem;
        background-color: #f96332;
        color: white;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.875rem;
        transition: all 0.3s ease;

        &:hover {
          background-color: #e85a28;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(249, 99, 50, 0.3);
        }

        &.disabled {
          background-color: rgba(107, 114, 128, 0.3);
          color: rgba(255, 255, 255, 0.4);
          cursor: not-allowed;
          pointer-events: none;

          &:hover {
            background-color: rgba(107, 114, 128, 0.3);
            transform: none;
            box-shadow: none;
          }
        }
      }

      .coming-soon {
        font-size: 0.75rem;
        font-weight: 400;
        opacity: 0.7;
      }

      @media (min-width: 600px) {
        .modal-overlay {
          padding: 1rem;
        }

        .modal-content {
          border-radius: 12px;
          max-height: 90vh;
        }

        .modal-header {
          height: 300px;
        }

        .modal-body {
          padding: 2rem;
        }

        .modal-title {
          font-size: 1.75rem;
        }

        .modal-title-section {
          flex-direction: row;
        }

        .status-badge {
          align-self: auto;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailModalComponent {
  @Input() project: Project | null = null;
  @Output() onClose = new EventEmitter<void>();

  private readonly translationService = inject(TranslationService);
  readonly t = this.translationService.t;
}
