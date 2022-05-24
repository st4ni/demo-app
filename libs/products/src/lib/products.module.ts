import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductsEffects } from './+state/products.effects';
import * as fromProducts from './+state/products.reducer';
import { ProductsComponent } from './containers/products/products.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { MaterialModule } from '@demo-app/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProductsComponent },
    ]),
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.reducer,
      { initialState: fromProducts.initialState }
    ),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  declarations: [ProductsComponent, ProductListComponent],
})
export class ProductsModule {}
