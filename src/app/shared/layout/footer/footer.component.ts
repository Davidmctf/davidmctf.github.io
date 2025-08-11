import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouteInfoService } from '../../services';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit, OnDestroy {
  @Output() onScroll = new EventEmitter<any>();

  #onDestroy$ = new Subject<void>();
  #currentRoute: string = '';
  readonly #routerServ = inject(RouteInfoService);
  readonly #router = inject(Router);
  public isHome: boolean = true;

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
    if (this.isHome && this.#currentRoute.indexOf(elem) !== -1) {
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
