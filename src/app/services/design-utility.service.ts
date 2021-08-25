import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http: HttpClient) { }

  contactAlert(serviceName:string) {
    alert(`${serviceName} Service is called using Dependency Injection!`);
  }

  products : any = [
    {name:'Laptop', id:1},
    {name:'Mobile', id:2},
    {name:'KeyBoard', id:3},
    {name:'Monitor', id:4}
  ];

  url: string = 'https://jsonplaceholder.typicode.com/users';
  product():Observable<any>{
    return this.http.get(this.url);
  }

  // subject & behavior subject
  userName = new Subject<any>();
}
