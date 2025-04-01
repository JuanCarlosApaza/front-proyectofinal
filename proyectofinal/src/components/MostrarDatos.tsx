import React from "react";

interface MostrarDatosProps {
  datos: any[];  
  name: string;   
  id: string;     
  onSeleccionado: (id: number) => void;  
}

const MostrarDatos: React.FC<MostrarDatosProps> = ({ datos, name, id, onSeleccionado }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nombreSeleccionado = event.target.value;
    
    const elemento = datos.find((item) => item[name] === nombreSeleccionado);

    if (elemento) {
    
      onSeleccionado(elemento[id]);
    }
  };

  return (
    <div className="mb-4 text-center rounded-lg border-1 p-4 border-black text-xl">
      <select id="selectEspacio" onChange={handleSelectChange}>
        <option value="">-- Selecciona --</option>
        {datos.map((elemento, index) => (
          <option key={index} value={elemento[name]}>
            {elemento[name]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MostrarDatos;
