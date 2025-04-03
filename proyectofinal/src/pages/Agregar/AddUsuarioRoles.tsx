import { useState } from "react";

import FetchData2 from "../../components/DevolverDatos";
import MostrarDatos from "../../components/MostrarDatos";
import MiComponente from "../../components/FormularioComun";
import Swal from "sweetalert2";
import { UsuarioRol } from "../../models/UsuarioRol";
import { Usuario } from "../../models/Usuario";
import { Roles } from "../../models/Roles";
import Navbar from "../../Navbar";
const CrearUsuarioRol = () => {
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

  const [usuario, setUsuario] = useState<UsuarioRol>({
    
    idusuario: 0,
    idrol: 0,

  });
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const newValue = name === "precio" ? parseFloat(value) : value;

    setUsuario((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7045/api/UsuarioRol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        console.log(usuario);
        console.log(response);

        console.log("Error1:");

        throw new Error("Error al crear el usuario");
      }

      Swal.fire({
              icon: 'success',
              title: 'Datos enviados correctamente',
              text: 'Los datos se han enviado con éxito.',
            });
      setUsuario({
        idrol:0,
        idusuario:0,
      });
    } catch (error) {
      console.log(usuario);
      
      Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error instanceof Error ? error.message : 'Algo salió mal.',
            });
    }
  };

  return (
    
<div>
    <Navbar>
      <FetchData2<Usuario[]>
        url="https://localhost:7045/api/Usuario"
        onDataLoaded={(data: Usuario[]) => {
          setDatos(data); 
        }}
      />
      <FetchData2<Roles[]>
        url="https://localhost:7045/api/Roles"
        onDataLoaded={(data2: Roles[]) => {
          setDatos2(data2); 
        }}
      />
      <MiComponente>
        
        <form onSubmit={handleSubmit}>
          
          <label>Persona</label>
          {datos && <MostrarDatos datos={datos} name="correo" id="idusuario" onSeleccionado={manejarSeleccionado} />}
      {datos2 && <MostrarDatos datos={datos2} name="nombre_rol" id="id" onSeleccionado={manejarSeleccionado2} />}

          <input
            type="number"
            name="idusuario"
            placeholder="idusuario"
            value={(usuario.idusuario = idSeleccionado || 0)}
            onChange={handleChange}
            hidden
          />
          <input
            type="number"
            name="idrol"
            placeholder="idrol"
            value={(usuario.idrol = idSeleccionado2 || 0)}
            onChange={handleChange}
            hidden
          />
          <div className="mb-4   w-full  text-center ">
            <button type="submit" className=" bg-blue-400  p-4 rounded-2xl ">
              Crear Usuario Rol
            </button>
          </div>
        </form>
      </MiComponente>  
    </Navbar>

    </div>
  );
};

export default CrearUsuarioRol;
