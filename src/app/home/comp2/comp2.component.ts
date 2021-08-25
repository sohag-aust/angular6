import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private _designService: DesignUtilityService) { 
    this._designService.userName.subscribe((uName) => {
      this.userName = uName;
    })
  }

  ngOnInit(): void {
  }

  userName;

  updateUserName(uName) {
    // this.userName = uName.value;
    this._designService.userName.next(uName.value);
  }
}
