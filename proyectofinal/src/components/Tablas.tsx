import { BoletoProps } from "../interfaces/Boleto";
const Table: React.FC<BoletoProps> = ({nombreEvento,correo,estadoBoleto,precio}) => {
    return (
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
            <tr>
                <th className="py-2 px-4 border-b">Nombre Evento</th>
                <th className="py-2 px-4 border-b">Correo</th>
                <th className="py-2 px-4 border-b">Precio</th>
                <th className="py-2 px-4 border-b">Estado Boleto</th>
            </tr>
            </thead>

            
            <tbody>
                <tr>
                    <td>{nombreEvento}</td>
                    <td>{correo}</td>
                    <td>{precio}</td>
                    <td>{estadoBoleto}</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};
export default Table;