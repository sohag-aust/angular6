import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-comp-view-child',
  templateUrl: './comp-view-child.component.html',
  styleUrls: ['./comp-view-child.component.css']
})
export class CompViewChildComponent implements OnInit, AfterContentInit {

  userName: string = "Shohag";
  @Input() inputValueName: string = "";

  @ContentChild('childContent') childParagraph!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log('comp-view-chil-component is called !!');
  }

  ngAfterContentInit(): any {
    console.log('ngAfterContentInit is called !!');
    console.log(this.childParagraph);

    this.renderer.setStyle(this.childParagraph.nativeElement, 'backgroundColor', 'violet');
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

  addText() {
    const text = this.renderer.createText('\nAngular is awesome');
    this.renderer.appendChild(this.childParagraph.nativeElement, text);
  }

}
