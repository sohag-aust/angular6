import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

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
