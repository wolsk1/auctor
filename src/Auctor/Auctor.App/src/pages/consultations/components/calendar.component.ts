import * as _ from 'lodash';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { TitleService } from '../../../services';

@Component({
  selector: 'vs-calendar',
  template: require('./calendar.component.jade')
})
export class ConViewComponent implements OnInit {

  constructor(
    private titleService: TitleService) {
    this.month = new Date().getMonth();
    this.year = new Date().getFullYear();
  }

  public ngOnInit(): void {
    this.titleService.setTitle('cons-view');
    //var weeks = this.calendarMatrix(this.year, this.month);    
    this.weeks = this.getMatrix(this.year, this.month);
  }

  private month: number;
  private year: number;
  //TODO make day object with month and day in it
  //Maybe a date object
  private weeks: number[][]; 

  private monthDays(month) {
    var today = new Date();

    return new Date(today.getFullYear(), month + 1, 0).getDate();
  }

  private calendarMatrix(year: number, month: number): Array<Array<number>> {
    var weeks = [
      new Array(7),
      new Array(7),
      new Array(7),
      new Array(7),
      new Array(7)
    ];

    var firstDay = this.getDay(year, month, 1);
    var lastDay = this.getDay(year, month, 0);

    weeks[0] = this.fillWeek(1, firstDay - 1);

    return weeks;
  }

  private getDay(year, month, day): number {
    return new Date(year, month, day).getDay();
  }

  private fillWeek(day, dayId = 0): Array<number> {
    var week = new Array(7);

    for (let weekdayId = dayId; weekdayId < week.length; weekdayId++) {
      week[weekdayId] = day;
      day++;
    }

    return week;
  }

  private getMatrix(y, m, mondayFirst: boolean = true) {
    var rows = _.range(0, 6);
    var days = _.range(0, 7);
    var matrix = [];
    var date = new Date(y, m);
    var numDays = new Date(y, m + 1, 0).getDate();
    var dayNum = 1;
    var weekBias = mondayFirst ? 1 : 0;    
    var firstDay = date.getDay() - weekBias;
    
    //if firstDay is 0 then, it should be set to index 6 (sunday)
    if (firstDay < 0 && mondayFirst) {
      firstDay = 6;
    }
    _.each(rows, function (row) {
      var week = [];

      _.each(days, function (day, dayId) {
        if (row == 0) {         

          if (dayId == firstDay) {            
            week.push(dayNum++);
          }
          else if (dayId < firstDay) {
            week.push(-(new Date(y, m, -(date.getDay() - 1 - day)).getDate()))            
          }
          else {
            week.push(dayNum++);
          }
        } else {
          var last = _.last(matrix);
          dayNum = Number(_.last(last)) + day + 1;
          week.push(dayNum <= numDays 
            ? dayNum 
            : -(dayNum - numDays));
        }
      });

      if (!row || week[0] > 1) matrix.push(week);

    });

    return matrix;
  }
}