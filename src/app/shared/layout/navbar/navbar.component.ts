import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, BsDropdownModule, CollapseModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() onScroll = new EventEmitter<any>();
  private onDestroy$ = new Subject<void>();
  public isCollapsed = true;
  public navbarClasses: { [key: string]: boolean } = {
    'navbar': true,
    'navbar-expand-lg': true,
    'fixed-top': true,
    'navbar-transparent': true,
    'bg-success': false
  };
  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
