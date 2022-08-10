import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Product } from 'src/app/shared/models/product.model';
import { EcommcerceTestUtils } from 'unit-test/testing.utils.spec';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductsComponent],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#addProduct', () => {
    it(`Should add product item when the button is clicked`, () => {
      // Arrange
      const mockedProduct: Product = {
        id: 1,
        title: 'Test',
        price: 190,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      };

      component.productList = [mockedProduct];

      const deleteButtonSpy = spyOn(component, 'addToCart');
      fixture.detectChanges();

      // Act
      const deleteButton: HTMLElement =
        EcommcerceTestUtils.getAddButton(fixture);
      deleteButton.click();

      // Assert
      expect(deleteButtonSpy).toHaveBeenCalled();
    });
  });
});
