import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myStyle1: string = '15px';
  hasStyle: boolean = false;

  mltClasses = {
    class1:true,
    class2:false,
    class3:true,
  };

  mltStyles = {
    'width': '250px',
    'height': '50px',
    'background-color': 'red',
    'border': '10px solid green',
    'font-size': '22px',
    'color': 'white'
  };

}
