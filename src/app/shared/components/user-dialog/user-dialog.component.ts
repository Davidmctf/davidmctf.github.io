import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { UserService } from '../../services';
import { User } from '../../models';
import { Subject, takeUntil, throwError } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ModalModule, FontAwesomeModule],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.css',
})
export class UserDialogComponent implements OnInit, OnDestroy {
  @Input({ required: true }) userid!: number;
  @Input() buttonlabel: string = '';
  @Input() buttonclass: string = '';

  @ViewChild('myModal', { static: false }) myModal!: ModalDirective;

  private onDestroy$ = new Subject<void>();
  private usersService = inject(UserService);

  public user = signal<User | undefined>(undefined);
  public titleModal = computed(
    () =>
      'Información del usuario' + (this.user() ? ` ${this.user()!.name}` : ''),
  );

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public toggleModal(action: 'show' | 'hide'): void {
    switch (action) {
      case 'show':
        this.myModal.show();
        this.usersService
          .getUserById(this.userid)
          .pipe(takeUntil(this.onDestroy$))
          .subscribe({
            next: (response) => this.user.set(response),
            error: (error: Error) => throwError(() => error),
            complete: () => {},
          });
        break;
      case 'hide':
        this.myModal.hide();
        break;
    }
  }
}
