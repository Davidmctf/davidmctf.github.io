import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit, OnDestroy{
  @Output() onScroll = new EventEmitter<any>();
  readonly route = inject(Router);
  private onDestroy$ = new Subject<void>();
  public isHome: boolean = true;

  constructor() {
    this.route.events.subscribe(() => {
      const currentRoute = this.route.url;
      this.isHome = currentRoute.indexOf('home') !== -1;
    });
  }

  ngOnInit(): void {}

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
