import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartDataList: any = [];
  productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  getProductData() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartDataList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log('addToCart', this.cartDataList);
  }

  getTotalAmount(): number {
    let total = 0;
    this.cartDataList.map((a: any) => {
      total += a.total;
    });
    return total;
  }

  removeCartData(product: any) {
    this.cartDataList.map((a: any, index: number) => {
      if (product.id === a.id) this.cartDataList.splice(index, 1);
    });
  }

  removeAllCart() {
    this.cartDataList = [];
    this.productList.next(this.cartDataList);
  }
}
