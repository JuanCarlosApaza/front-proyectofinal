import FetchData from "../../components/CargaDatos";
import Tablas from "../../components/Tablas";
import { Espacio } from "../../models/Espacio";
import Navbar from "../../Navbar";

const ListarEspacios = () => {
  return (
    <div>
      <Navbar>
         <FetchData<Espacio[]>
        url="https://localhost:7045/api/Espacio"
        render={(espacios) => (
          <Tablas items={["Nombre", "Ubicacion", "Modificar", "Eliminar"]}>
            {espacios.map((espacio, index) => {
              const textoRecortado = espacio.ubicacion.length > 50 
                ? espacio.ubicacion.slice(0, 50) + "..." 
                : espacio.ubicacion;

              return (
                <tr key={index}>
                  <td className="border-gray-500 p-4 border-2">{espacio.nombre}</td>
                  <td className="border-gray-500 p-4 border-2">{textoRecortado}</td>
                  
                  <td className="text-center border-gray-500  border-2 "><button type="submit" className="bg-green-700 text-white  border-2 p-2 rounded-xl">Modificar</button></td>
                  <td className="text-center border-gray-500  border-2"><button className="bg-red-500 text-white border-2 p-2 rounded-xl">Eliminar</button></td>
                </tr>
              );
            })}
          </Tablas>
        )}
      /> 
        </Navbar>
    
    </div>
  );
};

export default ListarEspacios;
