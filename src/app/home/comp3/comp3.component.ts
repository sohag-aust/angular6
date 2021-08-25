import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private _designService: DesignUtilityService) { 
    this._designService.userName.subscribe((uName) => {
      this.userName = uName;
    })
  }

  ngOnInit(): void {
  }

  userName: string='Shohag';

  updateUserName(uName) {
    // this.userName = uName.value;
    this._designService.userName.next(uName.value);
  }
}
