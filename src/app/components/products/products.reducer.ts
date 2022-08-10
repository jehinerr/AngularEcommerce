import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product.model';
import * as actions from './products.actions';

const initialState: Product[] = [];

export const producsReducer = createReducer(
  initialState,
  on(actions.getProductsList, (state) => state)
);
