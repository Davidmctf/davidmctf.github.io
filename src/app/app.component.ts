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
  }
}
