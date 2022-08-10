import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  productList: any = [];
  productsAmount = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.cartService.getProductData().subscribe((res) => {
      this.productList = res;
      this.productsAmount = this.cartService.getTotalAmount();
    });
  }

  removeProduct(product: any) {
    this.cartService.removeCartData(product);
  }

  removeAllProducts() {
    this.cartService.removeAllCart();
  }
}
