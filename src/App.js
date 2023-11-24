import React, { useState, useEffect } from 'react';



function App() {

  

  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const visitCookie = getCookie('visitCount');

    if (visitCookie) {
      // Si la cookie existe, el usuario ya ha visitado la página
      setVisitCount(parseInt(visitCookie, 10));
    } else {
      // Si la cookie no existe, este es el primer acceso del usuario
      setVisitCount((prevCount) => prevCount + 1);
      setCookie('visitCount', visitCount + 1);
    }
  }, [visitCount]);

  const setCookie = (name, value, days = 1) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const getCookie = (name) => {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  };

  return (
    <div className="bg-slate-600 h-screen flex justify-center items-center ">
      <div className="App">
      <h1>Contador de Visitas: {visitCount}</h1>
      {/* Contenido de tu aplicación */}
    </div>
      <div className="w-[450px]">
        <img src="https://cdn.memegenerator.es/imagenes/memes/thumb/16/31/16316651.jpg" alt="" />
      </div>
    </div>
  );
}

export default App;
