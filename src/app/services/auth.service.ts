import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLoginRequest, UsuarioLoginResponse } from '../interfaces/Usuario';
import { environment } from 'src/enviroments/environment';
import { endpoints } from 'src/enviroments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUsuario(usuarioLogin: UsuarioLoginRequest): Observable<UsuarioLoginResponse> {
    return this.http.post<UsuarioLoginResponse>(environment.API + endpoints.URL_LOGIN_USUARIO, usuarioLogin)

  } 
}
