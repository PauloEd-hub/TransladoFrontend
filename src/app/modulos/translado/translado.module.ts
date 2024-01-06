import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormTransladoComponent } from "./components/form-translado/form-translado.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { TransladoComponent } from "./translado.component";
import { SharedModule } from "src/app/shared/shared.module";
import { TransladoRoutingModule } from "./translado-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [TransladoComponent, FormTransladoComponent],
    imports: [
      CommonModule,
      TransladoRoutingModule,
      ReactiveFormsModule,
      SharedModule
    ],
  })
  export class TransladoModule {}