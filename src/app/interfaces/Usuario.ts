import { Role } from "./Role"

export interface Usuario{
    id: bigint,
    nome: String,
    login: String,
    senha: String,
    role: Role
}

export interface UsuarioLoginRequest {
    email: String,
    senha: String,
}

export interface UsuarioLoginResponse {
    token: string
}


export interface UsuarioRegisterRequest{
    nome: String,
    email: String,
    senha: String,
    // role: Role
    
}
export interface UsuarioRegisterResponse{
    id: bigint,
    nome: String,
    email: String,
    senha: String,
    role: Role

}