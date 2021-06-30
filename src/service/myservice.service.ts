import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  //class work
  showTodayDate() {
    console.log("showTodayDate");
    let ndate = new Date();
    return ndate;
  }

  //clock
  showData() {
    let myDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    return myDate;
  }

}
