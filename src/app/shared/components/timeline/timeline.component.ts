import { Component, inject } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [CarouselModule, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {
  private readonly translationService = inject(TranslationService);

  readonly t = this.translationService.t;
}
