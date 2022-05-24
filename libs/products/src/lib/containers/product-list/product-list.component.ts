import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products?: Product[];
  @Output() filter = new EventEmitter<string>();

  onFilter(category: string) {
    this.filter.emit(category);
  }
}
