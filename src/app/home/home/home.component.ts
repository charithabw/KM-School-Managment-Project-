import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dateTime: Date | undefined

  constructor() { }

  ngOnInit(): void {
    this.dateTime = new Date();
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    });
  }

}
