import { Persona } from "./Persona";
export interface Usuario{
idusuario?: number;
correo: string;
contrasena: string;
estado: string;
fecha_creacion:string;
idpersona:number;
persona?:Persona;
};