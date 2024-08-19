import React, { useState } from 'react';

const InputList = () => {

  const [inputValue, setInputValue] = useState('');

  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]); 
      setInputValue(''); 
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Digite um item"
      />
      <button onClick={handleAddItem}>Adicionar</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
};

export default InputList;