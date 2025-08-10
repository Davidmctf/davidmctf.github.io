import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  public isValid(value: any): boolean {
    return (
      value !== undefined && value !== null && value.toString().trim() !== ''
    );
  }

  public isNumber(value: any): boolean {
    return this.isValid(value) && !isNaN(Number(value));
  }

  public isObject(obj: any): boolean {
    return (
      obj !== undefined &&
      obj !== null &&
      Object.getPrototypeOf(obj) === Object.prototype
    );
  }
}
