import { Modulos } from "./Modulos";
import { Roles } from "./Roles";
export interface RolModulos{
    id?:number;
    idrol:number
    idmodulo:number;
    roles?:Roles;
    modulos?:Modulos;
}