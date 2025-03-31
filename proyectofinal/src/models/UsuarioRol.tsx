import { Usuario } from "./Usuario";
import { Roles } from "./Roles";
export interface UsuarioRol{
    id:number;
    usuario:Usuario;
    rol:Roles;
}