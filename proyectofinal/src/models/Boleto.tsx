import { Evento } from "./Evento";
import { Usuario } from "./Usuario";
import { Pago } from "./Pago";
export interface Boleto {
    id?: number;
    estado: string;
    idEvento?:number;
    evento?: Evento;
    idUsuario?:number;
    usuario?: Usuario;
    idPago?:number;
    pago?: Pago;
};