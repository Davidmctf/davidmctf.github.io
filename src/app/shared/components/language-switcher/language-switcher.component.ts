import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {
  LanguageService,
  type LanguageOption,
} from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule, FontAwesomeModule, BsDropdownModule, TooltipModule],
  template: `
    <div class="dropdown">
      <button
        class="btn btn-link language-switcher-btn dropdown-toggle"
        bsDropdown
        [autoClose]="true"
        [attr.aria-label]="
          'Current language: ' + currentLanguageOption().nativeName
        "
        placement="bottom"
        tooltip="Change Language"
      >
        <span class="flag-emoji">{{ currentLanguageOption().flag }}</span>
        <span class="d-none d-lg-inline ml-1">{{
          currentLanguageOption().nativeName
        }}</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-right">
        @for (language of availableLanguages; track language.code) {
          <li>
            <a
              class="dropdown-item"
              [class.active]="language.code === currentLanguage()"
              href="javascript:void(0)"
              (click)="setLanguage(language.code)"
            >
              <span class="flag-emoji mr-2">{{ language.flag }}</span>
              {{ language.nativeName }}
              @if (language.code === currentLanguage()) {
                <fa-icon
                  [icon]="['fas', 'check']"
                  class="ml-auto text-success"
                ></fa-icon>
              }
            </a>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .language-switcher-btn {
        padding: 0.5rem 0.75rem;
        border: none;
        background: transparent;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        color: white;
        text-decoration: none;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          text-decoration: none;
        }

        &:focus {
          outline: 2px solid var(--theme-primary);
          outline-offset: 2px;
          color: white;
          text-decoration: none;
        }

        &::after {
          margin-left: 0.5rem;
          border-top-color: white;
        }
      }

      .flag-emoji {
        font-size: 1.2rem;
        line-height: 1;
      }

      .dropdown-item {
        display: flex;
        align-items: center;

        &.active {
          background-color: var(--theme-success);
          color: white;
        }

        .flag-emoji {
          font-size: 1rem;
        }
      }

      .dark-theme .language-switcher-btn:hover {
        background-color: rgba(0, 0, 0, 0.2);
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
