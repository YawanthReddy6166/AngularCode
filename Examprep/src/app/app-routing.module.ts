import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { RetriveDataComponent } from './Employee/retrive-data/retrive-data.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'data',component:RetriveDataComponent},
  {path:'',redirectTo:'src/app/app.component.html',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
