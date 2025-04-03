import { useState } from "react";
import MiComponente from "../../components/FormularioComun";
import InputField from "../../components/InputForm";
import Swal from "sweetalert2";
import { Roles } from "../../models/Roles";
import Navbar from "../../Navbar";
const CrearRoles = () => {
  const [roles, setRoles] = useState<Roles>({
    nombre_rol: "",
    fecha_creacion:new Date().toISOString(),
    estado:"Activo",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const newValue = name === "precio" ? parseFloat(value) : value;

    setRoles((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7045/api/Roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roles),
      });

      if (!response.ok) {
        console.log(roles);
        console.log(response);

        console.log("Error1:");

        throw new Error("Error al crear el usuario");
      }

      Swal.fire({
              icon: 'success',
              title: 'Datos enviados correctamente',
              text: 'Los datos se han enviado con éxito.',
            });
      setRoles({
        nombre_rol:"",
        fecha_creacion:new Date().toISOString(),
        estado:"Activo"
      });
    } catch (error) {
      console.log(roles);
      
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
            name="nombre_rol"
            placeholder="Nombre de Rol"
            value={roles.nombre_rol}
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

export default CrearRoles;
