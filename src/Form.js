import React, { useState } from 'react';
import { useLocation } from 'wouter';
import './Form.css';

export default function Form() {
  const [key, setKey] = useState('');
  const [user, setUser] = useState('');
  const [location, setLocation] = useLocation();

  const send = () => {
    if (!key || key === '' || !user || user === '') return;

    localStorage.setItem('key', key);
    localStorage.setItem('user', user);

    setLocation('/button');
  };

  return (
    <div className="form">
      <input
        type="text"
        id="user"
        placeholder="Nombre"
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <input
        type="text"
        id="key"
        placeholder="Llave"
        onChange={(e) => setKey(e.target.value)}
      />
      <br />
      <button id="btn-send" onClick={send}>
        Enviar
      </button>
    </div>
  );
}
