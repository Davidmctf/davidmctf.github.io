import { Injectable, signal, computed, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';

  private readonly _currentTheme = signal<Theme>(this.getInitialTheme());

  readonly currentTheme = this._currentTheme.asReadonly();
  readonly isDarkTheme = computed(() => this._currentTheme() === 'dark');
  readonly isLightTheme = computed(() => this._currentTheme() === 'light');

  constructor() {
    effect(() => {
      this.applyTheme(this._currentTheme());
    });
  }

  private getInitialTheme(): Theme {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
      if (savedTheme) {
        return savedTheme;
      }
    }

    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    return 'light';
  }

  toggleTheme(): void {
    this._currentTheme.update((current) =>
      current === 'light' ? 'dark' : 'light',
    );
  }

  setTheme(theme: Theme): void {
    this._currentTheme.set(theme);
  }

  private applyTheme(theme: Theme): void {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('light-theme', 'dark-theme');
      root.classList.add(`${theme}-theme`);

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.THEME_KEY, theme);
      }
    }
  }
}
