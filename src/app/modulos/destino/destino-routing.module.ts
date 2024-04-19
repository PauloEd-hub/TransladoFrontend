import { RouterModule, Routes } from "@angular/router";
import { DestinoComponent } from "./destino.component";
import { NgModule } from "@angular/core";
import { CriarDestinoComponent } from "./components/criar-destino/criar-destino.component";


const routes: Routes = [
    {
        path: '',
        component: DestinoComponent,
        children: [
            {
                path: 'cadastrar-destino',
                component: CriarDestinoComponent,
            }
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})

export class DestinoRoutingModule{}