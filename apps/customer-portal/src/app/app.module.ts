import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, authRoutes } from '@demo-app/auth';
import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@demo-app/layout';
import { AuthGuard } from '@demo-app/auth';

const Routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'auth', children: authRoutes },
  {
    path: 'products',
    loadChildren: () =>
      import('@demo-app/products').then((module) => module.ProductsModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes, { initialNavigation: 'enabledBlocking' }),
    AuthModule,
    LayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
