import { Turno } from "./Turno";
import { Usuario } from "./Usuario";
import { Destino } from "./Destino";
import { Veiculo } from "./Veiculo";

export interface Translado{
    id: bigint,
    dataDesejada: Date,
    turno: Turno,
    veiculo: Veiculo,
    usuario: Usuario,
    destino: Destino
}

export interface TransladoRequest {
    dataDesejada: Date,
    turno: Turno,
    veiculo: Veiculo,
    usuario: Usuario,
    destino: Destino

}