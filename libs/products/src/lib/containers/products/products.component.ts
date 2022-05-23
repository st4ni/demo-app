import { Component, OnInit } from '@angular/core';
import { ProductsState } from './../../+state/products.reducer';
import { Store, select } from '@ngrx/store';
import * as  productsQuery  from './../../+state/products.selectors';
import { Observable } from 'rxjs';
import { Product } from '@demo-app/data-models';
import { loadProducts } from './../../+state/products.actions';

@Component({
  selector: 'demo-app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$?: Observable<any[]>;

  constructor(private store: Store<ProductsState>) {}

  ngOnInit() {
    this.store.dispatch(loadProducts());
    this.products$ = this.store.pipe(select(productsQuery.getAllProducts));
  }
}
