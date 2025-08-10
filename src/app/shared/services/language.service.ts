import { Injectable, signal, computed } from '@angular/core';

export type Language = 'es-MX' | 'en';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'portfolio-language';

  private readonly _currentLanguage = signal<Language>(
    this.getInitialLanguage(),
  );

  readonly currentLanguage = this._currentLanguage.asReadonly();
  readonly isSpanish = computed(() => this._currentLanguage() === 'es-MX');
  readonly isEnglish = computed(() => this._currentLanguage() === 'en');

  readonly availableLanguages: LanguageOption[] = [
    {
      code: 'es-MX',
      name: 'Spanish (Mexico)',
      nativeName: 'Español (México)',
      flag: '🇲🇽',
    },
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸',
    },
  ];

  readonly currentLanguageOption = computed(
    () =>
      this.availableLanguages.find(
        (lang) => lang.code === this._currentLanguage(),
      ) || this.availableLanguages[0],
  );

  private getInitialLanguage(): Language {
    if (typeof localStorage !== 'undefined') {
      const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) as Language;
      if (
        savedLanguage &&
        this.availableLanguages.some((lang) => lang.code === savedLanguage)
      ) {
        return savedLanguage;
      }
    }

    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language;
      if (browserLang.startsWith('es')) {
        return 'es-MX';
      }
      if (browserLang.startsWith('en')) {
        return 'en';
      }
    }

    return 'es-MX'; // Default to Mexican Spanish
  }

  setLanguage(language: Language): void {
    this._currentLanguage.set(language);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.LANGUAGE_KEY, language);
    }

    // For full i18n support, would redirect to localized version
    // For now, this manages UI language state
  }

  toggleLanguage(): void {
    const newLang = this._currentLanguage() === 'es-MX' ? 'en' : 'es-MX';
    this.setLanguage(newLang);
  }
}
