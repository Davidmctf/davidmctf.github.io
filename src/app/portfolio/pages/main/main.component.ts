import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from '../../../shared/layout';

@Component({
  selector: 'app-main',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LayoutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
