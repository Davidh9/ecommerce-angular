import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartList = new BehaviorSubject<any>('');
  constructor() { }

  getCartList(): Observable<any> {
    return this.cartList.asObservable();
  }

  setItem(item: any): void {
    this.cartList.next(item);
  }

}
