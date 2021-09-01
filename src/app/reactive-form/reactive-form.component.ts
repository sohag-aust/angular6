import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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

  notAllowedNames: any[] = ['Admin', 'Angular'];

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.NAnames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
  }

  formSubmitted: boolean = false;
  addSkillsButtonClicked: boolean = true;
  formData = {
    username:'',
    email:'',
    course:'',
    gender:'',
    skills:[]
  };

  onSubmit() {
    console.log(this.myReactiveForm);
    
    this.formSubmitted = true;

    // setting formData values
    this.formData.username = this.myReactiveForm.value.userDetails.username;
    this.formData.email = this.myReactiveForm.value.userDetails.email;
    this.formData.course = this.myReactiveForm.value.course;
    this.formData.gender = this.myReactiveForm.value.gender;
    this.formData.skills = this.myReactiveForm.value.skills;
  }

  onAddSkills() {
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  NAnames(control: FormControl) {
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'nameIsNotAllowed-404': true}
    }
    return null;
  }
}
