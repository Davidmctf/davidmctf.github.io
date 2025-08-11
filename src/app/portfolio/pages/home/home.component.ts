import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
// import { HeaderComponent } from '../../../shared/layout';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimelineComponent } from 'src/app/shared/components/timeline/timeline.component';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    // HeaderComponent,
    BsDropdownModule,
    ProgressbarModule,
    TooltipModule,
    CollapseModule,
    TabsModule,
    PaginationModule,
    AlertModule,
    BsDatepickerModule,
    CarouselModule,
    ModalModule,
    PopoverModule,
    FontAwesomeModule,
    TimelineComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly translationService = inject(TranslationService);

  readonly t = this.translationService.t;
}
