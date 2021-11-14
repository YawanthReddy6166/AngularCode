import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/ApiService/apiservice.service';
@Component({
  selector: 'app-retrive-data',
  templateUrl: './retrive-data.component.html',
  styleUrls: ['./retrive-data.component.css'],
  providers:[ApiserviceService]
})
export class RetriveDataComponent implements OnInit {

  public Data:string[]=[];
  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data=>
      this.Data=data);
      console.log(this.Data[0]);
  }

}
