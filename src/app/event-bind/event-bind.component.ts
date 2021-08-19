import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickMessage: string = "";

  onAddToCart(){    
    this.clickMessage = 'Click event is functional!';
  }

  onInputClick(event){
    console.log(event.target.value);
  }

  productBuy: string = "";
  onProduct(event) {
    this.productBuy = "Product of type : " + event.target.value +" is sold !";
    console.log("Product of type : " + event.target.value +" is sold !");
  }

  getInputInfo(inputInfo) {
    console.log(`input value by template/local variable reference : ${inputInfo.value}`);
  }
}
