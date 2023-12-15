import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransladoComponent } from './pages/translado/translado.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { FormVeiculosComponent } from './components/form-veiculos/form-veiculos.component';
import { FormTransladoComponent } from './components/form-translado/form-translado.component';
import { FormDestinoComponent } from './components/form-destino/form-destino.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TransladoComponent,
    TransladoComponent,
    HomeComponent,
    CarrosComponent,
    FormVeiculosComponent,
    FormTransladoComponent,
    FormDestinoComponent,
    TopbarComponent,
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
