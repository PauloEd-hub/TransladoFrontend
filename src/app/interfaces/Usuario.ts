export interface Usuario{
    id: bigint,
    nome: String,
    login: String,
    senha: String
}

export interface UsuarioRequest{
    nome: String,
    email: String,
    senha: String
}

export interface UsuarioResponse{

}