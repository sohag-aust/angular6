import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productSelectedOnParent: boolean = false;
  selectedProductOnParent: string = '';
  addedProduct: any;

  onSelectProduct(product:string) {
    this.productSelectedOnParent = true;
    this.selectedProductOnParent = product;
  }

  // onAddProduct(){
  //   this.addedProduct = this.selectedProduct;
  // }

  onAddedProduct(productFromChild) {
    this.addedProduct = productFromChild;
  }

}
