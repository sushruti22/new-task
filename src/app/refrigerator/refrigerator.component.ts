import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css']
})
export class RefrigeratorComponent implements OnInit {
refrigerators: any[]=[];
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.refrigerators = this.dataApi.getAllRefrigerators();
    console.log(this.dataApi.getRefrigeratorById(1));
  }


}