import { CommonModule } from "@angular/common";
import { SlideshowComponent } from "./components/slideshow/slideshow.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [HomeComponent,SlideshowComponent],
    imports: [
      CommonModule,
      HomeRoutingModule,
      ReactiveFormsModule,
      SharedModule
    ],
  })
  export class HomeModule {}