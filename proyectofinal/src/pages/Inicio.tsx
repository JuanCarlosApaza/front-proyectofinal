import FetchData from "../components/CargaDatos";
import Carta from "../components/Carta";
import { Evento } from "../models/Evento";
import { Link } from "react-router-dom"


const Inicio = () => {
  return (
    <FetchData<Evento[]>
      url="https://localhost:7045/api/Evento"
      render={(eventos) => (
        <div>
          <h1 className="text-2xl font-bold mb-4">Eventos</h1>
          <Link to="/listaanuncios" className="text-blue-500 underline mb-4">Ver anuncios</Link>
          <Link to="/agregar" className="text-blue-500 underline mb-4">Agregar</Link>
          <Link to="/test" className="text-blue-500 underline mb-4">Test</Link>
          <Link to="/agregarespacio" className="text-blue-500 underline mb-4">AddEspacio</Link>
          <Link to="/listarespacio" className="text-blue-500 underline mb-4">ListarEspacio</Link>

          

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
              /> 
                </div>
              
            ))}
          </div>
        </div>
      )}
    />
  );
};

export default Inicio;
