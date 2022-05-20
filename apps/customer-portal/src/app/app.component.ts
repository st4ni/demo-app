import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '@demo-app/auth';
import * as AuthActions from '@demo-app/auth';

@Component({
  selector: 'demo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<AuthState>) {
    const localSt = localStorage.getItem('user');
    console.log('localstorage', localStorage.getItem('user'));
    if (localSt) {
      const user = JSON.parse(localStorage.getItem('user') ?? '');
      this.store.dispatch(AuthActions.loginSuccess(user));
    }
    // const user = JSON.parse(localStorage.getItem('user') ?? '');
    // if (user) {
    //   this.store.dispatch(AuthActions.loginSuccess(user));
    // }
  }
}
