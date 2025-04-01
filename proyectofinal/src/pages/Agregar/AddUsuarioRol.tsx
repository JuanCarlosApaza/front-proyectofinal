import { useState } from "react";
import FetchData2 from "../../components/DevolverDatos";
import MostrarDatos from "../../components/MostrarDatos"; 
import { Usuario } from "../../models/Usuario";
import { Roles } from "../../models/Roles";

const Prueba = () => {
  const [datos, setDatos] = useState<Usuario[] | null>(null); 
  const [idSeleccionado, setIdSeleccionado] = useState<number | null>(null); 
  const [idSeleccionado2, setIdSeleccionado2] = useState<number | null>(null); 
  const [datos2, setDatos2] = useState<Roles[] | null>(null); 
  const manejarSeleccionado = (id: number) => {
    setIdSeleccionado(id);
  };
  const manejarSeleccionado2 = (id: number) => {
    setIdSeleccionado2(id);
  };

  return (
    <div>
      <FetchData2<Usuario[]>
        url="https://localhost:7045/api/Usuario"
        onDataLoaded={(data: Usuario[]) => {
          console.log("Datos recibidos:", data);
          setDatos(data); 
        }}
      />
      <FetchData2<Roles[]>
        url="https://localhost:7045/api/Roles"
        onDataLoaded={(data2: Roles[]) => {
          console.log("Datos recibidos:", data2);
          setDatos2(data2); 
        }}
      />
      
      <h1>Estas en test</h1>

      {datos && <MostrarDatos datos={datos} name="correo" id="idusuario" onSeleccionado={manejarSeleccionado} />}
      {datos2 && <MostrarDatos datos={datos2} name="nombre_rol" id="id" onSeleccionado={manejarSeleccionado2} />}

      {idSeleccionado && <p><strong>ID Espacio Seleccionado:</strong> {idSeleccionado}</p>}
      {idSeleccionado2 && <p><strong>ID Espacio Seleccionado2:</strong> {idSeleccionado2}</p>}

    </div>
  );
};

export default Prueba;
