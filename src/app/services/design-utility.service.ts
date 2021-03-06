import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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
  // userName = new Subject<any>();
  
  // same as subject, but in behavior subject we can set initial value, so that in each component we don't need to set initial value
  userName = new BehaviorSubject('Shohag');
}
