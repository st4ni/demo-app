import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';
@Component({
  selector: 'demo-app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  @Output()
  submitForm = new EventEmitter<Authenticate>();

  constructor() {}

  ngOnInit(): void {}

  login(authenticate: Authenticate) {
    this.submitForm.emit(authenticate);
  }
}
