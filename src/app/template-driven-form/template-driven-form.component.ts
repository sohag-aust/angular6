import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('myForm') form!: NgForm;

  onSubmit() {
    console.log(this.form);
  }

  defaultCourse: string = "Angular";
  username: string = '';
  genders = [
    {
      id:1,
      name: 'Male'
    },
    {
      id:2,
      name: 'Female'
    }
  ];

  defaultGender: string = 'Male';
}
