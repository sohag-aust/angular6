import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(serviceName) {
    const contactService = new ContactService();
    contactService.contactAlert(serviceName);
  }

}
