import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { UtilitiesService } from './shared/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portafolio';
  #utilities = inject(UtilitiesService);

  constructor(private library: FaIconLibrary) {
    this.#utilities.UserAgent =
      typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '';
    this.library.addIconPacks(fas, far, fab);

    // Redirección simple para GitHub Pages
    this.redirectIfNeeded();
  }

  private redirectIfNeeded(): void {
    if (typeof window === 'undefined') return;

    const path = window.location.pathname;
    const isRoot = path === '/' || path === '/davidmctf.github.io/';

    if (isRoot && window.location.hostname.includes('github.io')) {
      const lang = (navigator.language || 'es').split('-')[0];
      const target =
        lang === 'en'
          ? '/davidmctf.github.io/en/'
          : '/davidmctf.github.io/es-MX/';
      window.location.replace(target);
    }
  }
}
