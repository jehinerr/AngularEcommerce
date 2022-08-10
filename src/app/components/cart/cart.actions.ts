import { createAction, props } from '@ngrx/store';

export const addNewProduct = createAction(
  '[Ecommerce] Add product to cart',
  props<{ id: number; title: string; price: number; image: string }>()
);

export const deleteProductFromCart = createAction(
  '[Ecommerce] Delete product from cart',
  props<{ id: number }>()
);
