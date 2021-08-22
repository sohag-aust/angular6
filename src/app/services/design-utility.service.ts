import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  contactAlert(serviceName:string) {
    alert(`${serviceName} Service is called using Dependency Injection!`);
  }
}
