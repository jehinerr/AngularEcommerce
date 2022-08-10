import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { FakeApiService } from '../../shared/services/fake-api/fake-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any;
  constructor(
    private fakeApi: FakeApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fakeApi.getProductList().subscribe((res) => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
