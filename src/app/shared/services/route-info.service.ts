import { Injectable, inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subject, filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteInfoService {
  readonly #router = inject(Router);
  #currentRoute = new Subject<string>();
  public currentRoute$ = this.#currentRoute.asObservable();

  constructor() {}

  setCurrentRoute(): Observable<any> {
    return this.#router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      tap(() => {
        this.#currentRoute.next(this.#router.url);
      }),
    );
  }
}
