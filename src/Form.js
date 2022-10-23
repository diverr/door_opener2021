import React, { useState } from 'react';
import { useLocation } from 'wouter';
import './Form.css';

export default function Form() {
  const [key, setKey] = useState('');
  const [location, setLocation] = useLocation();

  const users = {
    '001': 'Papá',
    '002': 'Mamá',
    '003': 'Guadalupe',
  };

  const send = () => {
    if (!key || key === '') return;

    const userId = key.split('#')[1];

    localStorage.setItem('secret', key);
    localStorage.setItem('user', users[userId]);

    setLocation('/button');
  };

  return (
    <div className="form">
      <input
        type="text"
        id="key"
        placeholder="Introduce llave"
        onChange={(e) => setKey(e.target.value)}
      />
      <br />
      <button id="btn-send" onClick={send}>
        Enviar
      </button>
    </div>
  );
}
