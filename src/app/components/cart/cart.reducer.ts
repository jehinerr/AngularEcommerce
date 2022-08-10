import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import * as actions from './cart.actions';

const initialState: Product[] = [];

export const cartReducer = createReducer(
  initialState,
  on(actions.getCartItems, (state) => state)
);
