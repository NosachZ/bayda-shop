import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private total: number = 0;

  constructor() { }

  getTotal(): number {
    return this.total;
  }
}
