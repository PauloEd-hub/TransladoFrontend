import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VeiculosComponent } from "./veiculos.component";
import { RegisterVehicleComponent } from "./components/RegisterVehicle/RegisterVehicle.component";


const routes: Routes = [
    {
        path: '',
        component: VeiculosComponent,
        children: [
            {
                path: 'registro-veiculo',
                component: RegisterVehicleComponent,
            },
            {
                path: 'ver-veiculos',
                component: RegisterVehicleComponent,
            }
        ]
    }

]




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})

export class VeiculoRoutingModule{}