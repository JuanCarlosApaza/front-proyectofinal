import { useState } from "react";
import MiComponente from "../../components/FormularioComun";
import InputField from "../../components/InputForm";
import Swal from "sweetalert2";
import { Modulos } from "../../models/Modulos";
import Navbar from "../../Navbar";
const CrearModulos = () => {
  const [modulos, setModulos] = useState<Modulos>({
    nombre:"",
    ruta:"",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const newValue = name === "precio" ? parseFloat(value) : value;

    setModulos((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7045/api/Modulos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modulos),
      });

      if (!response.ok) {
        console.log(modulos);
        console.log(response);

        console.log("Error1:");

        throw new Error("Error al crear el usuario");
      }

      Swal.fire({
              icon: 'success',
              title: 'Datos enviados correctamente',
              text: 'Los datos se han enviado con éxito.',
            });
      setModulos({
        nombre:"",
        ruta:"",
      });
    } catch (error) {
      console.log(modulos);
      
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
            placeholder="Nombre de modulo"
            value={modulos.nombre}
            onChange={handleChange}
            required
          /><InputField
          name="ruta"
          placeholder="Ruta"
          value={modulos.ruta}
          onChange={handleChange}
          required
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

export default CrearModulos;
