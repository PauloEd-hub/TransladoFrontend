import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CarrosComponent } from "./pages/carros/carros.component";
import { HomeComponent } from "./pages/home/home.component";
import { FormDestinoComponent } from "./components/form-destino/form-destino.component";
import { FormVeiculosComponent } from "./components/form-veiculos/form-veiculos.component";
import { SlideshowComponent } from "./components/slideshow/slideshow.component";
import { TopbarComponent } from "./components/topbar/topbar.component";


@NgModule({
    declarations: [
    HomeComponent,
    CarrosComponent,
    FormDestinoComponent,
    TopbarComponent,
    FormVeiculosComponent,
    SlideshowComponent,
    ],
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    exports: [
      HomeComponent,
      CarrosComponent,
      FormDestinoComponent,
      TopbarComponent,
      FormVeiculosComponent,
      SlideshowComponent,
    ],

    providers: []
  })

export class SharedModule{}