import Boton from "../../components/Boton";
import FetchData from "../../components/CargaDatos";
import Tablas from "../../components/Tablas";
import { Espacio } from "../../models/Espacio";
import { RolModulos } from "../../models/RolModulos";
import Navbar from "../../Navbar";

const ListarRolModulo = () => {
  return (
    <div>
        <Navbar>
        <div className="text-end p-4">
          <div className="inline-flex space-x-2">
          <Boton
              link="/agregarmodulosrol"
              name="Agregar un Rol y Modulo"
              color="bg-violet-500"
            />
            <Boton
              link="/agregarroles"
              name="Agregar Rol"
              color="bg-violet-500"
            />
            <Boton
              link="/agregarmodulos"
              name="Agregar Modulo"
              color="bg-violet-500"
            />
          </div>
        </div>
        <FetchData<RolModulos[]>
        url="https://localhost:7045/api/RolModulos"
        render={(espacios) => (
          <Tablas items={["Nombre de Rol", "Nombre de Modulo","Ruta", "Modificar", "Eliminar"]}>
            {espacios.map((espacio, index) => {
             

              return (
                <tr key={index}>
                  <td className="border-gray-500 p-4 border-2">{espacio.roles?.nombre_rol}</td>
                  <td className="border-gray-500 p-4 border-2">{espacio.modulos?.nombre}</td>
                  <td className="border-gray-500 p-4 border-2">{espacio.modulos?.ruta}</td>

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

export default ListarRolModulo;