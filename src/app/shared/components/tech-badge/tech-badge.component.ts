import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-badge',
  imports: [CommonModule],
  template: `
    <span class="tech-badge" [class]="badgeClass">
      {{ name }}
    </span>
  `,
  styles: [
    `
      .tech-badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        white-space: nowrap;
        transition: all 0.3s ease;
      }

      .tech-badge:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      .badge-frontend {
        background-color: #3b82f6;
        color: white;
      }

      .badge-backend {
        background-color: #10b981;
        color: white;
      }

      .badge-database {
        background-color: #f59e0b;
        color: white;
      }

      .badge-devops {
        background-color: #8b5cf6;
        color: white;
      }

      .badge-ai {
        background-color: #ec4899;
        color: white;
      }

      .badge-mobile {
        background-color: #06b6d4;
        color: white;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechBadgeComponent {
  @Input() name: string = '';
  @Input() category: 'frontend' | 'backend' | 'database' | 'devops' | 'ai' | 'mobile' =
    'frontend';

  get badgeClass(): string {
    return `badge-${this.category}`;
  }
}
