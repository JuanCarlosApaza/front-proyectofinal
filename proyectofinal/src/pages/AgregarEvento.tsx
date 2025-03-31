import React, { useState } from "react";
import PostData from "../components/InsertarDatos"; // Suponiendo que el componente PostData está en esta ruta

// Definir la interfaz para los datos que serán enviados
interface Evento {
  nombre: string;
  precio: number;
  estado: string;
  idespacio: number;
}

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<Evento>({
    nombre: "",
    precio: 1000,
    estado: "Activo",
    idespacio: 1,
  });

  // Estado adicional para controlar el envío
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "precio" || name === "idespacio" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4 border rounded-md">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          placeholder="Estado"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          placeholder="Precio"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="idespacio"
          value={formData.idespacio}
          onChange={handleChange}
          placeholder="ID Espacio"
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Enviar
        </button>
      </form>

      {isSubmitted && (
        <PostData
          url="https://localhost:7045/api/Evento"
          body={formData}
          render={(data) => (
            <div>
              <h3>Response:</h3>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        />
      )}
    </div>
  );
};

export default Formulario;
