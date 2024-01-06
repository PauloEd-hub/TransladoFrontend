import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AuthComponent } from "./components/auth/auth.component";
import { UserComponent } from "./user.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./components/register/register.component";
import { SharedModule } from "src/app/shared/shared.module";
import { UserRoutingModule } from "./user-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [UserComponent, AuthComponent, RegisterComponent],
    imports: [
      CommonModule,
      UserRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      SharedModule

    ],
  })
  export class UserModule {}