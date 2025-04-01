import {Espacio} from "../models/Espacio";
export interface Evento {
    idevento?:number;
    nombre:string;
    estado?:string;
    precio:number;
    idespacio:number;
    espacio?:Espacio;
}