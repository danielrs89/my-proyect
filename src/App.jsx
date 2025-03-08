import { useState, useEffect } from "react";
import "./App.css";
import galaxyGif from "./assets/galaxy.gif";

// Componente funcional para mostrar la información de NASA o una animación de carga
function HTMLNasa({ contenido }) {
  // Si 'contenido' está disponible, mostrar la información
  return contenido ? (
    <div key={contenido.date}>
      <div>
        <h1>{contenido.title}</h1>
        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={contenido.hdurl} alt={contenido.title} style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </div>

        <p>{contenido.explanation}</p>
      </div>
    </div>
  ) : (
    // Si no hay contenido, mostrar la animación de carga
    <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={galaxyGif} alt="Cargando..." style={{ maxWidth: "100%", maxHeight: "100%" }} />
    </div>
  );
}

function App() {
  const [contenido, setContenido] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Función para obtener los datos de la API de NASA
    const llamadaApi = async () => {
      try {
        // Llamada a la API para obtener la foto y datos del día
        const respuesta = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=V2PYEh4faXJomYpYqeNxBPFo0b6WYH5nOzqh8ta9"
        );
        const datos = await respuesta.json();

        // Retrasar la actualización de estado
        // directamente setContenido con los datos obtenidos.
        setContenido(datos);
        setCargando(false);
      } catch (error) {
        // Manejo de errores si la llamada a la API falla
        console.log("ERROR en llamada API:", error.message);
      }
    };

    // Llamada a la API al cargar el componente
    llamadaApi();
  }, []); // El array vacío [] asegura que la llamada se haga solo una vez al montar el componente

  // Mostrar el contenido o el GIF de carga dependiendo del estado 'cargando'
  return <HTMLNasa contenido={cargando ? null : contenido} />;
}

export default App;


