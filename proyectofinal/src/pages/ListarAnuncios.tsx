import FetchData from "../components/CargaDatos";
import { Anuncio } from "../models/Anucion";

const ListarAnuncios = () => {
    return(
        <>
        <FetchData<Anuncio[]>
            url="https://localhost:7045/api/Anuncio"
            render={(anuncio)=>(
                <div>
                    <ul>
                        {anuncio.map((anuncio)=>(
                            <li key={anuncio.idanucion}>
                                <h1>{anuncio.titulo}</h1>
                                <p>{anuncio.imagen}</p>
                                <p>{anuncio.descripcion}</p>
                                <p>{anuncio.estado}</p>
                                <p>{anuncio.evento.nombre}</p>
                                <p>{anuncio.usuario.correo}</p>
                            </li>
                        ))}
                    </ul>
                        
                </div>
            )}
            />
        </>
    )

}
export default ListarAnuncios;