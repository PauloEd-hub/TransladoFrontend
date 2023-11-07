import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { UsuarioRegisterRequest, UsuarioRegisterResponse } from '../interfaces/Usuario';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/enviroments/endpoints';

@Injectable({
  providedIn: 'root'

})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }


  registerUser(usuario: UsuarioRegisterRequest): Observable<UsuarioRegisterResponse> {

    return this.httpClient.post<UsuarioRegisterResponse>(environment.API + endpoints.URL_REGISTRO_USUARIO, usuario )

  }
}
