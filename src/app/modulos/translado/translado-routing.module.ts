import { RouterModule, Routes } from "@angular/router";
import { TransladoComponent } from "./translado.component";
import { NgModule } from "@angular/core";
import { CreateTransladoComponent } from "./components/create-translado/create-translado.component";





const routes: Routes = [
    {
        path: '',
        component: TransladoComponent,
        children: [
            {
                path: 'cadastrar-translado',
                component: CreateTransladoComponent,
            }
        ]
    }

]




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})

export class TransladoRoutingModule{}