import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LanguageService,
  type LanguageOption,
} from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule],
  template: `
    <div class="language-switcher">
      @for (language of availableLanguages; track language.code) {
        <button
          class="btn language-btn"
          [class.active]="language.code === currentLanguage()"
          (click)="setLanguage(language.code)"
          [title]="language.nativeName"
        >
          <span class="flag-emoji">{{ language.flag }}</span>
          <span class="lang-text">{{ language.nativeName }}</span>
        </button>
      }
    </div>
  `,
  styles: [
    `
      .language-switcher {
        display: flex;
        gap: 0.5rem;
      }

      .language-btn {
        padding: 0.5rem 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: transparent;
        border-radius: 20px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
        color: white;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          color: white;
          text-decoration: none;
        }

        &.active {
          background-color: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.6);
          color: white;
        }

        &:focus {
          outline: 2px solid #f96332;
          outline-offset: 2px;
          color: white;
          text-decoration: none;
        }
      }

      .flag-emoji {
        font-size: 1.2rem;
        line-height: 1;
      }

      .lang-text {
        font-size: 0.875rem;
        font-weight: 500;
      }

      @media (max-width: 768px) {
        .lang-text {
          display: none;
        }
      }
    `,
  ],
})
export class LanguageSwitcherComponent {
  private readonly languageService = inject(LanguageService);

  readonly currentLanguage = this.languageService.currentLanguage;
  readonly currentLanguageOption = this.languageService.currentLanguageOption;
  readonly availableLanguages = this.languageService.availableLanguages;

  setLanguage(language: string): void {
    this.languageService.setLanguage(language as any);
  }
}
