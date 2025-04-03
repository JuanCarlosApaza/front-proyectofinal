import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RolModulos } from "./models/RolModulos";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [variables, setVariables] = useState<any>(null);
  const [dato, setDato] = useState<RolModulos[]>([]);
  const url: string = "https://localhost:7045/api/RolModulos";

  useEffect(() => {
    const storedVariables = sessionStorage.getItem("sesion");
    if (storedVariables) {
      setVariables(JSON.parse(storedVariables));
    }
  }, []);

  useEffect(() => {
    if (variables?.idrol) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${url}/${variables.idrol}`);
          if (!response.ok) {
            throw new Error("Error al obtener los datos");
          }
          const result: RolModulos[] = await response.json();
          setDato(result);
        } catch (err) {
          console.error("Error en la API:", err);
        }
      };
      fetchData();
    }
  }, [variables]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-400 to-emerald-400">
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#" className="text-2xl font-bold text-black">
          Eventos para Todos
        </a>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <Link
            to={"/listaranuncios"}
            className="p-3 text-black hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"
          >
            Inicio
          </Link>
          {dato.map((valor) => (
            <li key={valor.id}>
              <Link
                to={valor.modulos?.ruta ?? "#"}
                className="p-3 text-black hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"
              >
                {valor.modulos?.nombre}
              </Link>
            </li>
          ))}
          <Link
            to={"/"}
            className="p-3 text-black hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"
          >
            Salir
          </Link>
        </ul>

        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Icono
        </i>
      </header>

      <div
        className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-all ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        {dato.map((valor) => (
          <li key={valor.id}>
            <Link
              to={valor.modulos?.ruta ?? "#"}
              className="list-none w-full text-center p-4 hover:text-black transition-all cursor-pointer"
            >
              {valor.modulos?.nombre}
            </Link>
          </li>
        ))}
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Navbar;
