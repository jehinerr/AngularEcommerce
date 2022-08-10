import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Product } from 'src/app/shared/models/product.model';
import { FakeApiService } from '../../shared/services/fake-api/fake-api.service';
import * as carActions from '../cart/cart.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  constructor(
    private fakeApi: FakeApiService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.fakeApi.getProductList().subscribe((productList: Product[]) => {
      this.productList = productList.slice(0, 8);
      this.productList.forEach((item: Product) => {
        Object.assign(item, { quantity: 1, total: item.price });
      });
    });
  }

  addToCart(product: Product) {
    this.store.dispatch(
      carActions.addNewProduct({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
  }
}
