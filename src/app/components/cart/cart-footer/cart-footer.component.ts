import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.css'],
})
export class CartFooterComponent implements OnInit {
  productList: Product[] = [];
  totalAmount: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.productList = state.cart;
      this.totalAmount = this.getTotalAmount();
    });
  }

  getTotalAmount(): number {
    let totalAmount = 0;
    this.productList.map((product: Product) => {
      totalAmount += product.price;
    });
    return totalAmount;
  }
}
