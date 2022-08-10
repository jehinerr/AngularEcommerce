import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { FakeApiService } from '../../shared/services/fake-api/fake-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  constructor(
    private fakeApi: FakeApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fakeApi.getProductList().subscribe((productList: Product[]) => {
      this.productList = productList;
      this.productList.forEach((item: Product) => {
        Object.assign(item, { quantity: 1, total: item.price });
      });
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
