import { ComponentFixture } from '@angular/core/testing';
import { CartItemComponent } from 'src/app/components/cart/cart-item/cart-item.component';
import { ProductsComponent } from 'src/app/components/products/products.component';

export class EcommcerceTestUtils {
  static readonly dataTest = {
    deleteButton: '[data-test="cart-item__delete"]',
    addButton: '[data-test="product-item__add"]',
  };

  static getDeleteButton(
    fixture: ComponentFixture<CartItemComponent>
  ): HTMLElement {
    return fixture.nativeElement.querySelector(
      EcommcerceTestUtils.dataTest.deleteButton
    );
  }

  static getAddButton(
    fixture: ComponentFixture<ProductsComponent>
  ): HTMLElement {
    return fixture.nativeElement.querySelector(
      EcommcerceTestUtils.dataTest.addButton
    );
  }
}
