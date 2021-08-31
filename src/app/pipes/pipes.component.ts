import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pipeValue: string = 'Initial pipe value';

  pipeDate: Date = new Date();

  namePipeArray: Array<string> = [
    'Mashrafee',
    'Tamim Iqbal',
    'Mushfiq',
    'Sakib',
    'Mahmudullah Riyad',
    'Mustafizur Rahman',
    'Taskin Ahmed'
  ];

  productPipeArray = [
    {
      id:1,
      pname: 'Laptop (HP)',
      price: 70000,
      availability: 'Available'
    },
    {
      id:2,
      pname: 'Monitor (XIOMI)',
      price: 12000,
      availability: 'Available'
    },
    {
      id:3,
      pname: 'KeyBoard',
      price: 2000,
      availability: 'Not Available'
    },
    {
      id:4,
      pname: 'Mouse',
      price: 3000,
      availability: 'Available'
    },
    {
      id:5,
      pname: 'Speaker',
      price: 6000,
      availability: 'Available'
    },
    {
      id:6,
      pname: 'Motherboard',
      price: 5500,
      availability: 'Not Available'
    },
    {
      id:7,
      pname: 'RAM',
      price: 3300,
      availability: 'Available'
    },
    {
      id:8,
      pname: 'SSD',
      price: 4500,
      availability: 'Not Available'
    },
    {
      id:9,
      pname: 'Laptop (DELL)',
      price: 170000,
      availability: 'Not Available'
    },
    {
      id:10,
      pname: 'Monitor (Samsung)',
      price: 27000,
      availability: 'Not Available'
    },
  ];

  nameSearch: string='';
}
