import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CarrosComponent } from "./pages/carros/carros.component";

import { FormDestinoComponent } from "./components/form-destino/form-destino.component";
import { FormVeiculosComponent } from "./components/form-veiculos/form-veiculos.component";
import { TopbarComponent } from "./components/topbar/topbar.component";


@NgModule({
    declarations: [
    CarrosComponent,
    FormDestinoComponent,
    TopbarComponent,
    FormVeiculosComponent,
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
      
    ],

    providers: []
  })

export class SharedModule{}