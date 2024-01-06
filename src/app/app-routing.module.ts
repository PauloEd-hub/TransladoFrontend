import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { AuthComponent } from './modulos/user/components/auth/auth.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'auth/login', component: AuthComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'adicionar/carro', component: CarrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
