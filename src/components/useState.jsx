import React, { useState } from 'react';

function Contador() {
  // Declara una variable de estado llamada "count" inicializada en 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrementar
      </button>
    </div>
  );
}

export default Contador;
