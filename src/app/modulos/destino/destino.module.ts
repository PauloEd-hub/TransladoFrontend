import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { DestinoRoutingModule } from "./destino-routing.module";
import { CriarDestinoComponent } from "./components/criar-destino/criar-destino.component";


@NgModule({
    declarations: [CriarDestinoComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      SharedModule,
      DestinoRoutingModule,
    ],
  })
  export class DestinoModule {}