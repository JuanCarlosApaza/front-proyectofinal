import { Link } from "react-router-dom";
import Boton from "../../components/Boton";
import FetchData from "../../components/CargaDatos";
import Tablas from "../../components/Tablas";
import { EspacioUsuario } from "../../models/EspacioUsuario";
import Navbar from "../../Navbar";

const ListarEspacioUsuario = () => {
  return (
    <div>
      <Navbar>
        <div className="text-end p-4">
          <div className="inline-flex space-x-2">
          <Boton
              link="/listarespacio"
              name="Listar Espacios"
              color="bg-violet-500"
            />
            <Boton
              link="/agregarespacio"
              name="Agregar Espacio"
              color="bg-violet-500"
            />
            <Boton
              link="/agregarusuario"
              name="Agregar Usuario"
              color="bg-violet-500"
            />
          </div>
        </div>

        <FetchData<EspacioUsuario[]>
          url="https://localhost:7045/api/EspacioUsuario"
          render={(espacios) => (
            <Tablas
              items={["Usuario", "Nombre de Espacio", "Modificar", "Eliminar"]}
            >
              {espacios.map((espacio, index) => {
                return (
                  <tr key={index}>
                    <td className="border-gray-500 p-4 border-2">
                      {espacio.usuario?.correo}
                    </td>
                    <td className="border-gray-500 p-4 border-2">
                      {espacio.espacio?.nombre}
                    </td>

                    <td className="text-center border-gray-500  border-2 ">
                      <button
                        type="submit"
                        className="bg-green-700 text-white  border-2 p-2 rounded-xl"
                      >
                        Modificar
                      </button>
                    </td>
                    <td className="text-center border-gray-500  border-2">
                      <button className="bg-red-500 text-white border-2 p-2 rounded-xl">
                        Eliminar
                      </button>
                    </td>
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

export default ListarEspacioUsuario;
