import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { VeiculosComponent } from "./veiculos.component";
import { RegisterVehicleComponent } from "./components/RegisterVehicle/RegisterVehicle.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { VeiculoRoutingModule } from "./veiculo-routing.module";


@NgModule({
    declarations: [VeiculosComponent,RegisterVehicleComponent, ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      SharedModule,
      VeiculoRoutingModule
    ],
  })
  export class VeiculosModule {}