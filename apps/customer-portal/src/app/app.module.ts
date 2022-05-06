import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthModule, authRoutes} from '@demo-app/auth';
import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { LayoutModule } from '@demo-app/layout';

const Routes: Route[] = [{ path: 'auth', children: authRoutes }];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes, { initialNavigation: 'enabledBlocking' }),
    AuthModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
