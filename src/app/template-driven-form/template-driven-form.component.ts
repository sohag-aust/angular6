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

  submitted: boolean = false;
  formData = {
    username:'',
    email:'',
    course:'',
    gender:''
  };

  onSubmit() {
    console.log(this.form);
    this.submitted = true;

    // setting formData values
    this.formData.username = this.form.value.userDetails.username;
    this.formData.email = this.form.value.userDetails.email;
    this.formData.course = this.form.value.course;
    this.formData.gender = this.form.value.gender;
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
