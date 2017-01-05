import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn: boolean;
  name: string;

  constructor(private _angularFire: AngularFire) { }

  ngOnInit() {
    this._angularFire.auth.subscribe(auth => {
      this.loggedIn = auth.auth.uid !== undefined;
      this.name = auth.auth.displayName;
    });
  }

  logout() {
    this._angularFire.auth.logout();
  }
}
