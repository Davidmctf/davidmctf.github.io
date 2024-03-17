import { Injectable, inject } from '@angular/core';
import { ValidateService } from './validate.service';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  readonly #validate = inject(ValidateService);
  #UserAgent: string = '';

  set UserAgent(UserAgent: string) {
    this.#UserAgent = UserAgent;
  }

  get UserAgent(): string {
    return this.#UserAgent;
  }

  public isMobile(): boolean{
    const getNavigator : any = {
      Android: () => this.UserAgent.match(/android/i),
      BlackBerry: () => this.UserAgent.match(/blackberry/i),
      iOS: () => this.UserAgent.match(/iphone|ipad|ipod/i),
      Opera: () => this.UserAgent.match(/opera mini/i),
      Windows: () => this.UserAgent.match(/iemobile/i),
      any: () => (getNavigator.Android() || getNavigator.BlackBerry() || getNavigator.iOS() || getNavigator.Opera() || getNavigator.Windows())
    }
    return this.#validate.isValid(getNavigator.any()) && getNavigator.any() !== false;
  }

  public sortArrayByKey(array: any[], key: string, order: 'asc' | 'desc' = 'asc', numeric: boolean = false) {
    return array.sort((a, b) => {
      const x = numeric ? parseFloat(a[key]) : a[key];
      const y = numeric ? parseFloat(b[key]) : b[key];
      if (order === 'asc') {
        return x < y ? -1 : x > y ? 1 : 0;
      } else {
        return x > y ? -1 : x < y ? 1 : 0;
      }
    });
  }
}
