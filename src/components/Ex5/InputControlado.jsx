import React, { useState } from 'react';

const InputControlado = () => {
  
  const [texto, setTexto] = useState('');

  
  const handleInputChange = (event) => {
    setTexto(event.target.value); 
  };

  return (
    <div>
      <h1>Input Controlado</h1>
      <input
        type="text"
        value={texto}
        onChange={handleInputChange}
        placeholder="Digite algo"
      />
      <p>Texto digitado: {texto}</p>
    </div>
  );
};

export default InputControlado;
