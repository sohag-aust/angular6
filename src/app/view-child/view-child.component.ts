import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import {CompViewChildComponent} from './comp-view-child/comp-view-child.component';

// added $ for jQuery
declare var $: any;

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  userName: string = "shohag";
  @ViewChild('box') myBox!: ElementRef; // ! as a postfix to the variable name to avoid : property has no initializer and is not definitely assigned in the constructor. viewchild

  @ViewChild(CompViewChildComponent) childComponent!: CompViewChildComponent; 

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    $(window).scroll(function() {
      console.log('scrolling using jQuery');
    })
  }

  ngAfterViewInit() : any {
    console.log('\nngAfterViewInit is called !!');
    console.log(this.myBox);

    /** ViewChild option starts */
    // this.myBox.nativeElement.style.backgroundColor = 'pink';
    // this.myBox.nativeElement.classList = "pinkBox";
    // this.myBox.nativeElement.innerHTML = 'This is modified html';

    /** ViewChild option ends */

    /** Renderer2 option starts */
    this.renderer.setStyle(this.myBox.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.myBox.nativeElement, 'color', 'red');
    this.renderer.addClass(this.myBox.nativeElement, 'rendererClass');
    this.renderer.setAttribute(this.myBox.nativeElement, 'title', 'Renderer Box');

    /** Renderer2 option ends */

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


  // HostListener added for click function
  // @HostListener('click') myClick() { // here click is the event of HostListener
  //   alert('Clicked using HostListener !!');
  // }

  // HostListener added for scroll function
  @HostListener('window: scroll', ['$event']) myScroll() {
    console.log('== Scrolling using HostListener !!');
  }
}
