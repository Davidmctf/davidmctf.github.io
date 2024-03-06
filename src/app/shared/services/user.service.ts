import { Injectable, computed, inject, signal } from '@angular/core';
import type { StateUserResponse, UserResponse, UserByIdResponse } from '../models/user.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, delay, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly #apiUserUrl: string = "https://reqres.in/api/users";
  readonly #http = inject(HttpClient);

  #state = signal<StateUserResponse>({ users: [], loading: true });
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {}

  public getUsers(): Observable<UserResponse> {
    const url = `${this.#apiUserUrl}`;
    const params = new HttpParams();
    return this.#http.get<UserResponse>(url, { params })
      .pipe(
        delay(1500),
        tap({
          next: (response: UserResponse) => this.#state.set({ loading: false, users: response.data }),
          error: (error: Error) => throwError(() => error),
          complete: () => { }
        }),
        catchError((error: Error) => throwError(() => error))
      );
  }

  public getUserById(id: number): Observable<UserByIdResponse> {
    const url = `${this.#apiUserUrl}/${id}`;
    const params = new HttpParams().set('id', id);
    return this.#http.get<UserByIdResponse>(url, { params }).pipe( delay(1500) );
  }
}
