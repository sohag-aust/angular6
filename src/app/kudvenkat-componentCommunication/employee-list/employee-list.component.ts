import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any[];

  selectedEmployeeCountRadioButton: string = "All";
  
  constructor() { 
    this.employees = [
      {empId: 'EMP-101', name:'Shohag', gender: 'Male', annualSalary:'$79242'},
      {empId: 'EMP-102', name:'Mehedi', gender: 'Male', annualSalary:'$87293'},
      {empId: 'EMP-103', name:'Mary', gender: 'Female', annualSalary:'$59524'},
      {empId: 'EMP-104', name:'Nitol', gender: 'Female', annualSalary:'$67023'},
      {empId: 'EMP-105', name:'Ashik', gender: 'Male', annualSalary:'$92034'}
    ];
  }

  ngOnInit(): void {
  }

  getTotalEmployeesCount(): number{
    return this.employees.length;
  }

  getTotalMaleEmployeesCount(): number {
    return this.employees.filter((employee) => employee.gender === 'Male').length;
  }

  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter((employee) => employee.gender === 'Female').length;
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
}
