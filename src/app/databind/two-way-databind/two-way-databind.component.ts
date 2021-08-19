import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-databind',
  templateUrl: './two-way-databind.component.html',
  styleUrls: ['./two-way-databind.component.css']
})
export class TwoWayDatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName: string = "Shohag";
}
