import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Subject } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, BsDropdownModule, CollapseModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() onScroll = new EventEmitter<any>();
  readonly route = inject(Router);
  private onDestroy$ = new Subject<void>();
  public isCollapsed = true;
  public isHome: boolean = true;
  public navbarClasses: { [key: string]: boolean } = {
    'navbar': true,
    'navbar-expand-lg': true,
    'fixed-top': true,
    'navbar-transparent': true,
    'bg-success': false
  };
  constructor() {
    this.route.events.subscribe(() => {
      const currentRoute = this.route.url;
      this.isHome = currentRoute.indexOf('home') !== -1;
    });
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  actionPage(elem: string){
    const currentRoute = this.route.url;
    if(currentRoute.indexOf(elem) !== -1){
      this.onScroll.emit(elem);
    }else{
      this.route.navigate([`/${elem}`]);
    }
  }
}
