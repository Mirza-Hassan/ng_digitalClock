import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../../service/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myservice: MyserviceService) { }

  todaydate: string | boolean | undefined;

  ngOnInit(): void {
    setInterval(() => {
      this.todaydate = this.myservice.showData();
    }, 1000) // Updates the time every second.

  }

}
