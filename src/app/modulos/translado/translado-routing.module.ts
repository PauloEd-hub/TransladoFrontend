import { RouterModule, Routes } from "@angular/router";
import { TransladoComponent } from "./translado.component";
import { FormTransladoComponent } from "./components/form-translado/form-translado.component";
import { NgModule } from "@angular/core";





const routes: Routes = [
    {
        path: '',
        component: TransladoComponent,
        children: [
            {
                path: 'cadastrar-translado',
                component: FormTransladoComponent,
            }
        ]
    }

]




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})

export class TransladoRoutingModule{}