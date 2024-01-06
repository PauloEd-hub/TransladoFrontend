import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AuthComponent } from "./components/auth/auth.component";
import { UserComponent } from "./user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [UserComponent, AuthComponent],
    imports: [
      CommonModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,

    ],
  })
  export class UserModule {}