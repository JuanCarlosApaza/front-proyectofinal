import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio";
import Prueba from "./pages/Agregar/AddUsuarioRol";
import CrearEvento from "./pages/Agregar/AddEvento";
import CrearEspacio from "./pages/Agregar/AddEspacio";
import ListarEspacios from "./pages/Listar/ListarEspacios";
import CrearUsuario from "./pages/Agregar/AddUsuario";
import CrearPersona from "./pages/Agregar/AddPersona";
import CrearModulos from "./pages/Agregar/AddModulos";
import CrearRoles from "./pages/Agregar/AddRoles";
import CrearModuloRol from "./pages/Agregar/AddRolModulos";
import CrearUsuarioRol from "./pages/Agregar/AddUsuarioRoles";
import InicioSesion from "./pages/InicioSesion";
import ListarRolModulo from "./pages/Listar/ListarRolModulo";
import ListarUsuarioRol from "./pages/Listar/ListarUsuarioRol";
import ListarEspacioUsuario from "./pages/Listar/ListarEspacioUsuario";
import ListarAnuncios from "./pages/Listar/ListarAnuncios";
import ListarBoletos from "./pages/Listar/ListaBoletosId";

const MIsRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<InicioSesion/>} />

                <Route path="/listaeventos" element={<Inicio/>} />
                <Route path="/agregar" element={<CrearEvento/>} />
                <Route path="/test" element={<Prueba />} />
                <Route path="/listarespacio" element={<ListarEspacios />} />
                <Route path="/listarrolmodulo" element={<ListarRolModulo />} />
                <Route path="/listausuariorol" element={<ListarUsuarioRol />} />
                <Route path="/listarespaciousuario" element={<ListarEspacioUsuario />} />
                <Route path="/listaranuncios" element={<ListarAnuncios />} />
                <Route path="/listaboletos/:id" element={<ListarBoletos />} />





                <Route path="/agregarpersona" element={<CrearPersona />} />
                <Route path="/agregarusuario" element={<CrearUsuario/>} />
                <Route path="/agregarmodulos" element={<CrearModulos/>} />
                <Route path="/agregarroles" element={<CrearRoles/>} />
                <Route path="/agregarmodulosrol" element={<CrearModuloRol/>} />
                <Route path="/agregarusuariosrol" element={<CrearUsuarioRol/>} />
                <Route path="/agregarespacio" element={<CrearEspacio />} />



                </Routes>
        </Router>
    );
};

export default MIsRoutes;