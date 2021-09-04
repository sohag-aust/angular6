import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  all!: number;
  
  @Input()
  male!: number;
  
  @Input()
  female!: number;


  selectedRadioButtonValue: string = "All";

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();


  onRadioButtonSelectionChange(): void {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue) ; // emit method is used to raise the event 
    console.log(this.selectedRadioButtonValue);
  }
}
