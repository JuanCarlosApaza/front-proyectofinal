import { useState } from "react";

const ComboBox: React.FC = () => {
  const opciones: string[] = ["Opción 1", "Opción 2", "Opción 3"];
  const [opcionseleccionada, setopcionsnueva] = useState<string>(opciones[0]);
  return (
    <div>
      <select
        value={opcionseleccionada}
        onChange={(e) => setopcionsnueva(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      >
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ComboBox;
