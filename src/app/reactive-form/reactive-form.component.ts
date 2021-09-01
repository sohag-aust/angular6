import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  myReactiveForm!: FormGroup;

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

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null, Validators.required), // we can set initial value instead of null, i.e:'shohag'
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male')
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm);
  }
}
