import { useState } from "react";

interface WhatsAppButtonProps {
  idBoleto?: number;
  idUsuario?: number;
  idEvento?: number;
  mensaje: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  idBoleto,
  idUsuario,
  idEvento,
  mensaje,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://localhost:7045/api/Boleto/whatsapp-link?idBoleto=${idBoleto}&idUsuario=${idUsuario}&idEvento=${idEvento}&mensaje=${encodeURIComponent(mensaje)}`
      );

      if (!response.ok) {
        throw new Error("Error al obtener el enlace");
      }

      const data = await response.json();
      window.open(data.whatsappLink, "_blank"); 
      
    } catch (err) {
      setError("No se pudo generar el enlace de WhatsApp");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button 
        onClick={handleClick} 
        disabled={loading} 
        style={{ 
          padding: "10px 15px", 
          backgroundColor: "#25D366", 
          color: "white", 
          borderRadius: "5px", 
          border: "none", 
          cursor: "pointer" 
        }}
      >
        {loading ? "Generando..." : "Abrir WhatsApp"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default WhatsAppButton;