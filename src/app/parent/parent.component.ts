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

  productSelected: boolean = false;
  selectedProduct: string = '';
  addedProduct: any;

  onSelectProduct(product:string) {
    this.productSelected = true;
    this.selectedProduct = product;
  }

  onAddProduct(){
    this.addedProduct = this.selectedProduct;
  }

}
