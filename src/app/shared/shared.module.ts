import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CarrosComponent } from "./pages/carros/carros.component";

import { FormDestinoComponent } from "./components/form-destino/form-destino.component";
import { FormVeiculosComponent } from "./components/form-veiculos/form-veiculos.component";
import { TopbarComponent } from "./components/topbar/topbar.component";
import { CardVehiclesComponent } from "./components/card-vehicles/card-vehicles.component";
import { DestinoComponent } from "../modulos/destino/destino.component";


@NgModule({
    declarations: [
    CarrosComponent,
    FormDestinoComponent,
    TopbarComponent,
    FormVeiculosComponent,
    CardVehiclesComponent
        ],
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    exports: [

      CarrosComponent,
      FormDestinoComponent,
      TopbarComponent,
      FormVeiculosComponent,
      CardVehiclesComponent,
      
    ],

    providers: []
  })

export class SharedModule{}