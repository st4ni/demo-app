import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { AuthActionTypes } from './auth.actions';
import * as AuthActions from './auth.actions';
import { AuthService } from './../services/auth/auth.service';
import { of } from 'rxjs';
import { concatMap, catchError } from 'rxjs/operators';
@Injectable()
export class AuthEffects {

  login2$ = createEffect( () =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap( (action) => this.authService.login(action.payload)),
      map(user => AuthActions.loginSuccess({ payload: user} )),
      catchError( error => of(AuthActions.loginFailure({ payload: error}))
    )
  ));

  // login$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActionTypes.Login),
  //     fetch({
  //       run: (action) => {
  //         return this.authService.login(action);
  //       },
  //       onError: (action, error) => {
  //         return AuthActions.loginFailure(error);
  //       },
  //     })
  //   )
  // );

  navigateToProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.LoginSuccess),
        map((action: AuthActionTypes.LoginSuccess) => action),
        tap(() => this.router.navigate([`/products`]))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
