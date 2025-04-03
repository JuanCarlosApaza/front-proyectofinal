import FetchData from "../components/CargaDatos";
import Carta from "../components/Carta";
import { Evento } from "../models/Evento";
import { Link } from "react-router-dom"
import Navbar from "../Navbar";
import Boton from "../components/Boton";
import { useEffect, useState } from "react";


const Inicio = () => {
    const [variables, setVariables] = useState<any>(null);
  useEffect(() => {
      const storedVariables = sessionStorage.getItem("sesion");
      if (storedVariables) {
        setVariables(JSON.parse(storedVariables));
      }
    }, []);
  return (
    <FetchData<Evento[]>
      url="https://localhost:7045/api/Evento"
      render={(eventos) => (
        <div>
          <Navbar>
            <div className="text-end p-4">
          <div className="inline-flex space-x-2">
          <Boton
              link="/agregar"
              name="Agregar un Evento"
              color="bg-violet-500"
            />
           
          </div>
        </div>

          

          <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
            {eventos.map((evento) => (
                <div className="col-span-1">
                   <Carta
                key={evento.idevento} 
                id={evento.idevento ?? 0}
                nombre={evento.nombre}
                precio={evento.precio}
                nombreEspacio={evento.espacio?.nombre ?? "Espacio no definido"}
                ubicacion={evento.espacio?.ubicacion ?? "Ubicación no definida"}
                idpago={1}
                idusuario={variables.idusuario}

              /> 
                </div>
              
            ))}
          </div>
          </Navbar>
          
        </div>
      )}
    />
  );
};

export default Inicio;
