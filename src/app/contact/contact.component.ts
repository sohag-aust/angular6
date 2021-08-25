import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../app/services/contact.service';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _utilityService:DesignUtilityService) { }

  products: any = {};

  ngOnInit(): void {
    this.products = this._utilityService.products;
  }

  // service call without dependency injection
  btnClick(serviceName:string) {
    const contactService = new ContactService();
    contactService.contactAlert(serviceName);
  }

  btnClickWithDependencyInjection(serviceName:string) {
    this._utilityService.contactAlert(serviceName);
  }
}
