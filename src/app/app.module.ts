import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MobileComponent } from "./mobile/mobile.component";
import { DataService } from './data.service';
import { DataApiService } from './data-api.service';
import { SpeakerComponent } from './speaker/speaker.component';
import { ComputeraccComponent } from './computeracc/computeracc.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { AirconditionerComponent } from './airconditioner/airconditioner.component';
import { FootwearComponent } from './footwear/footwear.component';
import { BottomwearComponent } from './bottomwear/bottomwear.component';
import { WinterwearComponent } from './winterwear/winterwear.component';
import { BoyswatchComponent } from './boyswatch/boyswatch.component';
import { EthnicwearComponent } from './ethnicwear/ethnicwear.component';
import { SandalComponent } from './sandal/sandal.component';
import { JwellerryComponent } from './jwellerry/jwellerry.component';
import { WatchComponent } from './watch/watch.component';
import { ClothComponent } from './cloth/cloth.component';
import { BabywootwearComponent } from './babywootwear/babywootwear.component';
import { ToyComponent } from './toy/toy.component';
import { SofaComponent } from './sofa/sofa.component';
import { BedComponent } from './bed/bed.component';
import { ClockComponent } from './clock/clock.component';
import { SportsComponent } from './sports/sports.component';
import { BookComponent } from './book/book.component';
import { StarRatingComponent } from './star-rating/star-rating.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MobileComponent,
    SpeakerComponent,
    ComputeraccComponent,
    WashingmachineComponent,
    RefrigeratorComponent,
    AirconditionerComponent,
    FootwearComponent,
    BottomwearComponent,
    WinterwearComponent,
    BoyswatchComponent,
    EthnicwearComponent,
    SandalComponent,
    JwellerryComponent,
    WatchComponent,
    ClothComponent,
    BabywootwearComponent,
    ToyComponent,
    SofaComponent,
    BedComponent,
    ClockComponent,
    SportsComponent,
    BookComponent,
    StarRatingComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataService, DataApiService]
})
export class AppModule {}
