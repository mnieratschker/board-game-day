import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  dates: string[] = [];

  constructor() { }

  ngOnInit() {
    let date = new Date();

    while (date.getDay() !== 4) {
      date.setDate(date.getDate() + 1);
    }

    for (let i = 0; i < 5; i++) {
      this.dates.push(date.toLocaleDateString());
      date.setDate(date.getDate() + 7);
    }
  }
}
