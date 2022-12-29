import { Component, OnInit } from "@angular/core";
import { DataApiService } from "../data-api.service";

@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.css"]
})
export class MobileComponent implements OnInit {
  mobiles: any[] = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.mobiles = this.dataApi.getAllMobiles();
    console.log(this.dataApi.getMobileById(1))
  }
}
