
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscDebugStart } from 'react-icons/vsc'; 
import { Anuncio } from "../../models/Anuncio";
import FetchData from "../../components/CargaDatos";
import Navbar from "../../Navbar";
import Boton from "../../components/Boton";
const ListarAnuncios = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const organizarAnuncios = (anuncios: Anuncio[]) => {
        if (isMobile) {
            const anuncioActual = anuncios[currentPage % anuncios.length];
            return [
                { ...anuncioActual, posicion: 'center', numero: (currentPage % anuncios.length) + 1 }
            ];
        } else {
            const totalPages = Math.ceil(anuncios.length / 5);
            const currentPageAdjusted = currentPage % totalPages;
            const startIndex = currentPageAdjusted * 5;
            let endIndex = startIndex + 5;
            
            if (endIndex > anuncios.length) {
                endIndex = anuncios.length;
            }
            
            const anunciosPagina = [...anuncios].slice(startIndex, endIndex);
            
            type PosicionesMap = {
                [key: number]: string[];
            };

            const posicionesMap: PosicionesMap = {
                1: ['center'],
                2: ['left', 'right'],
                3: ['left', 'center', 'right'],
                4: ['left-far', 'left', 'right', 'right-far'],
                5: ['left-far', 'left', 'center', 'right', 'right-far']
            };
            
            const count = Math.min(Math.max(anunciosPagina.length, 1), 5) as 1 | 2 | 3 | 4 | 5;
            const posiciones = posicionesMap[count];
            const numeros = Array.from({length: anunciosPagina.length}, (_, i) => i + 1);
            
            return anunciosPagina.map((anuncio, index) => ({
                ...anuncio,
                posicion: posiciones[index],
                numero: numeros[index]
            }));
        }
    };

    const handleNext = (totalAnuncios: number) => {
        if (isMobile) {
            setCurrentPage((prev) => (prev + 1) % totalAnuncios);
        } else {
            const totalPages = Math.ceil(totalAnuncios / 5);
            setCurrentPage((prev) => (prev + 1) % totalPages);
        }
    };

    const handlePrev = (totalAnuncios: number) => {
        if (isMobile) {
            setCurrentPage((prev) => (prev - 1 + totalAnuncios) % totalAnuncios);
        } else {
            const totalPages = Math.ceil(totalAnuncios / 5);
            setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        }
    };

    return (
        <div>
            <Navbar>
                <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed relative">
            {/* <div 
                style={{backgroundImage: "url('/fondo.jpg')",filter: 'blur(8px)',position: 'absolute',top: 0,left: 0,right: 0,bottom: 0,zIndex: -1}} 
            ></div> */}

            <div className="text-center w-full mx-auto p-0 bg-opacity-50 min-h-screen">
                <div className="pt-4 pb-0 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        {/* <img src="/logo1.png" alt="Logo" className="h-40 mr-4" /> */}
                        <h1 className="text-2xl sm:text-3xl md:text-7xl font-bold text-white font-[Yeseva_One]">EVENTOS BOLIVIA</h1>
                    </div>
                    {/* <div className="text-end p-4">
          <div className="inline-flex space-x-2">
          <Boton
              link="/agregar"
              name="Agregar un Evento"
              color="bg-violet-500"
            />
            
          </div>
        </div> */}

                    {/* <Link to="/eventos">
                        <button 
                            className="text-xl sm:text-2xl italic text-white cursor-pointer hover:text-gray-400 hover:bg-black transition duration-300 bg-[#737373] rounded-full px-6 py-2">
                            EVENTOS
                        </button>
                    </Link> */}
                </div>

                <FetchData<Anuncio[]>
                    url="https://localhost:7045/api/Anuncio"
                    render={(anuncios) => (
                        <div className="relative w-full p-0 m-0">
                            <div className={`relative flex justify-center items-end ${isMobile ? 'h-[500px]' : 'h-[600px] sm:h-[650px] md:h-[700px]'} w-full overflow-visible p-0 m-0`}>
                                {organizarAnuncios(anuncios).map((anuncio) => (
                                    <div 
                                        key={`${anuncio.idanuncio}-${currentPage}-${anuncio.numero}`} 
                                        className={`absolute transition-all duration-300 ${isMobile ? 'bottom-10' : 'bottom-0'} ${isMobile ? '' : 'hover:-translate-y-6 sm:hover:-translate-y-8 md:hover:-translate-y-10'} hover:z-50
                                            ${anuncio.posicion === 'left-far' ? 'left-0 sm:left-[2%] md:left-[5%] scale-75 sm:scale-85 md:scale-90 z-10 hover:scale-80 sm:hover:scale-90 md:hover:scale-95' : ''} 
                                            ${anuncio.posicion === 'left' ? 'left-[10%] sm:left-[15%] md:left-[20%] scale-85 sm:scale-90 md:scale-95 z-20 hover:scale-90 sm:hover:scale-95 md:hover:scale-100' : ''} 
                                            ${anuncio.posicion === 'center' ? 'left-1/2 transform -translate-x-1/2 scale-90 sm:scale-95 md:scale-100 z-30 hover:scale-95 sm:hover:scale-100 md:hover:scale-105' : ''} 
                                            ${anuncio.posicion === 'right' ? 'left-[50%] sm:left-[55%] md:left-[60%] scale-85 sm:scale-90 md:scale-95 z-20 hover:scale-90 sm:hover:scale-95 md:hover:scale-100' : ''} 
                                            ${anuncio.posicion === 'right-far' ? 'left-[65%] sm:left-[70%] md:left-[75%] scale-75 sm:scale-85 md:scale-90 z-10 hover:scale-80 sm:hover:scale-90 md:hover:scale-95' : ''}`
                                        }
                                    >
                                        <div className="absolute -top-6 left-0 w-full text-center text-base sm:text-lg font-bold text-white bg-black p-2">
                                            {anuncio.titulo}
                                        </div>

                                        <img 
                                            src={`https://localhost:7045/${anuncio.imagen}`} 
                                            alt={anuncio.titulo}
                                            className={`${isMobile ? 'w-[280px] h-[380px]' : 'w-[250px] h-[350px] sm:w-[300px] sm:h-[450px] md:w-[350px] md:h-[550px]'} object-cover object-center border border-gray-300 shadow-lg rounded-sm hover:shadow-xl transition-shadow duration-300`}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 rounded-b-sm">
                                            <p className="text-sm sm:text-base line-clamp-2">
                                                {anuncio.descripcion || `Evento ${(currentPage % anuncios.length) + 1} de ${anuncios.length}`}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {anuncios.length > (isMobile ? 1 : 1) && (
                                <div className="flex justify-center gap-6 mt-2 sm:mt-5 pb-4">
                                    <button
                                    onClick={() => handlePrev(anuncios.length)}
                                    className={`px-5 py-2 sm:px-6 sm:py-3 rounded-md text-lg sm:text-xl bg-black hover:bg-blue-600 text-white flex items-center`}
                                    >
                                    <VscDebugStart className="mr-4 transform rotate-180" size={30} /> 
                                    </button>
                                    <button
                                    onClick={() => handleNext(anuncios.length)}
                                    className={`px-5 py-2 sm:px-6 sm:py-3 rounded-md text-lg sm:text-xl bg-black hover:bg-blue-600 text-white flex items-center`}
                                    >
                                    <VscDebugStart className="ml-4" size={30} />
                                    </button>
                               </div>
                            )}
                        </div>
                    )}
                />
            </div>
        </div>
            </Navbar>
             
        </div>
       
    );
}

export default ListarAnuncios;