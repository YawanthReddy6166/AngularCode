import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { RetriveDataComponent } from './Employee/retrive-data/retrive-data.component';
import { ApiserviceService } from './services/ApiService/apiservice.service';
import { EmployeeService } from './services/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RetriveDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiserviceService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
