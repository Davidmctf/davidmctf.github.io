import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouteInfoService } from '../../services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, BsDropdownModule, CollapseModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() onScroll = new EventEmitter<any>();

  #onDestroy$ = new Subject<void>();
  #currentRoute: string = '';
  readonly #routerServ = inject(RouteInfoService);
  readonly #router = inject(Router);
  public isCollapsed = true;
  public isHome: boolean = true;
  public navbarClasses: { [key: string]: boolean } = {
    'navbar': true,
    'navbar-expand-lg': true,
    'fixed-top': true,
    'navbar-transparent': true,
    'bg-success': false
  };

  constructor() { }

  ngOnInit(): void {
    this.#routerServ.currentRoute$
      .pipe(takeUntil(this.#onDestroy$))
      .subscribe((currentRoute) => {
        this.#currentRoute = currentRoute;
        this.isHome = currentRoute.indexOf('home') !== -1 || currentRoute === '/';
      });
  }

  ngOnDestroy(): void {
    this.#onDestroy$.next();
    this.#onDestroy$.complete();
  }

  actionPage(elem: string){
    if(this.isHome && (this.#currentRoute.indexOf(elem) !== -1 || this.#currentRoute === '/')){
      this.onScroll.emit(elem);
    }else{
      this.#router.navigate([`/${elem}`]);
    }
  }
}
