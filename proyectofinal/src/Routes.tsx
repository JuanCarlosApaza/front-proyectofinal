import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio";
import ListaBoletosId from "./pages/ListaBoletosId";
import ListarAnuncios from "./pages/ListarAnuncios";
import AgregarEvento from "./pages/Agregar/AgregarEvento";
import Prueba from "./pages/Agregar/AddUsuarioRol";
import CrearEvento from "./pages/Agregar/AddEvento";
import CrearEspacio from "./pages/Agregar/AddEspacio";
import ListarEspacios from "./pages/Listar/ListarEspacios";

const MIsRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/listaboletos/:id" element={<ListaBoletosId />} />
                <Route path="/listaanuncios" element={<ListarAnuncios />} />
                <Route path="/agregar" element={<CrearEvento/>} />
                <Route path="/test" element={<Prueba />} />
                <Route path="/agregarespacio" element={<CrearEspacio />} />
                <Route path="/listarespacio" element={<ListarEspacios />} />


                </Routes>
        </Router>
    );
};

export default MIsRoutes;