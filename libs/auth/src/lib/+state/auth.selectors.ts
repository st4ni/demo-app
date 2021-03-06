import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState }  from './auth.reducer';
  // , State, authAdapter } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const getUser = createSelector(getAuthState, state => state.user);


// const { selectAll, selectEntities } = authAdapter.getSelectors();

// export const getAuthLoaded = createSelector(
//   getAuthState,
//   (state: State) => state.loaded
// );

// export const getAuthError = createSelector(
//   getAuthState,
//   (state: State) => state.error
// );

// export const getAllAuth = createSelector(getAuthState, (state: State) =>
//   selectAll(state)
// );

// export const getAuthEntities = createSelector(getAuthState, (state: State) =>
//   selectEntities(state)
// );

// export const getSelectedId = createSelector(
//   getAuthState,
//   (state: State) => state.selectedId
// );

// export const getSelected = createSelector(
//   getAuthEntities,
//   getSelectedId,
//   (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
// );
