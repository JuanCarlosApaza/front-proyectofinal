import { Evento } from "./Evento";
import { Usuario } from "./Usuario";
export interface Anuncio {
    idanucion: number;
    titulo: string;
    imagen: string;
    descripcion: string;
    estado: string;
    evento: Evento;
    usuario: Usuario;

}