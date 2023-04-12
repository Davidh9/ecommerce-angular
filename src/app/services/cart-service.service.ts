import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartList = new BehaviorSubject<any>('');
  private device = new BehaviorSubject<any>('');
  constructor() { }

  getCartList(): Observable<any> {
    return this.cartList.asObservable();
  }

  setItem(item: any): void {
    this.cartList.next(item);
  }
  getDevice(): Observable<any> {
    return this.device.asObservable();
  }

  setDevice(item: any): void {
    this.device.next(item);
  }


}
