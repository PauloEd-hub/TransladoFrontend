import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./components/auth/auth.component";






const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: 'login',
                component: AuthComponent,
            }
        ]
    }

]




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})

export class VeiculoRoutingModule{}