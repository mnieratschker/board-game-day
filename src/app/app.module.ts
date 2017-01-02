import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAamZhKbLsdtf2MNKJ8mgD1cVKr69Y0ygE',
      authDomain: 'board-game-day.firebaseapp.com',
      databaseURL: 'https://board-game-day.firebaseio.com',
      storageBucket: ''
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
