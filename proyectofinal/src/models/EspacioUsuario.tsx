import { Espacio } from "./Espacio";
import { Usuario } from "./Usuario";

export interface EspacioUsuario{
    idespaciousuario:number,
    idusuario:number,
    usuario?: Usuario,
    espacio?:Espacio,
}