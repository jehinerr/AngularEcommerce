import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import * as actions from './cart.actions';

const initialState: Product[] = [];

export const cartReducer = createReducer(
  initialState,
  on(actions.addNewProduct, (state: Product[], { id, title, price, image }) => [
    ...state,
    new Product(id, title, price, image),
  ]),
  on(actions.deleteProductFromCart, (state: Product[], { id }) =>
    state.filter((product: Product) => product.id !== id)
  )
);
