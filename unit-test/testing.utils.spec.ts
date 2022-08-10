import { ComponentFixture } from '@angular/core/testing';
import { CartItemComponent } from 'src/app/components/cart/cart-item/cart-item.component';

export class EcommcerceTestUtils {
  static readonly dataTest = {
    deleteButton: '[data-test="cart-item__delete"]',
  };

  static getDeleteButton(
    fixture: ComponentFixture<CartItemComponent>
  ): HTMLElement {
    return fixture.nativeElement.querySelector(
      EcommcerceTestUtils.dataTest.deleteButton
    );
  }
}
