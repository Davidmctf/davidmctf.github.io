import { ChangeDetectionStrategy, Component, HostListener, Inject, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer';
import { NavbarComponent } from '../navbar';
import { DOCUMENT } from '@angular/common';
import { Subject, windowWhen } from 'rxjs';
import { HeaderComponent } from '../header';

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
  private router = inject(Router)

  @ViewChild(NavbarComponent) navbarTopElement !: NavbarComponent;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.onSetColorNavBar();
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
