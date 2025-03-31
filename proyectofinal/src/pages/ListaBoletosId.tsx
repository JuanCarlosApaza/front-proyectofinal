import { useParams } from "react-router-dom";
import FetchData from "../components/CargaDatos";
import Table from "../components/Tablas";
import { Boleto } from "../models/Boleto";

const ListaBoletosId = () => {
  const { id } = useParams(); 

  return (
    <div>
      <FetchData<Boleto[]>
        url="https://localhost:7045/api/Boleto"
        id={Number(id)} 
        render={(boletos) => (
          <div>
            <h1>Boletos</h1>
            {boletos.map((boleto) => (
              <Table
                key={boleto.id}
                nombreEvento={boleto.evento.nombre}
                correo={boleto.usuario.correo}
                estadoBoleto={boleto.estado}
                precio={boleto.evento.precio}
              />
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default ListaBoletosId;
