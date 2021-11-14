import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Istudent } from '../student';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string="/assets/Data/Students.json";
  constructor(private http:HttpClient) { }

  getStudents():Observable<Istudent[]>{

    return this.http.get<Istudent[]>(this.url);
  }
}
