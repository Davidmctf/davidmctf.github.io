import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouteInfoService } from '../../services';
import { ThemeSwitcherComponent } from '../../components/theme-switcher/theme-switcher.component';
import { LanguageSwitcherComponent } from '../../components/language-switcher/language-switcher.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule,
    CollapseModule,
    FontAwesomeModule,
    TooltipModule,
    ThemeSwitcherComponent,
    LanguageSwitcherComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() onScroll = new EventEmitter<any>();

  #onDestroy$ = new Subject<void>();
  #currentRoute: string = '';
  readonly #routerServ = inject(RouteInfoService);
  readonly #router = inject(Router);
  readonly #translationService = inject(TranslationService);
  public isCollapsed = true;

  get t() {
    return this.#translationService.t();
  }
  public isHome: boolean = true;
  public navbarClasses: { [key: string]: boolean } = {
    navbar: true,
    'navbar-expand-lg': true,
    'fixed-top': true,
    'navbar-transparent': true,
    'bg-success': false,
  };

  constructor() {
    this.#routerServ.currentRoute$
      .pipe(takeUntil(this.#onDestroy$))
      .subscribe((currentRoute) => {
        this.#currentRoute = currentRoute;
        this.isHome =
          currentRoute.indexOf('home') !== -1 || currentRoute === '/';
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.#onDestroy$.next();
    this.#onDestroy$.complete();
  }

  actionPage(elem: string) {
    if (
      this.isHome &&
      (this.#currentRoute.indexOf(elem) !== -1 || this.#currentRoute === '/')
    ) {
      this.onScroll.emit(elem);
    } else {
      this.#router.navigate([`/${elem}`]);
    }
  }

  downloadCV(format: 'html' | 'pdf'): void {
    if (typeof window !== 'undefined') {
      const link = document.createElement('a');
      link.href =
        format === 'pdf'
          ? 'assets/cv_resume/david_cv.pdf'
          : 'assets/cv_resume/david_cv.html';
      link.download = `David_Munoz_Cruz_CV.${format}`;
      link.setAttribute('download', `David_Munoz_Cruz_CV.${format}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
