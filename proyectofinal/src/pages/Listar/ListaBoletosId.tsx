import { useParams } from "react-router-dom";
import FetchData from "../../components/CargaDatos";
import Tablas from "../../components/Tablas";
import Navbar from "../../Navbar";
import { Boleto } from "../../models/Boleto";
import WhatsAppButton from "../../components/Notificar";

const ListarBoletos = () => {
  const { id } = useParams<{ id: string }>();
  const eventoId = id ? parseInt(id, 10) : undefined;

  return (
    <div>
      <Navbar>
        <FetchData<Boleto[]>
          url="https://localhost:7045/api/Boleto"
          id={eventoId}
          render={(boletos) => (
            <Tablas
              items={[
                "Evento",
                "Usuario",
                "Precio",
                "Estado",
                "Notificar",
                "Modificar",
              ]}
            >
              {boletos.map((boleto, index) => (
                <tr key={index}>
                  <td className="border-gray-500 p-4 border-2">
                    {boleto.evento?.nombre}
                  </td>
                  <td className="border-gray-500 p-4 border-2">
                    {boleto.usuario?.correo}
                  </td>
                  <td className="border-gray-500 p-4 border-2">
                    {boleto.evento?.precio}
                  </td>
                  <td className="border-gray-500 p-4 border-2">
                    {boleto.pago?.estado}
                  </td>
                  <td className="text-center border-gray-500 border-2">
                    <WhatsAppButton
                      idBoleto={boleto.id }
                      idUsuario={boleto.usuario?.idusuario}
                      idEvento={boleto.evento?.idevento}
                      mensaje="Tu boleto ha sido confirmado"
                    />
                  </td>

                  <td className="text-center border-gray-500 border-2">
                    <button
                      type="submit"
                      className="bg-green-700 text-white border-2 p-2 rounded-xl"
                    >
                      Modificar
                    </button>
                  </td>
                </tr>
              ))}
            </Tablas>
          )}
        />
      </Navbar>
    </div>
  );
};

export default ListarBoletos;
