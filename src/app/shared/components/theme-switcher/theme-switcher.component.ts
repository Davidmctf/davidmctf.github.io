import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TooltipModule],
  template: `
    <button
      class="btn btn-link theme-switcher-btn"
      (click)="toggleTheme()"
      [attr.aria-label]="
        'Switch to ' + (isDarkTheme() ? 'light' : 'dark') + ' theme'
      "
      placement="bottom"
      tooltip="{{ isDarkTheme() ? 'Light' : 'Dark' }} Theme"
    >
      <fa-icon
        [icon]="['fas', isDarkTheme() ? 'sun' : 'moon']"
        [class.text-warning]="isDarkTheme()"
        [class.text-primary]="!isDarkTheme()"
      >
      </fa-icon>
    </button>
  `,
  styles: [
    `
      .theme-switcher-btn {
        padding: 0.5rem;
        border: none;
        background: transparent;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        &:focus {
          outline: 2px solid var(--theme-primary);
          outline-offset: 2px;
        }

        fa-icon {
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
      }

      .dark-theme .theme-switcher-btn:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class ThemeSwitcherComponent {
  private readonly themeService = inject(ThemeService);

  readonly isDarkTheme = this.themeService.isDarkTheme;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
