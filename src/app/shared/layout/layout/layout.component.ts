import { ChangeDetectionStrategy, Component, HostListener, Inject, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer';
import { NavbarComponent } from '../navbar';
import { DOCUMENT } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { HeaderComponent } from '../header';
import { RouteInfoService, UtilitiesService } from '../../services';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule,FooterComponent, NavbarComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit ,OnDestroy {
  private onDestroy$ = new Subject<void>();
  readonly #utilities = inject(UtilitiesService);
  readonly #routerServ = inject(RouteInfoService);

  mostrarSombraCursor = false;
  coordenadasCursor = { x: 0, y: 0 };

  @ViewChild(NavbarComponent) navbarTopElement !: NavbarComponent;

  get IsMobile(): boolean {
    return this.#utilities.isMobile();
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.#routerServ.setCurrentRoute()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.onSetColorNavBar();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.coordenadasCursor = { x: event.clientX, y: event.clientY };
    this.mostrarSombraCursor = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.mostrarSombraCursor = false;
  }

  ngOnInit(): void {
    const bodyElement: HTMLElement = this.document.body;
    bodyElement.classList.add("index-page");
  }

  ngOnDestroy(): void {
    const bodyElement: HTMLElement = this.document.body;
    bodyElement.classList.remove("index-page");
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onSetColorNavBar(): void {
    const yOffset: boolean = (window.scrollY > 50);
    this.navbarTopElement.navbarClasses['navbar-transparent'] = !yOffset;
    this.navbarTopElement.navbarClasses['bg-success'] = yOffset;
  }

  onScrollById(elemId: string) {
    this.document.getElementById(elemId)!.scrollIntoView({behavior: "smooth", block: 'start', inline: 'nearest' });
  }
}
