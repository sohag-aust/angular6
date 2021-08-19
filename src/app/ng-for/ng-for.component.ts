import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      id:'Prod-001',
      name:'Laptop',
      img:'https://source.unsplash.com/collection/190727/',
      price: 100
    },
    {
      id:'Prod-002',
      name:'Monitor',
      img:'https://source.unsplash.com/collection/290727/',
      price: 400
    },
    {
      id:'Prod-003',
      name:'Keyboard',
      img:'https://source.unsplash.com/collection/561792/',
      price: 300
    },
    {
      id:'Prod-004',
      name:'Mouse',
      img:'https://source.unsplash.com/collection/490727/',
      price: 200
    }
  ];

  usersName: Array<string> = [];

  onCreateUser(user) {
    this.usersName.push(user.value);
  }

  onRemoveUser() {
    this.usersName.splice(this.usersName.length-1);
  }

  onIndividualUserRemove(removeIndexUser) {
    this.usersName.splice(removeIndexUser,1); // we want to delete 1 user of particular index
  }
}
