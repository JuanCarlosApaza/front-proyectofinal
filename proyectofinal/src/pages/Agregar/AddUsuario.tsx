import { useState } from "react";

import FetchData2 from "../../components/DevolverDatos";
import MostrarDatos from "../../components/MostrarDatos";
import MiComponente from "../../components/FormularioComun";
import InputField from "../../components/InputForm";
import Swal from "sweetalert2";
import { Usuario } from "../../models/Usuario";
import { Persona } from "../../models/Persona";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
const CrearUsuario = () => {
  const [datos, setDatos] = useState<Persona[] | null>(null);
  const [idSeleccionado, setIdSeleccionado] = useState<number | null>(null);
  const [usuario, setUsuario] = useState<Usuario>({
    correo: "",
    contrasena: "",
    fecha_creacion:new Date().toISOString(),
    estado:"Activo",
    idpersona: 0,
  });
  const manejarSeleccionado = (id: number) => {
    setIdSeleccionado(id);
  };

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
      const response = await fetch("https://localhost:7045/api/Usuario", {
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
        correo: "",
        contrasena: "",
        idpersona: idSeleccionado||0,
        fecha_creacion:new Date().toISOString(),
        estado:"Activo"
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
        <FetchData2<Persona[]>
        url="https://localhost:7045/api/Persona"
        onDataLoaded={(data: Persona[]) => {
          setDatos(data);
        }}
      />

      <MiComponente>
        
        <form onSubmit={handleSubmit}>
          <InputField
            name="correo"
            placeholder="Correo"
            value={usuario.correo}
            onChange={handleChange}
            required
          />
          <InputField
            name="contrasena"
            placeholder="Clave"
            value={usuario.contrasena}
            onChange={handleChange}
            required
          />
          <label>Persona</label>
          {datos && (
            <MostrarDatos
              datos={datos}
              name="nombre"
              id="idpersona"
              onSeleccionado={manejarSeleccionado}
            />
          )}

          <input
            type="number"
            name="idpersona"
            placeholder="idpersona"
            value={(usuario.idpersona = idSeleccionado || 0)}
            onChange={handleChange}
            hidden
          />
          <div className="mb-4   w-full  text-center ">
            <button type="submit" className=" bg-blue-400  p-4 rounded-2xl ">
              Crear Usuario
            </button>
          </div>

          
        </form>
        
      </MiComponente>
        </Navbar>
      
    </div>
  );
};

export default CrearUsuario;
