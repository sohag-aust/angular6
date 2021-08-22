import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() placeholderText:string = "";

  @Input() productSelectedOnChild: boolean = false;
  @Input() selectedProductOnChild: string = '';
  @Output() addedProduct = new EventEmitter<any>();

  onSelectProduct(product:string) {
    this.productSelectedOnChild = true;
    this.selectedProductOnChild = product;
  }

  onAddProduct(){
    this.addedProduct.emit(this.selectedProductOnChild);
  }
}
