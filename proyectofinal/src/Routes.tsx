import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio";
import ListaBoletosId from "./pages/ListaBoletosId";
import ListarAnuncios from "./pages/ListarAnuncios";
import AgregarEvento from "./pages/AgregarEvento";

const MIsRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/listaboletos/:id" element={<ListaBoletosId />} />
                <Route path="/listaanuncios" element={<ListarAnuncios />} />
                <Route path="/agregar" element={<AgregarEvento />} />

                </Routes>
        </Router>
    );
};

export default MIsRoutes;