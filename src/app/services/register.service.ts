import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { UsuarioRegisterRequest, UsuarioRegisterResponse } from '../interfaces/Usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class RegisterService {

  private readonly API = `${environment}/user`

  constructor(private httpClient: HttpClient) { }


  registerUser(usuario: UsuarioRegisterRequest): Observable<UsuarioRegisterResponse> {

    return this.httpClient.post<UsuarioRegisterResponse>(`${this.API}`, usuario)

  }
}
