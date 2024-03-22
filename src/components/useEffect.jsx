import React, { useState, useEffect } from 'react';

function Temporizador() {
  const [seconds, setSeconds] = useState(0);

  // Este efecto se ejecutará cada vez que el componente se monte
  // y cada vez que "seconds" cambie
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    // Devuelve una función de limpieza que detiene el intervalo cuando el componente se desmonta o "seconds" cambia
    return () => clearInterval(intervalId);
  }, [seconds]); // Especifica "seconds" como dependencia para que el efecto se vuelva a ejecutar cuando cambie

  return (
    <div>
      <p>Tiempo transcurrido: {seconds} segundos</p>
    </div>
  );
}

export default Temporizador;
