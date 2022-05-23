// import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
// import { createReducer, on, Action } from '@ngrx/store';

// import * as ProductsActions from './products.actions';
// import { ProductsEntity } from './products.models';

// export const PRODUCTS_FEATURE_KEY = 'products';

// export interface State extends EntityState<ProductsEntity> {
//   selectedId?: string | number; // which Products record has been selected
//   loaded: boolean; // has the Products list been loaded
//   error?: string | null; // last known error (if any)
// }

// export interface ProductsPartialState {
//   readonly [PRODUCTS_FEATURE_KEY]: State;
// }

// export const productsAdapter: EntityAdapter<ProductsEntity> =
//   createEntityAdapter<ProductsEntity>();

// export const initialState: State = productsAdapter.getInitialState({
//   // set initial required properties
//   loaded: false,
// });

// const productsReducer = createReducer(
//   initialState,
//   on(ProductsActions.init, (state) => ({
//     ...state,
//     loaded: false,
//     error: null,
//   })),
//   on(ProductsActions.loadProductsSuccess, (state, { products }) =>
//     productsAdapter.setAll(products, { ...state, loaded: true })
//   ),
//   on(ProductsActions.loadProductsFailure, (state, { error }) => ({
//     ...state,
//     error,
//   }))
// );

// export function reducer(state: State | undefined, action: Action) {
//   return productsReducer(state, action);
// }

import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProductsEntity } from './products.models';
import * as ProductsActions from './products.actions';
import { Product } from '@demo-app/data-models';

export const PRODUCTS_FEATURE_KEY = 'products';

/**
 * Interface for the 'Products' data used in
 *  - ProductsState, and
 *  - productsReducer
 */
export interface ProductsData {
  loading: boolean;
  products: Product[];
  error: '';
}

/**
 * Interface to the part of the Store containing ProductsState
 * and other information related to ProductsData.
 */
export interface ProductsState {
  readonly products: ProductsData;
}

export interface State extends EntityState<ProductsEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: State;
}

export const productsAdapter: EntityAdapter<ProductsEntity> = createEntityAdapter<ProductsEntity>();

export const initialState: State = productsAdapter.getInitialState({
  action: ProductsActions,
  loaded: false,
});

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { payload: products }) => ({
    ...state,
    products: products,
    loaded: true,
  })),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return productsReducer(state, action);
}
