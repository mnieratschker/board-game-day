import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routerModule } from './app.routing';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { LoginComponent } from './login/login.component';

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};
const myFirebaseConfig = {
  apiKey: 'AIzaSyAamZhKbLsdtf2MNKJ8mgD1cVKr69Y0ygE',
  authDomain: 'board-game-day.firebaseapp.com',
  databaseURL: 'https://board-game-day.firebaseio.com',
  storageBucket: ''
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    MaterialModule.forRoot(),
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
