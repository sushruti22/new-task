import { Component, Inject } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";
import { StarRatingColor } from "./star-rating/star-rating.component";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  constructor() {}
  mobile() {
    // this.mobiles.display()
  }

  clock() {}
  onRatingChanged(rating: number){
    console.log(rating);
    this.rating = rating;
  }
}
