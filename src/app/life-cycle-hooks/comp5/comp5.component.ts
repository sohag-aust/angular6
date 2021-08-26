import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit, OnChanges, DoCheck, AfterContentInit, 
                                        AfterContentChecked, AfterViewInit, AfterViewChecked,
                                        OnDestroy {

  constructor() {
    console.log('\nconstructor() : called !!!');
  }

  @Input() myValue: string = "Shohag";

  counter: any;
  num: number = 1;
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('\nngOnChanges() : called !!!');
    console.log(changes);
    console.log(`changes current value : ${changes.myValue.currentValue}`);
    console.log(`changes previous value : ${changes.myValue.previousValue}`);
  }

  ngOnInit(): void {
    console.log('\nngOnInit() : called !!!');

    this.counter = setInterval(()=>{
      this.num = this.num + 1;
      console.log(`Num : ${this.num}`);
    },1000);
  }

  ngDoCheck(): void {
    console.log('\nngDoCheck() : called !!!');
  }

  ngAfterContentInit(): any {
    console.log('\nngAfterContentInit() : called !!!');
  }

  ngAfterContentChecked(): any {
    console.log('\nngAfterContentChecked() : called !!!');
  }

  ngAfterViewInit(): any {
    console.log('\nngAfterViewInit() : called !!!');
  }

  ngAfterViewChecked(): any {
    console.log('\nngAfterViewChecked() : called !!!');
  }

  ngOnDestroy(): any {
    console.log('\nngOnDestroy() : called !!!');
    clearInterval(this.counter); // we need to comment this clearInterval line and see what happens in the console
  }
}
