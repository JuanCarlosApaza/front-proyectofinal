import { useEffect, useState } from "react";
import { UsuarioRol } from "../models/UsuarioRol";
import MiComponente from "../components/FormularioComun";
import InputField from "../components/InputForm";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
interface comprobar {
  correo: string;
  contrasena: string;
}

const InicioSesion = () => {
  const [dato, setDato] = useState<UsuarioRol[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7045/api/UsuarioRol");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const result: UsuarioRol[] = await response.json();
        setDato(result);
      } catch (err) {}
    };

    fetchData();
  }, []);
  const navigate = useNavigate();
  const [comprobar, setComprobar] = useState<comprobar>({
    correo: "",
    contrasena: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value;

    setComprobar((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let search:boolean = false;
    let idusuario:number = 0;
    let idrol:number = 0;
    let rol:string = "";
    let usuario:string = "";

    for (let index = 0; index < dato.length; index++) {
        if (dato[index].usuario?.correo == comprobar.correo && dato[index].usuario?.contrasena == comprobar.contrasena) {
         search = true;
         idusuario = dato[index].usuario?.idusuario ?? 0;
         idrol = dato[index].roles?.id??0;
         rol=dato[index].roles?.nombre_rol??"";
         usuario=dato[index].usuario?.correo??"";
        }
    }
    if (search) {
        sessionStorage.setItem("sesion",JSON.stringify({idusuario,idrol,rol,usuario}));
        navigate("/listaranuncios");
    }
    else{console.log("no encontrado")}
            
  };
  return (
    <div>
      <MiComponente>
        <form onSubmit={handleSubmit}>
          <img src={logo} alt="" className="w-60 mx-auto "/>
          <InputField
            name="correo"
            placeholder="Correo"
            value={comprobar.correo}
            onChange={handleChange}
            required
          />
          <InputField
            name="contrasena"
            placeholder="Contraseña"
            value={comprobar.contrasena}
            onChange={handleChange}
            required
          />

          <div className="mb-4   w-full  text-center ">
            <button type="submit" className=" bg-white text-gray-800  p-4 rounded-2xl ">
              Iniciar Sesion
            </button>
          </div>
          <div className="text-center">
          <Link to={"agregarpersona"} className=" text-gray-500">Registrate</Link>

          </div>
        </form>
      </MiComponente>
    </div>
  );
};

export default InicioSesion;
