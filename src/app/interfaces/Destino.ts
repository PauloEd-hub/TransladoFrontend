import { Translado } from './Translado';


export interface Destino{
    id: bigint,
    nome: String,
    sigla: String,
    translados: Array<Translado>
}

export interface DestinoRequest{

}

export interface DestinoResponse{
    
}