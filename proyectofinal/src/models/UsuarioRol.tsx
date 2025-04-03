import { Usuario } from "./Usuario";
import { Roles } from "./Roles";
export interface UsuarioRol{
    id?:number;
    idusuario:number;
    idrol:number;
    usuario?:Usuario;
    roles?:Roles;
}