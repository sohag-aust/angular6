import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value: string = '';
  componentExist: boolean = true;

  submitValue(val: any) {
    this.value = val.value;
  }

  destroy() {
    this.componentExist = false;
  }
}
