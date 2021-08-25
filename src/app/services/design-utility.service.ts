import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  contactAlert(serviceName:string) {
    alert(`${serviceName} Service is called using Dependency Injection!`);
  }

  products : any = [
    {name:'Laptop', id:1},
    {name:'Mobile', id:2},
    {name:'KeyBoard', id:3},
    {name:'Monitor', id:4}
  ];
}
