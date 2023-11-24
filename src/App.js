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
      <div className="flex flex-col gap-7 text-center">
        <h1 className='text-[30px] font-extrabold text-white  '>Chismosos</h1>
        <a href="https://www.contadorvisitasgratis.com" title="contador de visitas en mi web" className=' flex justify-center '>
          <img src="https://counter8.optistats.ovh/private/contadorvisitasgratis.php?c=wq8p13fx3l3kwb1lf5j9jxpda9maegyf" border="0" title="contador de visitas en mi web" alt="contador de visitas en mi web"  className='h-16'/>

        </a>
        <div className="w-[450px]">
          <img src="https://cdn.memegenerator.es/imagenes/memes/thumb/16/31/16316651.jpg" alt="" className='w-full' />
        </div>
      </div>
    </div>
  );
}

export default App;
