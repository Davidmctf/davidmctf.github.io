import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  @Output() onScroll = new EventEmitter<any>();
  public isHome = false;
  readonly route = inject(Router);
  constructor() { }

  ngOnInit(): void {
    // this.route.events.subscribe(() => {
    //   const currentRoute = this.route.url;
    //   this.isHome = currentRoute.indexOf('home') !== -1;
    // });
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
