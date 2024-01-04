import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormTransladoComponent } from "./components/form-translado/form-translado.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { TransladoComponent } from "./translado.component";

@NgModule({
    declarations: [TransladoComponent, FormTransladoComponent],
    imports: [
      CommonModule,
      AppRoutingModule
    ],
  })
  export class TransladoModule {}