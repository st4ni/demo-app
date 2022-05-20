import { Component, OnInit } from '@angular/core';
import { getUser } from '@demo-app/auth'
import { Observable } from 'rxjs';
import { User } from '@demo-app/data-models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'demo-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$ = new Observable<User>();

  constructor(private readonly store: Store) {}

  ngOnInit() {

    this.user$ = this.store.select(getUser);

  }
}
