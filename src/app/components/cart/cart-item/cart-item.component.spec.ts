import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Product } from 'src/app/shared/models/product.model';
import { EcommcerceTestUtils } from 'unit-test/testing.utils.spec';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#deleteProduct', () => {
    it(`Should delete product item when the button is clicked`, () => {
      // Arrange
      const mockedProduct: Product = {
        id: 1,
        title: 'Test',
        price: 190,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      };

      component.productList = [mockedProduct];

      const deleteButtonSpy = spyOn(component, 'deleteProduct');
      fixture.detectChanges();

      // Act
      const deleteButton: HTMLElement =
        EcommcerceTestUtils.getDeleteButton(fixture);
      deleteButton.click();

      // Assert
      expect(deleteButtonSpy).toHaveBeenCalled();
    });
  });
});
