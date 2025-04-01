
import { useState } from "react";
import FetchData from "./CargaDatos";
import { Espacio } from "../models/Espacio";

const ComboBox: React.FC = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<string>("");

  return (
    <FetchData<Espacio[]>
      url="https://localhost:7045/api/Espacio"
      render={(espacios) => {
        const opciones = espacios.map((espacio) => espacio.nombre);

        return (
          <div className="flex flex-col items-center">
            <label className="mb-2">Selecciona un espacio:</label>
            <select
              value={opcionSeleccionada}
              onChange={(e) => setOpcionSeleccionada(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="" disabled>
                -- Selecciona una opción --
              </option>
              {opciones.map((opcion, index) => (
                <option key={index} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </div>
        );
      }}
    />
  );
};

export default ComboBox;