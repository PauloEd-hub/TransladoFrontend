import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransladoModule } from './modulos/translado/translado.module';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: () => 
      import("./modulos/user/user.module").then((m) => m.UserModule)
  },
  {
    path: 'veiculo',
    loadChildren: () => 
      import("./modulos/veiculos/veiculos.module").then((m) => m.VeiculosModule)
  },
  {
    path: 'translado',
    loadChildren: () => 
      import("./modulos/translado/translado.module").then((m) => m.TransladoModule)
  }, 

  {
    path: '',
    loadChildren: () => 
      import("./modulos/home/home.module").then((m) => m.HomeModule)
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
