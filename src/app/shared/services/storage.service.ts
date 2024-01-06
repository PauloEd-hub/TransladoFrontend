import { Injectable } from '@angular/core';
import { Usuario, UsuarioLoginRequest } from '../interfaces/Usuario'

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

 

  constructor() { }

signOut(): void {
  window.sessionStorage.clear()
}

public saveToken(token: string) {
  window.sessionStorage.removeItem(TOKEN_KEY);
  window.sessionStorage.setItem(TOKEN_KEY, token)
}

public saveUser(user: UsuarioLoginRequest): void {
  window.sessionStorage.removeItem(USER_KEY);
  window.sessionStorage.setItem(USER_KEY, JSON.stringify(user))
}

public getUser() {
  const user = window.sessionStorage.getItem(USER_KEY);
  if(user) {
    return JSON.parse(user)
  }

  return {}
}






}
