import { CartaProps } from "../interfaces/Evento";
import { Link } from "react-router-dom";
import { Boleto } from "../models/Boleto";
import { useState } from "react";
import Swal from "sweetalert2";
const Carta: React.FC<CartaProps> = ({
  id,
  nombre,
  precio,
  nombreEspacio,
  ubicacion,
  idusuario,
  idpago,
}) => {
  const [boleto, setBoleto] = useState<Boleto>({
    idEvento: id,
    idPago: idpago,
    idUsuario: idusuario,
    estado: "Activo",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7045/api/Boleto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(boleto),
      });

      if (!response.ok) {
        console.log(boleto);
        console.log(response);
        throw new Error("Error al crear a persona");
      }

      Swal.fire({
        icon: "success",
        title: "Boleto comprado con exito",
        text: "Boleto comprado con exito",
      });
      //     setBoleto({
      // idEvento: 0,
      // idPago: 0,
      // idUsuario: 0,
      // estado: "Activo",
      //     });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error instanceof Error ? error.message : "Algo salió mal.",
      });
    }
  };
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg  m-4 overflow-hidden">
        <div className="p-4 text-center bg-blue-300 w-full">
          <h1 className="text-black text-lg font-bold">{nombre}</h1>
        </div>
        <div className="p-4 text-center">
          <p className="text-gray-500">Espacio: {nombreEspacio}</p>
          <Link to={`/listaboletos/${id}`} className="block">
            enviar
          </Link>
          <iframe src={ubicacion} className=" w-full h-72"></iframe>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-4 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Comprar Boleto {precio} bs
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Carta;
