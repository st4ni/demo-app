
// import * as ProductsActions from './products.actions';
// import * as ProductsFeature from './products.reducer';

// @Injectable()
// export class ProductsEffects {
//   init$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ProductsActions.init),
//       fetch({
//         run: (action) => {
//           // Your custom service 'load' logic goes here. For now just return a success action...
//           return ProductsActions.loadProductsSuccess({ products: [] });
//         },
//         onError: (action, error) => {
//           console.error('Error', error);
//           return ProductsActions.loadProductsFailure({ error });
//         },
//       })
//     )
//   );

//   constructor(private readonly actions$: Actions) {}
// }
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from './../services/products/products.service';
import { ProductsActionTypes } from './../+state/products.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as ProductActions from './../+state/products.actions';
import { of } from 'rxjs';
import { Product } from '@demo-app/data-models';

@Injectable()
export class ProductsEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProducts),
    mergeMap(() =>
      this.productService.getProducts().pipe(
        map(
          (products: Product[]) =>
            ProductActions.loadProductsSuccess({ payload: products })
        ),
        catchError((error) => of(ProductActions.loadProductsFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
