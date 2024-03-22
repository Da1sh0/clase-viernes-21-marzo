import React, { useRef } from 'react';

const MensajeCambio = () => {
  const mensajeRef = useRef(null);

  const cambioMensaje = () => {
    mensajeRef.current.innerText = "Diiego, has cambiado el mensaje!!!";
  };

  return (
    <div>
      <div ref={mensajeRef}>Hola Diiego, esto es un mensaje Original.</div>
      <button onClick={cambioMensaje}>Cambiar mensaje</button>
    </div>
  );
};

export default MensajeCambio;

