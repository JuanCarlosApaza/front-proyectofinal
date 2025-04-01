import { useEffect, useState } from "react";

interface FetchDataProps<T> {
  url: string;
  id?: number;
  onDataLoaded: (data: T) => void; 
}

function FetchData2<T>({ url, id, onDataLoaded }: FetchDataProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(id ? `${url}/${id}` : url);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const jsonData: T = await response.json(); 
        setData(jsonData);
        onDataLoaded(jsonData); 
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return null; 
}

export default FetchData2;
