import { CartaProps } from "../interfaces/Evento";
  import { Link } from "react-router-dom";
  const Carta: React.FC<CartaProps> = ({ id ,nombre, precio, nombreEspacio, ubicacion }) => {
    return (
      <div className="bg-white shadow-md rounded-lg  m-4 overflow-hidden">
        <div className="p-4 text-center bg-blue-300 w-full">
          <h1 className="text-black text-lg font-bold">{nombre}</h1>
        </div>
        <div className="p-4 text-center">
          <p className="text-gray-500">Espacio: {nombreEspacio}</p>
          <iframe src={ubicacion} className=" w-full h-72"></iframe>
        </div>
        <Link to={`/listaboletos/${id}`} className="block">
        <div className="p-4 text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Comprar Boleto {precio} bs
          </button>
          </div>
        </Link>
        
      </div>
    );
  };
  
  export default Carta;
  