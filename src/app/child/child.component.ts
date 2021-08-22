import { Component, Input, OnInit } from '@angular/core';

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
  addedProduct: any;

  onSelectProduct(product:string) {
    this.productSelectedOnChild = true;
    this.selectedProductOnChild = product;
  }

  onAddProduct(){
    this.addedProduct = this.selectedProductOnChild;
  }
}
