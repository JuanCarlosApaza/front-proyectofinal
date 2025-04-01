import { useState } from "react";
import { Evento } from "../../models/Evento";
import { Espacio } from "../../models/Espacio";
import FetchData2 from "../../components/DevolverDatos";
import MostrarDatos from "../../components/MostrarDatos";
import MiComponente from "../../components/FormularioComun";
import InputField from "../../components/InputForm";
import Swal from "sweetalert2";
const CrearEvento = () => {
  const [datos, setDatos] = useState<Espacio[] | null>(null);
  const [idSeleccionado, setIdSeleccionado] = useState<number | null>(null);
  const [evento, setEvento] = useState<Evento>({
    nombre: "",
    precio: 0,
    idespacio: 0,
    estado: "Activo",
  });
  const manejarSeleccionado = (id: number) => {
    setIdSeleccionado(id);
  };

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
      const response = await fetch("https://localhost:7045/api/Evento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(evento),
      });

      if (!response.ok) {
        console.log(evento);
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
        precio: 0,
        idespacio: idSeleccionado || 0,
        estado:"Activo"
      });
    } catch (error) {
      console.log(evento);
      Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error instanceof Error ? error.message : 'Algo salió mal.',
            });
    }
  };

  return (
    <div>
      <FetchData2<Espacio[]>
        url="https://localhost:7045/api/Espacio"
        onDataLoaded={(data: Espacio[]) => {
          setDatos(data);
        }}
      />

      <MiComponente>
        
        <form onSubmit={handleSubmit}>
          <InputField
            name="nombre"
            placeholder="Nombre"
            value={evento.nombre}
            onChange={handleChange}
            required
          />
          <InputField
            name="precio"
            type="number"
            placeholder="Precio"
            value={evento.precio.toString()}
            onChange={handleChange}
            required
          />
          <label>Espacio</label>
          {datos && (
            <MostrarDatos
              datos={datos}
              name="nombre"
              id="idespacio"
              onSeleccionado={manejarSeleccionado}
            />
          )}

          <input
            type="number"
            name="idespacio"
            placeholder="idespacio"
            value={(evento.idespacio = idSeleccionado || 0)}
            onChange={handleChange}
            hidden
          />
          <div className="mb-4   w-full  text-center ">
            <button type="submit" className=" bg-blue-400  p-4 rounded-2xl ">
              Crear Evento
            </button>
          </div>
        </form>
      </MiComponente>
    </div>
  );
};

export default CrearEvento;
