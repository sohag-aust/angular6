import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-view-child',
  templateUrl: './comp-view-child.component.html',
  styleUrls: ['./comp-view-child.component.css']
})
export class CompViewChildComponent implements OnInit {

  userName: string = "Shohag";
  @Input() inputValueName: string = "";

  constructor() { }

  ngOnInit(): void {
    console.log('comp-view-chil-component is called !!');
  }

  setAlert(alertName: string) {
    alert(alertName);
  }

  updateUserName(inputValue: any) {
    this.userName = inputValue.value;
    this.setAlert(this.userName);
  }

  updateUserNameFromParent(newValue: string) {
    this.userName = newValue;
    this.setAlert(newValue);
  }

  getInputValue() {
    console.log(this.inputValueName);
  }

}
