import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _designService: DesignUtilityService) { 
    this._designService.userName.subscribe((uName) => {
      this.userName = uName;
    })
  }

  ngOnInit(): void {
  }

  products = [
    {name: 'Laptop'},
    {name: 'Mobile'},
    {name: 'Tv'},
    {name: 'Monitor'}
  ];

  statusOnline: boolean = true;

  userName: string='Shohag';
}
