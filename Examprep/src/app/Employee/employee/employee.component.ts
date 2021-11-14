import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Istudent } from 'src/app/student';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

   public student: Istudent[] = [];
  constructor(private services:EmployeeService) { }

  ngOnInit(): void {
    this.services.getStudents().subscribe(
      data => this.student=data);
      console.log(this.student);
  }

}
