import { Evento } from "./Evento";
import { Usuario } from "./Usuario";
import { Pago } from "./Pago";
export interface Boleto {
    id: number;
    estado: string;
    evento: Evento;
    usuario: Usuario;
    pago: Pago;
};