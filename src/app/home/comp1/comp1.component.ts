import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

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
