import React, { useRef, useState } from 'react';

const MensajeCambio = () => {
  const mensajeRef = useRef(null);
  const [nuevoMensaje, setNuevoMensaje] = useState(""); 
  const [historialMensajes, setHistorialMensajes] = useState([]);

  const cambioMensaje = () => {
    if (nuevoMensaje.trim() !== "") {
      mensajeRef.current.innerText = nuevoMensaje;
      setHistorialMensajes([...historialMensajes, nuevoMensaje]);
      setNuevoMensaje("");
    }
  };

  return (
    <div>
      <div ref={mensajeRef}>Hola Diego, este es un mensaje original.</div>
      <input type="text" value={nuevoMensaje} onChange={(e) => setNuevoMensaje(e.target.value)} placeholder="Ingresa el nuevo mensaje"/>
      <button onClick={cambioMensaje}>Cambiar mensaje</button>
      <div>
        <h2>Historial de mensajes:</h2>
        <ul>
          {historialMensajes.map((mensaje, index) => (
            <li key={index}>{mensaje}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MensajeCambio;
