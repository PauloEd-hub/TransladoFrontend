import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { FormVeiculosComponent } from './components/form-veiculos/form-veiculos.component';
import { FormTransladoComponent } from './modulos/translado/components/form-translado/form-translado.component';
import { FormDestinoComponent } from './components/form-destino/form-destino.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UserComponent } from './modulos/user/user.component';
import { VeiculosComponent } from './modulos/veiculos/veiculos.component';




import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { AuthComponent } from './modulos/user/components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    CarrosComponent,
    FormVeiculosComponent,
    FormTransladoComponent,
    FormDestinoComponent,
    TopbarComponent,
    UserComponent,
    VeiculosComponent,
    SlideshowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
