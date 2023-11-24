import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


function App() {
  useEffect(() => {
    // Reemplaza 'G-6C96JQ3Y6S' con tu ID de medición
    ReactGA.initialize('G-6C96JQ3Y6S');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="bg-slate-600 h-screen flex justify-center items-center ">
    <div className="App">
      {/* Contenido de tu aplicación */}chismosa
    </div>
    <div className="w-[450px]">
      <img src="https://cdn.memegenerator.es/imagenes/memes/thumb/16/31/16316651.jpg" alt="" />
    </div>
  </div>
  );
}

export default App;
