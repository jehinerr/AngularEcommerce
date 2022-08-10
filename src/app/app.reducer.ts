import { ActionReducerMap } from '@ngrx/store';
import { cartReducer } from './components/cart/cart.reducer';
import { producsReducer } from './components/products/products.reducer';
import { Product } from './shared/models/product.model';

export interface AppState {
  products: Product[];
  cart: Product[];
}

export const appReducers: ActionReducerMap<AppState> = {
  products: producsReducer,
  cart: cartReducer,
};
