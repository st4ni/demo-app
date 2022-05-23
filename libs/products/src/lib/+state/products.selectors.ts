// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import {
//   PRODUCTS_FEATURE_KEY,
//   State,
//   productsAdapter,
// } from './products.reducer';

// // Lookup the 'Products' feature state managed by NgRx
// export const getProductsState =
//   createFeatureSelector<State>(PRODUCTS_FEATURE_KEY);

// const { selectAll, selectEntities } = productsAdapter.getSelectors();

// export const getProductsLoaded = createSelector(
//   getProductsState,
//   (state: State) => state.loaded
// );

// export const getProductsError = createSelector(
//   getProductsState,
//   (state: State) => state.error
// );

// export const getAllProducts = createSelector(getProductsState, (state: State) =>
//   selectAll(state)
// );

// export const getProductsEntities = createSelector(
//   getProductsState,
//   (state: State) => selectEntities(state)
// );

// export const getSelectedId = createSelector(
//   getProductsState,
//   (state: State) => state.selectedId
// );

// export const getSelected = createSelector(
//   getProductsEntities,
//   getSelectedId,
//   (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
// );

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsData } from './products.reducer';

const getProductsState = createFeatureSelector<ProductsData>('products');

const getProducts = createSelector(getProductsState, (state) => state.products);

export const productsQuery = {
  getProducts,
};
