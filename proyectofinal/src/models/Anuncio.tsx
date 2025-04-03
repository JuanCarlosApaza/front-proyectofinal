import { Evento } from "./Evento";
import { Usuario } from "./Usuario";
export interface Anuncio {
    idanuncio?:number;
    titulo: string;
    imagen: string;
    descripcion: string;
    estado: string;
    idevento:number;
    evento?:Evento;
    idusuario: number;
    usuario?:Usuario;
}