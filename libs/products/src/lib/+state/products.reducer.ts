import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ProductsActions from './products.actions';
import { Product } from '@demo-app/data-models';

export const PRODUCTS_FEATURE_KEY = 'products';

/**
 * Interface for the 'Products' data used in
 *  - ProductsState, and
 *  - productsReducer
 */
export interface ProductsData extends EntityState<Product> {
  selectedProductId?: string | number;
  loading: boolean;
  error?: string | null;
}

/**
 * Interface to the part of the Store containing ProductsState
 * and other information related to ProductsData.
 */
export interface ProductsState {
  readonly products: ProductsData;
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const productsAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

export const initialState: ProductsData = productsAdapter.getInitialState({
  error: '',
  selectedProductId: '',
  loading: false,
});

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { payload: products }) =>
    productsAdapter.setAll(products, state)
  ),
  on(ProductsActions.loadProductsFailure, (state, { error }) =>
    productsAdapter.removeAll({
      ...state,
      error,
    })
  )
);

export function reducer(state: ProductsData | undefined, action: Action) {
  return productsReducer(state, action);
}
export const getSelectedProductId = (state: ProductsData) =>
  state.selectedProductId;

export const {
  // select the array of user ids
  selectIds: selectProductIds,

  // select the dictionary of Products entities
  selectEntities: selectProductEntities,

  // select the array of Products
  selectAll: selectAllProducts,

  // select the total Products count
  selectTotal: selectProductsTotal
} = productsAdapter.getSelectors();
