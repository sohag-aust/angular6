import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {CompViewChildComponent} from './comp-view-child/comp-view-child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  userName: string = "shohag";
  @ViewChild('box') myBox!: ElementRef; // ! as a postfix to the variable name to avoid : property has no initializer and is not definitely assigned in the constructor. viewchild

  @ViewChild(CompViewChildComponent) childComponent!: CompViewChildComponent; 

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() : any {
    console.log('\nngAfterViewInit is called !!');
    console.log(this.myBox);

    this.myBox.nativeElement.style.backgroundColor = 'pink';
    this.myBox.nativeElement.classList = "pinkBox";
    // this.myBox.nativeElement.innerHTML = 'This is modified html';

    console.log(this.childComponent);
  }

  changeChildProperty() {
    console.log(this.childComponent.inputValueName);

    this.childComponent.userName = this.childComponent.inputValueName;
    this.userName = this.childComponent.userName;
  }

  callChildMethod() {
    console.log(`input value to be alert : ${this.childComponent.inputValueName}`);
    this.childComponent.updateUserNameFromParent(this.childComponent.inputValueName);
  }

}
