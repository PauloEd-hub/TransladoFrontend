import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TransladoComponent } from './pages/translado/translado.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'auth/login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'translado', component: TransladoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
