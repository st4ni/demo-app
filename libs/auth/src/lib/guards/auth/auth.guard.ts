import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getUser } from '../../+state/auth.selectors';
import { AuthState } from '../../+state/auth.reducer';
import { Store, select } from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) {}
  canActivate(): Observable<boolean> {
    return this.store.select(getUser).pipe(
      map((user) => {
        console.log('user', user);
        if (user) {
          console.log(' i have a user');

          return true;
        } else {
          console.log('I do not have a auser');

          this.router.navigate([`/auth/login`]);
          return false;
        }
      })
    );
  }
}
