import { createReducer, on, Action } from '@ngrx/store';
// import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AuthActions from './auth.actions';
// import { AuthEntity } from './auth.models';
import { User } from '@demo-app/data-models';

export const AUTH_FEATURE_KEY = 'auth';

//this our real state, for Auth
export interface AuthState {
  // readonly auth: AuthData;
  isLoading: boolean;
  user: User;
  error: string;
  selectedId: string | number;

}

// this below has been added by ngrx schematics
// export interface State extends EntityState<AuthEntity> {
//   selectedId?: string | number;
//   loaded: boolean;
//   error?: string | null;
// }

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

// export const authAdapter: EntityAdapter<AuthEntity> = createEntityAdapter<AuthEntity>();

const intialUser = {
  username: '',
  id: 0,
  country: '',
  token: '',
  role: '',
}

export const initialState: AuthState = {
    isLoading: false,
    error: '',
    user: {
      username: '',
      id: 0,
      country: '',
      token: '',
      role: '',
    },
    selectedId: '',
};

// export const initialState: State = authAdapter.getInitialState({
//   action: AuthActions,
//   loaded: false,
// });


const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, isLoading: true })),
  on(AuthActions.loginSuccess, (state, action) => {
    console.log('action payload::: ', action.payload);
    console.log('state', state);
    return ({
    ...state,
    user: action.payload,
    isLoading: false
  });}),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    user: Object.assign({},intialUser),
    isLoading: false,
    error: action.payload
  }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
