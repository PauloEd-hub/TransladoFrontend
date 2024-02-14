import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { TransladoComponent } from "./translado.component";
import { SharedModule } from "src/app/shared/shared.module";
import { TransladoRoutingModule } from "./translado-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CreateTransladoComponent } from "./components/create-translado/create-translado.component";

@NgModule({
    declarations: [TransladoComponent, CreateTransladoComponent],
    imports: [
      CommonModule,
      TransladoRoutingModule,
      ReactiveFormsModule,
      SharedModule
    ],
  })
  export class TransladoModule {}