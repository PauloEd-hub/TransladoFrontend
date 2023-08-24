import { Translado } from "./Translado";

export interface Veiculo{
    id: bigint,
    descricao: String,
    ocupacaoMaxima: number,
    translados: Translado[]
}