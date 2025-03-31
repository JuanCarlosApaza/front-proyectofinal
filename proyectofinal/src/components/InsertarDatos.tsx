import { JSX, useState } from "react";
import Swal from 'sweetalert2';

interface PostDataProps<T, R> {
  url: string; // URL de la API
  body: T; // Cuerpo de la solicitud POST
  render: (data: R) => JSX.Element; // Función para renderizar la respuesta
}

function PostData<T, R>({ url, body, render }: PostDataProps<T, R>) {
  const [data, setData] = useState<R | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("Error sending data");
      }
      const result = await response.json();
      setData(result);
      
      Swal.fire({
        icon: 'success',
        title: 'Datos enviados correctamente',
        text: 'Los datos se han enviado con éxito.',
      });

    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
      
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error instanceof Error ? error.message : 'Algo salió mal.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={sendData} disabled={loading}>
        {loading ? "Sending..." : "Enviar Datos"}
      </button>
      
    </div>
  );
}

export default PostData;
