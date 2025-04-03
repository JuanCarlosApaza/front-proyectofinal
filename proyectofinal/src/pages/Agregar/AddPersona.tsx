import { useState } from "react";
import MiComponente from "../../components/FormularioComun";
import InputField from "../../components/InputForm";
import Swal from "sweetalert2";
import { Persona } from "../../models/Persona";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
const CrearPersona = () => {
  const [persona, setPersona] = useState<Persona>({
    nombre: "",
    apellido:"",
    telefono:"",
  });
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const newValue = name === "precio" ? parseFloat(value) : value;

    setPersona((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7045/api/Persona", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(persona),
      });

      if (!response.ok) {
        console.log(persona);
        console.log("Error1:");

        throw new Error("Error al crear a persona");
      }

      Swal.fire({
              icon: 'success',
              title: 'Datos enviados correctamente',
              text: 'Los datos se han enviado con éxito.',
            });
      console.log(response.ok)
      setPersona({
        nombre: "",
        apellido:"",
        telefono:"",
      });
    } catch (error) {
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
            value={persona.nombre}
            onChange={handleChange}
            required
          />
          <InputField
            name="apellido"
            placeholder="Apellido"
            value={persona.apellido}
            onChange={handleChange}
            required
          />
          <InputField
            name="telefono"
            placeholder="Telefono"
            value={persona.telefono}
            onChange={handleChange}
            required
          />
          
          
          <div className="mb-4   w-full  text-center ">
            <button type="submit" className=" bg-blue-400  p-4 rounded-2xl ">
              Crear Persona
            </button>
          </div>
          <div>

          </div>
        </form>
        <div className="text-center">
          <Link to={"/agregarusuario"} className=" text-gray-500">Siguiente Paso</Link>

          </div>
      </MiComponente>
        </Navbar>
    
</div>
      
  );
};

export default CrearPersona;
