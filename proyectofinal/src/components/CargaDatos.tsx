import { JSX, useEffect, useState } from "react";

interface FetchDataProps<T> {
  url: string; // Base URL para la API
  id?: number; // ID opcional para consultas específicas
  render: (data: T) => JSX.Element; // Función para renderizar los datos
}

function FetchData<T>({ url, id, render }: FetchDataProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(id ? `${url}/${id}` : url); // 📌 Agrega el ID si existe
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, id]); // 🔥 Vuelve a ejecutar si cambia la URL o el ID

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (data) return render(data);

  return null;
}

export default FetchData;
