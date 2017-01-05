import { Component, OnInit } from '@angular/core';

class GameDate {
  name: string;
  date: Date;
  isSelected: boolean;
}

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  dates: GameDate[] = [];
  currentDate: Date;

  constructor() { }

  ngOnInit() {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    let dates = this.createDates(currentDate);
    console.log(dates);
    this.dates = dates.map(date => {
      return <GameDate>{
        date: date,
        name: date.toLocaleDateString(),
        isSelected: false
      };
    });

    this.dates[0].isSelected = true;
  }

  createDates(currentDate: Date): Date[] {
    let date = currentDate;
    console.log(currentDate.getDay());

    let dates: Date[] = [];
    while (date.getDay() !== 4) {
      date.setDate(date.getDate() + 1);
    }

    for (let i = 0; i < 5; i++) {
      let x = new Date();
      x.setHours(0, 0, 0, 0);
      x.setDate(date.getDate() + 7 * i);
      dates.push(x);
    }

    return dates;
  }
}
