import React, { useState, useEffect } from 'react';

const SimpleForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  
  const [isComplete, setIsComplete] = useState(false);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  useEffect(() => {
    
    const values = Object.values(formData);

    
    const allFieldsFilled = values.reduce((count, field) => {
      return field.trim() !== '' ? count + 1 : count;
    }, 0);


    setIsComplete(allFieldsFilled === 3);
  }, [formData]);

  return (
    <div>
      <h1>Preencha o formulário</h1>

      <form>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Digite seu email"
          />
        </div>

        <div>
          <label>Idade:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Digite sua idade"
          />
        </div>
      </form>

      {isComplete && <p>O formulário foi totalmente preenchido!</p>}
    </div>
  );
};

export default SimpleForm;
