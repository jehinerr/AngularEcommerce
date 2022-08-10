import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Product } from 'src/app/shared/models/product.model';
import { deleteProductFromCart } from '../cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  productList: Product[] = [];

  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => {
      this.productList = state.cart;
    });
  }

  ngOnInit(): void {}

  removeProduct(product: Product) {
    this.store.dispatch(deleteProductFromCart({ id: product.id }));
  }
}
