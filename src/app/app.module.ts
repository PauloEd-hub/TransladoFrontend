import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransladoComponent } from './pages/translado/translado.component';
import { HomeComponent } from './pages/home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CarrosComponent } from './pages/carros/carros.component';
import { FormVeiculosComponent } from './components/form-veiculos/form-veiculos.component';
import {MatDividerModule} from '@angular/material/divider';
import { FormTransladoComponent } from './components/form-translado/form-translado.component';
import { FormDestinoComponent } from './components/form-destino/form-destino.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TransladoComponent,
    HeaderComponent,
    TransladoComponent,
    HomeComponent,
    CarrosComponent,
    FormVeiculosComponent,
    FormTransladoComponent,
    FormDestinoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
