import { CartaProps } from "../interfaces/Evento";
  import { Link } from "react-router-dom";
  const Carta: React.FC<CartaProps> = ({ id ,nombre, precio, nombreEspacio, ubicacion }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 m-4 overflow-hidden">
        <div className="p-4 text-center">
          <h1 className="text-black text-lg font-bold">{nombre}</h1>
        </div>
        <div className="p-4 text-center">
          <p className="text-gray-700 font-semibold">Precio: ${precio}</p>
          <p className="text-gray-500">Espacio: {nombreEspacio}</p>
          <p className="text-gray-400">Ubicación: {ubicacion}</p>
        </div>
        <Link to={`/listaboletos/${id}`} className="block">
        <div className="p-4 text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Comprar Boleto
          </button>
          </div>
        </Link>
        
      </div>
    );
  };
  
  export default Carta;
  