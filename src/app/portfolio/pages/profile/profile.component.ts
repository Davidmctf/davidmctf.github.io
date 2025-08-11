import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Subject, takeUntil } from 'rxjs';
import { UserDialogComponent } from '../../../shared/components';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, UserDialogComponent, TabsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();
  public userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUsers().pipe(takeUntil(this.onDestroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
