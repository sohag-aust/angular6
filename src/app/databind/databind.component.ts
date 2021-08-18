import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynamicName : string = 'Shohag';
  appStatus : boolean = true;
  enable : boolean = true;

  myName() {
    return 'Md.Ashraful Islam ' + this.dynamicName
  }
}
