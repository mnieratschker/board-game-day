import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

import * as Rx from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public uid: string = '';
  public players: Rx.Observable<any[]>;

  constructor(private _angularFire: AngularFire) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this._angularFire.auth.login();
  }
}
