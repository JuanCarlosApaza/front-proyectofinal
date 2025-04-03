import { useState } from "react";

import { Espacio } from "../../models/Espacio";

import MiComponente from "../../components/FormularioComun";
import InputField from "../../components/InputForm";
import Swal from "sweetalert2";
import Navbar from "../../Navbar";
const CrearEspacio = () => {
  const [espacio, setEvento] = useState<Espacio>({
    nombre: "",
    ubicacion:"",
  });
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const newValue = name === "precio" ? parseFloat(value) : value;

    setEvento((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7045/api/Espacio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(espacio),
      });

      if (!response.ok) {
        console.log(espacio);
        console.log("Error1:");

        throw new Error("Error al crear el evento");
      }

      Swal.fire({
              icon: 'success',
              title: 'Datos enviados correctamente',
              text: 'Los datos se han enviado con éxito.',
            });
      setEvento({
        nombre: "",
        ubicacion:"",
      });
    } catch (error) {
      console.log(espacio);
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
        <MiComponente>
        
        <form onSubmit={handleSubmit}>
          <InputField
            name="nombre"
            placeholder="Nombre"
            value={espacio.nombre}
            onChange={handleChange}
            required
          />
          <InputField
            name="ubicacion"
            placeholder="Ubicacion"
            value={espacio.ubicacion}
            onChange={handleChange}
            required
          />
          
          
          <div className="mb-4   w-full  text-center ">
            <button type="submit" className=" bg-blue-400  p-4 rounded-2xl ">
              Crear Espacio
            </button>
          </div>
        </form>
      </MiComponente>
        </Navbar>
    
</div>
      
  );
};

export default CrearEspacio;
